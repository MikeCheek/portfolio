import React, { useState, useEffect } from 'react'
import detectBrowser from '../../utilities/detectBrowser'

import * as styles from "./layout.module.scss"

import { LayoutProps } from './layout.types'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Ball from '../../atoms/ball/ball'
import Separator from '../../atoms/separator/separator'
import ArrowUp from '../../atoms/arrowUp/arrowUp'

import BallMoving from '../../assets/ballMoving.svg'
import BallStill from '../../assets/ballStill.svg'
import Toggle from '../../atoms/toggle/toggle'

const Layout = ({ children, lightMode, changeDarkMode }: LayoutProps): JSX.Element => {
    const [browser, setBrowser] = useState<string>('Safari')

    useEffect(() => {
        setBrowser(detectBrowser())
    }, [])

    useEffect(() => {
        if(lightMode){
            document.getElementsByTagName("html")[0].style.backgroundColor = "var(--grey)";
            document.getElementsByTagName("html")[0].style.color = "var(--black)";
        }
        else
            document.getElementsByTagName("html")[0].style.cssText = "none";
    }, [lightMode])

    return (
        <div id="top" className={styles.layout}>
            <NavBar lightMode={lightMode} />
            {
                browser === 'Safari' ?
                    <Ball BallSvg={BallStill} fastAnimation />
                    :
                    <Ball BallSvg={BallMoving} />
            }
            <Toggle toggled={lightMode} changeToggle={changeDarkMode} />

            {children}

            <Separator />
            <Footer lightMode={lightMode} />
            <ArrowUp />
        </div>

    )
}

export default Layout
