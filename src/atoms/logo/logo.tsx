import React from 'react'

import * as styles from './logo.module.scss'
import { LogoProps } from './logo.types'

import Mlogo from '../../assets/logo.svg'
import { useThemeContext } from '../../utilities/themeContext'

const Logo = ({ width = 50, to = '/', title = 'Go to Home Page' }: LogoProps): JSX.Element => {

    const theme: string = useThemeContext()

    const color: string = theme === "dark" ? "#FFFEFD" : "#000000"

    return (
        <a href={to} title={title} className={styles.logo}>
            <Mlogo width={width + "px"} height={width / 1.56 + "px"} fill={color} />
        </a>
    )
}

export default Logo
