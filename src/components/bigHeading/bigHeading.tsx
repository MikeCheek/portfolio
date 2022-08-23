import React from 'react'
import GoDown from '../goDown/goDown'
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
          <span>Discover my background!</span>
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
          <span>Look at my projects!</span>
        </HoverPopUp>{' '}
        on the web
      </h2>
      {/*<Circles number={5} />*/}
      <GoDown />
    </div>
  )
}

export default BigHeading
