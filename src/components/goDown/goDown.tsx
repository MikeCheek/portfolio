import React from 'react'
import Arrow from '../../atoms/arrow/arrow'
import * as styles from './goDown.module.scss'

const GoDown = () => {
  return (
    <div className={styles.arrowWrap} onClick={() => window.scroll(0, window.innerHeight)}>
      <div className={styles.arrow1}>
        <Arrow down />
      </div>
      <div className={styles.arrow2}>
        <Arrow color="var(--pink)" down />
      </div>
    </div>
  )
}

export default GoDown
