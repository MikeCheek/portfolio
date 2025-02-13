import React from "react"
import styles from "./index.module.scss"
import BannerProps from "./index.types"

const Index = ({text, href}: BannerProps) => {
  return href ? (
    <a className={styles.banner} href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <p className={styles.banner}>{text}</p>
  )
}

export default Index
