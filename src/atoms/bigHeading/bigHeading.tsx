import React from 'react'
import HoverPopUp from '../../components/hoverPopUp/hoverPopUp'
import * as styles from './bigHeading.module.scss'

const BigHeading = () => {
  return (
    <div className={styles.heading}>
      <h1>Hi, I'm Michele Pulvirenti</h1>
      <h2>
        I'm a{' '}
        <HoverPopUp>
          <span className={styles.colored}>developer</span>
          <span>See my skills!</span>
        </HoverPopUp>{' '}
        and I'm currently{' '}
        <HoverPopUp>
          <span className={styles.colored}>working</span>
          <span>See my work experiences!</span>
        </HoverPopUp>{' '}
        on the{' '}
        <HoverPopUp>
          <span className={styles.colored}>web</span>
          <span>See my works!</span>
        </HoverPopUp>
      </h2>
      <div className={styles.goDownWrap}>
        <div className={styles.goDown} onClick={() => window.scroll(0, window.innerHeight * 0.95)}></div>
      </div>
    </div>
  )
}

export default BigHeading
