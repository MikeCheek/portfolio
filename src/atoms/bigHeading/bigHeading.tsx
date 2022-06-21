import React from 'react'
import * as styles from './bigHeading.module.scss'

const BigHeading = () => {
  return (
    <div className={styles.heading}>
      <h1>Hi, I'm Michele Pulvirenti</h1>
      <h2>
        I'm a <span className={styles.colored}>developer</span> and I'm currently{' '}
        <span className={styles.colored}>working</span> on the <span className={styles.colored}>web</span>
      </h2>
      <div className={styles.goDownWrap}>
        <div className={styles.goDown} onClick={() => window.scroll(0, window.innerHeight * 0.95)}></div>
      </div>
    </div>
  )
}

export default BigHeading
