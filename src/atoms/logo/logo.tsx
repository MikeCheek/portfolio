import React from 'react'

import * as styles from './logo.module.scss'
import { LogoProps } from './logo.types'

import logo from '../../assets/logo.svg'

const Logo = ({width = 100, to = '/', title = 'Go to Home Page' }: LogoProps): JSX.Element => {
    return (
        <a href={to} title={title}>
            <img 
                src={logo} 
                alt="Logo"
                className={styles.logo}
                width={width + "px"}
                height={"auto"}
                title="Logo"
            />
        </a>
    )
}

export default Logo
