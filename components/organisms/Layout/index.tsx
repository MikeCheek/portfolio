import React, {useState, useEffect} from "react"
import detectBrowser from "@utilities/detectBrowser"

import styles from "./index.module.scss"
import {LayoutProps} from "./index.types"

import Footer from "@atoms/Footer"
import Separator from "@atoms/Separator"
import ArrowUp from "@molecules/ArrowUp"

import Network from "@atoms/Network"
import ProgressPage from "@atoms/ProgressPage"
import Background from "@molecules/Background"

const Index = ({children, noGameLink = false}: LayoutProps): JSX.Element => {
  return (
    <main>
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
