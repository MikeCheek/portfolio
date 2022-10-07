import React from 'react'
import GoDown from '../goDown'
import HoverPopUp from '../hoverPopUp'
import * as styles from './index.module.scss'

const Index = () => {
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
        <HoverPopUp href="#projects" down>
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

export default Index
