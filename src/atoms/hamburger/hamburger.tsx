import React from 'react'

import * as styles from './hamburger.module.scss'
import {HamburgerProps} from './hamburger.types'

const Hamburger = ({onClick, navBarOpen}: HamburgerProps): JSX.Element => {
  const darkStyle: React.CSSProperties = {backgroundColor: 'var(--ham-bg-dark)'}

  return (
    <button className={styles.hamburger} onClick={onClick} /*onKeyDown={onClick}*/ tabIndex={0}>
      <div className={navBarOpen ? styles.crossLine1 : styles.hamLine1} style={darkStyle}></div>
      <div className={navBarOpen ? styles.crossLine2 : styles.hamLine2} style={darkStyle}></div>
      <div className={navBarOpen ? styles.crossLine3 : styles.hamLine3} style={darkStyle}></div>
    </button>
  )
}

export default Hamburger
