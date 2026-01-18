import React from "react"
import styles from "./index.module.scss"
import BadgeProps from "./index.types"

const Index = ({text, active, onClick, fulltext}: BadgeProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? styles.wrapActive : styles.wrap}
      data-fulltext={fulltext || text} // Fallback to text if fulltext is missing
    >
      {text}
    </button>
  )
}

export default Index
