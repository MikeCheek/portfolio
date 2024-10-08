import React from "react"
import styles from "./index.module.scss"
import ArrowProps from "./index.types"

const Index = ({
  right,
  down,
  up,
  color = "var(--orange)",
  onClick = () => {},
  injectStyle,
  hideMobile = false,
  hideDesktop = false,
}: ArrowProps) => {
  const arrowStyle = {
    transform: down ? "rotate(45deg)" : right ? "rotate(315deg)" : up ? "rotate(225deg)" : "rotate(135deg)",
    borderColor: color,
  }
  return (
    <div
      className={`${styles.arrowWrap} ${hideMobile ? styles.hideMobile : hideDesktop ? styles.hideDesktop : null}`}
      style={injectStyle}
      onClick={onClick}
    >
      <div style={arrowStyle} className={styles.arrow}></div>
    </div>
  )
}

export default Index
