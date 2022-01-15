import React from 'react'
import { useThemeContext } from '../../utilities/themeContext'

import * as styles from './hamburger.module.scss'
import { HamburgerProps } from './hamburger.types'

const Hamburger = ({onClick, navBarOpen}: HamburgerProps): JSX.Element => {

    const theme = useThemeContext()

    const darkStyle: React.CSSProperties = {"backgroundColor": "var(--white)"}
    const lightStyle: React.CSSProperties = {"backgroundColor": "var(--black)"}

    return (
        <div className={styles.hamburger} onClick={onClick} /*onKeyDown={onClick}*/ role={"button"} tabIndex={0}>
            <div className={navBarOpen ? styles.crossLine1 : styles.hamLine1} style={theme === "dark" ? darkStyle : lightStyle} ></div>
            <div className={navBarOpen ? styles.crossLine2 : styles.hamLine2} style={theme === "dark" ? darkStyle : lightStyle} ></div>
            <div className={navBarOpen ? styles.crossLine3 : styles.hamLine3} style={theme === "dark" ? darkStyle : lightStyle} ></div>
        </div>
        
    )
}

export default Hamburger
