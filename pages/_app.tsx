import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }: AppProps) {
  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    // Add a fallback or logging mechanism here if needed
    // For example, log the error to an external monitoring service
    if (reason instanceof Error) {
      console.error("Stack trace:", reason.stack);
    }
  });
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
