import React from 'react'

import * as styles from './hamburger.module.scss'
import { HamburgerProps } from './hamburger.types'

const Hamburger = ({onClick, navBarOpen, lightMode}: HamburgerProps): JSX.Element => {

    const darkStyle: React.CSSProperties = {"backgroundColor": "var(--white)"}
    const lightStyle: React.CSSProperties = {"backgroundColor": "var(--black)"}

    return (
        <div className={styles.hamburger} onClick={onClick} /*onKeyDown={onClick}*/ role={"button"} tabIndex={0}>
            <div className={navBarOpen ? styles.crossLine1 : styles.hamLine1} style={lightMode? lightStyle : darkStyle} ></div>
            <div className={navBarOpen ? styles.crossLine2 : styles.hamLine2} style={lightMode? lightStyle : darkStyle} ></div>
            <div className={navBarOpen ? styles.crossLine3 : styles.hamLine3} style={lightMode? lightStyle : darkStyle} ></div>
        </div>
        
    )
}

export default Hamburger
