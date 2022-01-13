import React, { useState, useEffect } from 'react'

import * as styles from './navBar.module.scss'
import { NavBarProps } from './navBar.types'

import Logo from '../../atoms/logo/logo'
import Navigation from '../navigation/navigation'
import Hamburger from '../../atoms/hamburger/hamburger'

const NavBar = ({lightMode}: NavBarProps): JSX.Element => {

    const [navBarOpen, setNavBarOpen] = useState<boolean>(false);

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (document.getElementById("navBar")) {
                if (currentScrollPos === 0) {
                    document.getElementById("navBar")!.style.top = "0";
                } else if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navBar")!.style.top = "0";
                } else if (!navBarOpen) {
                    document.getElementById("navBar")!.style.top = "-75px";
                }
                
                if (currentScrollPos === 0 || currentScrollPos < 200) {
                    document.getElementById("arrowUp")!.style.bottom = "-500px";
                } else {
                    document.getElementById("arrowUp")!.style.bottom = "0";
                }
            }

            prevScrollpos = currentScrollPos;
        }
    });
    
    useEffect(() => {
        let tmp =  document.getElementById("navBar");
        if(tmp){
            lightMode? tmp.style.backgroundColor = "var(--transparent-white)" : tmp.style.cssText = "none";
        }
    }, [lightMode])

    const closeNavBar = () => {
        setNavBarOpen(false);
        let tmp =  document.getElementById("navBar");
        if(tmp){
            tmp.style.backgroundColor = lightMode? "var(--transparent-white)" : "var(--transparent-black)";
        }
        document.body.style.overflowY = "scroll";
        document.body.style.height = "auto";
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }

    const openNavBar = () => {
        setNavBarOpen(true);
        let tmp =  document.getElementById("navBar");
        if(tmp){
            tmp.style.backgroundColor = lightMode? "var(--white)" : "var(--black)";
        }
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }

    return (
        <div className={lightMode? styles.navBarDark: styles.navBar} id="navBar">
            <div className={styles.logo}>
                <Logo lightMode={lightMode}/>
            </div>

                <div className={styles.navigationDesktop}>
                    <Navigation lightMode={lightMode} />
                </div>

            {
                navBarOpen?
                    <div className={styles.navigationMobile}>
                        <Navigation onClick={closeNavBar} lightMode={lightMode} />
                    </div>
                    :
                    null
            }

                    <div className={styles.hamburger}>
                        <Hamburger onClick={navBarOpen ? closeNavBar : openNavBar} navBarOpen={navBarOpen} lightMode={lightMode} />
                    </div>
        </div>
    )
}

export default NavBar

