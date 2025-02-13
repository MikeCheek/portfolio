import React from "react"
import styles from "./index.module.scss"
import BadgeProps from "./index.types"

const Index = ({text, active, onClick}: BadgeProps) => {
  return (
    <button type="button" onClick={onClick} className={active ? styles.wrapActive : styles.wrap}>
      {text}
    </button>
  )
}

export default Index
