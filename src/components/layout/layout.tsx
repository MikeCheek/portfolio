import React from 'react'

import * as styles from "./layout.module.scss"

import { LayoutProps } from './layout.types'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import AnimatedBg from '../../assets/animated-bg.svg'

const backgroundStyle = {
    zIndex: -1,
    width: "100vw",
    height: "100%",
    position: "fixed",
  }

const Layout = ({children, isBlocking = false}: LayoutProps ): JSX.Element => {
    return (
        <div id="top">
            <NavBar isBlocking={isBlocking} />
            <AnimatedBg style={backgroundStyle} />
            <div className={styles.layout} >
                {children}
            </div>
            <Footer />
        </div>
        
    )
}

export default Layout
