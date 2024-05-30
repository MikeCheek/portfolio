import React, {useState, useEffect} from "react"

import styles from "./index.module.scss"
import {LayoutProps} from "./index.types"

import Footer from "@atoms/Footer"
import Separator from "@atoms/Separator"
import ArrowUp from "@molecules/ArrowUp"

import Network from "@atoms/Network"
import ProgressPage from "@atoms/ProgressPage"
import Background from "@molecules/Background"

import {Montserrat, Rubik} from "next/font/google"

const montserrat = Montserrat({
  // weight: ["700"],
  display: "swap",
  subsets: ["latin"],
})

const rubik = Rubik({
  // weight: ["300", "500", "700"],
  display: "swap",
  subsets: ["latin"],
})

const Index = ({children, noGameLink = false}: LayoutProps): JSX.Element => {
  return (
    <main className={`${montserrat.className} ${rubik.className}`}>
      <Background />
      <div id="top" className={styles.layout}>
        <ProgressPage />
        <Network />
        {children}

        {!noGameLink && (
          <>
            <Separator />
            <Footer noGameLink={noGameLink} />
          </>
        )}
      </div>
      {!noGameLink && <ArrowUp />}
    </main>
  )
}

export default Index
