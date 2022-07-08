import React from 'react'
//import Circles from '../../atoms/circles/circles'
import HoverPopUp from '../hoverPopUp/hoverPopUp'
import * as styles from './bigHeading.module.scss'

const BigHeading = () => {
  return (
    <div className={styles.heading}>
      <h1>
        Hi, I'm{' '}
        <HoverPopUp href="#about" down>
          <span title="" className={styles.colored}>
            Michele Pulvirenti
          </span>
          <span>See my background!</span>
        </HoverPopUp>
      </h1>
      <h2>
        As a{' '}
        <HoverPopUp href="#skills">
          <span title="" className={styles.colored}>
            developer
          </span>
          <span>See my skills!</span>
        </HoverPopUp>{' '}
        <br />I currently{' '}
        <HoverPopUp href="#works" down>
          <span title="" className={styles.colored}>
            work
          </span>
          <span>See my work experiences!</span>
        </HoverPopUp>{' '}
        on the{' '}
        <HoverPopUp href="#projects" down>
          <span title="" className={styles.colored}>
            web
          </span>
          <span>See my works!</span>
        </HoverPopUp>
      </h2>
      {/*<Circles number={5} />*/}
      <div className={styles.arrowWrap} onClick={() => window.scroll(0, window.innerHeight)}>
        <div className={styles.arrow1}>
          <div className={styles.arrow}></div>
        </div>
        <div className={styles.arrow2}>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </div>
  )
}

export default BigHeading
