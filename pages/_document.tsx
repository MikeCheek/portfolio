import {Html, Head, Main, NextScript} from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global font imports or icons go here */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="c84fc9aa-4627-4323-8c9a-151289867272"
          data-blockingmode="auto"
          type="text/javascript"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
