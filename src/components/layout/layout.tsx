import React from 'react'

import * as styles from "./layout.module.scss"

import { LayoutProps } from './layout.types'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Ball from '../../atoms/ball/ball'
import Separator from '../../atoms/separator/separator'
import ArrowUp from '../../atoms/arrowUp/arrowUp'

const Layout = ({children, isBlocking = false}: LayoutProps ): JSX.Element => {
    return (
        <div id="top" className={styles.layout}>
            <NavBar isBlocking={isBlocking} />
            <Ball />
            
            {children}
            <Separator />
            <Footer />
            <ArrowUp />
        </div>
        
    )
}

export default Layout
