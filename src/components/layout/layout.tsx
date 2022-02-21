import React, { useState, useEffect } from 'react'
import detectBrowser from '../../utilities/detectBrowser'
import { ThemeContext } from '../../utilities/themeContext'

import * as styles from "./layout.module.scss"

import { LayoutProps } from './layout.types'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Ball from '../../atoms/ball/ball'
import Separator from '../../atoms/separator/separator'
import ArrowUp from '../../atoms/arrowUp/arrowUp'

import BallMoving from '../../assets/ballMoving.svg'
import BallStill from '../../assets/ballStill.svg'

const Layout = ({ children, noMenu = false }: LayoutProps): JSX.Element => {
    const [browser, setBrowser] = useState<string>('waiting')

    const [lightMode, setLightMode] = useState<boolean>(false)

    const changeDarkMode = () => {
        setLightMode(!lightMode)
    }

    useEffect(() => {
        setBrowser(detectBrowser())
    }, [])

    useEffect(() => {
        if (lightMode) {
            document.getElementsByTagName("html")[0].style.backgroundColor = "var(--bg-light)";
            document.getElementsByTagName("html")[0].style.color = "var(--col-light)";
        }
        else
            document.getElementsByTagName("html")[0].style.cssText = "";
    }, [lightMode])

    return (
        <ThemeContext.Provider value={lightMode ? "light" : "dark"}>
            <div id="top" className={styles.layout}>
                <NavBar changeToggle={changeDarkMode} noMenu={noMenu} />
                {
                    browser === "waiting" ? null :
                        browser === 'Safari' ?
                            <Ball BallSvg={BallStill} />
                            :
                            <Ball BallSvg={BallMoving} />
                }

                {children}

                <Separator />
                <Footer />
                <ArrowUp />
            </div>
        </ThemeContext.Provider>

    )
}

export default Layout
