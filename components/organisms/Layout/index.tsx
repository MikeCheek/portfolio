import React, {useState, useEffect} from "react"
import detectBrowser from "@utilities/detectBrowser"

import styles from "./index.module.scss"
import {LayoutProps} from "./index.types"

import Footer from "@atoms/Footer"
import Ball from "@atoms/Ball"
import Separator from "@atoms/Separator"
import ArrowUp from "@molecules/ArrowUp"

import BallMoving from "@assets/ballMoving.svg"
import BallStill from "@assets/ballStill.svg"
import Network from "@atoms/Network"
import ProgressPage from "@atoms/ProgressPage"
import GameOfLife from "@atoms/GameOfLife"

const Index = ({children, noGameLink = false}: LayoutProps): JSX.Element => {
  const [browser, setBrowser] = useState<string>("waiting")

  useEffect(() => {
    setBrowser(detectBrowser())
  }, [])

  return (
    <main>
      {/* {browser === "waiting" ? null : browser === "Safari" ? (
        <Ball BallSvg={BallStill} />
      ) : (
        <Ball BallSvg={BallMoving} />
      )} */}
      <div className={styles.background}>
        <GameOfLife />
      </div>
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
