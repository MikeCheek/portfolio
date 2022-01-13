import React from 'react'

import * as styles from './logo.module.scss'
import { LogoProps } from './logo.types'

import Mlogo from '../../assets/logo.svg'

const Logo = ({ width = 50, to = '/', title = 'Go to Home Page', lightMode }: LogoProps): JSX.Element => {

    const color: string = lightMode? "#000000" : "#FFFEFD"

    return (
        <a href={to} title={title} className={styles.logo}>
            <Mlogo width={width + "px"} height={width/1.56 + "px"} fill={color} />
        </a>
    )
}

export default Logo
