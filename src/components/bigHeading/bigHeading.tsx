import React from 'react'
import Circles from '../../atoms/circles/circles'
import HoverPopUp from '../hoverPopUp/hoverPopUp'
import * as styles from './bigHeading.module.scss'

const BigHeading = () => {
  return (
    <div className={styles.heading}>
      <h1>
        Hi, I'm{' '}
        <HoverPopUp down>
          <a href="#about" title="" className={styles.colored}>
            Michele Pulvirenti
          </a>
          <span>See my background!</span>
        </HoverPopUp>
      </h1>
      <h2>
        I'm a{' '}
        <HoverPopUp>
          <a href="#skills" title="" className={styles.colored}>
            developer
          </a>
          <span>See my skills!</span>
        </HoverPopUp>{' '}
        and I'm currently{' '}
        <HoverPopUp down>
          <a href="#works" title="" className={styles.colored}>
            working
          </a>
          <span>See my work experiences!</span>
        </HoverPopUp>{' '}
        on the{' '}
        {/* <HoverPopUp down>
          <a href="#none" title="" className={styles.colored}>
            web
          </a>
          <span>See my works!</span>
        </HoverPopUp> */}
        web
      </h2>
      <Circles number={5} />
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
