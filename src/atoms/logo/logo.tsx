import React from 'react'

import * as styles from './logo.module.scss'
import { LogoProps } from './logo.types'

import Mlogo from '../../assets/logo.svg'

const Logo = ({ width = 60, to = '/', title = 'Go to Home Page' }: LogoProps): JSX.Element => {
    return (
        <a href={to} title={title} className={styles.logo}>
            <Mlogo width={width + "px"} />
        </a>
    )
}

export default Logo