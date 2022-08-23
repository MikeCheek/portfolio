import React from 'react'
import * as styles from './rotatingWorld.module.scss'
import RotatingWorldProps from './rotatingWorld.types'

const RotatingWorld = ({children}: RotatingWorldProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.circle}></div>
      <div className={styles.circle} style={{opacity: 0.7, animationDelay: '50ms'}}></div>
      <div className={styles.circle} style={{opacity: 0.4, animationDelay: '100ms'}}></div>
      <div className={styles.circle} style={{opacity: 0.1, animationDelay: '150ms'}}></div>
      {children}
    </div>
  )
}

export default RotatingWorld
