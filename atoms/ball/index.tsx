import React from "react"

import styles from "./index.module.scss"
import BallProps from "./index.types"

const Index = ({BallSvg, fastAnimation = false}: BallProps): JSX.Element => {
  return (
    <div className={fastAnimation ? styles.ballFast : styles.ball}>
      <BallSvg />
    </div>
  )
}

export default Index
