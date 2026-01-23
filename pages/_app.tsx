import "../styles/globals.scss"
import type {AppProps} from "next/app"
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next" // Moved from app/layout
import {AnimatePresence} from "framer-motion"
import {useRouter} from "next/router"
import {fixTimeoutTransition} from "@utilities/fixCssRoute"
import PageTransition from "@molecules/PageTransition"

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  fixTimeoutTransition(300)

  return (
    <>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        {/* PageTransition acts as your global wrapper */}
        <PageTransition key={router.pathname}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>

      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default MyApp
