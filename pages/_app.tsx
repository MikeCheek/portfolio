import "../styles/globals.scss"
import type {AppProps} from "next/app"
import {Analytics} from "@vercel/analytics/react"
import {AnimatePresence} from "framer-motion"
import {useRouter} from "next/router"
import {fixTimeoutTransition} from "@utilities/fixCssRoute"
import PageTransition from "@molecules/PageTransition"

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  fixTimeoutTransition(300)

  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason)
    // Add a fallback or logging mechanism here if needed
    // For example, log the error to an external monitoring service
    if (reason instanceof Error) {
      console.error("Stack trace:", reason.stack)
    }
  })
  return (
    <>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <PageTransition key={router.pathname}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
      <Analytics />
    </>
  )
}

export default MyApp
