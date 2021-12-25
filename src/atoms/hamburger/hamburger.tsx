import React from 'react'

import * as styles from './hamburger.module.scss'
import { HamburgerProps } from './hamburger.types'

const Hamburger = ({onClick, navBarOpen}: HamburgerProps): JSX.Element => {
    return (
        <div className={styles.hamburger} onClick={onClick} /*onKeyDown={onClick}*/ role={"button"} tabIndex={0}>
            <div className={navBarOpen ? styles.crossLine1 : styles.hamLine1}></div>
            <div className={navBarOpen ? styles.crossLine2 : styles.hamLine2}></div>
            <div className={navBarOpen ? styles.crossLine3 : styles.hamLine3}></div>
        </div>
        
    )
}

export default Hamburger
