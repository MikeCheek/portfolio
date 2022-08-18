import React from 'react'
import * as styles from './arrow.module.scss'
import ArrowProps from './arrow.types'

const Arrow = ({
  right,
  down,
  up,
  color = 'var(--orange)',
  onClick = () => {},
  injectStyle,
  hideMobile = false,
  hideDesktop = false,
}: ArrowProps) => {
  const arrowStyle = {
    transform: down ? 'rotate(45deg)' : right ? 'rotate(315deg)' : up ? 'rotate(225deg)' : 'rotate(135deg)',
    borderColor: color,
  }
  return (
    <div
      className={`${styles.arrowWrap} ${hideMobile ? styles.hideMobile : hideDesktop ? styles.hideDesktop : ''}`}
      style={injectStyle}
      onClick={onClick}
    >
      <div style={arrowStyle} className={styles.arrow}></div>
    </div>
  )
}

export default Arrow
