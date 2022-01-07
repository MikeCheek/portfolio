import React from 'react'

import * as styles from "./layout.module.scss"

import { LayoutProps } from './layout.types'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'

const Layout = ({children, isBlocking = false}: LayoutProps ): JSX.Element => {
    return (
        <div id="top" className={styles.layout}>
            <NavBar isBlocking={isBlocking} />
            
            {children}
            
            <Footer />
        </div>
        
    )
}

export default Layout
