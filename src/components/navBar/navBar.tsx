import React, {useState, useEffect} from 'react'

import * as styles from './navBar.module.scss'
import {NavBarProps} from './navBar.types'

//import Logo from '../../atoms/logo/logo'
import Navigation from '../navigation/navigation'
import Hamburger from '../../atoms/hamburger/hamburger'
//import Toggle from '../../atoms/toggle/toggle'
import NavItem from '../../atoms/navItem/navItem'

const NavBar = ({/*changeToggle,*/ noMenu = false}: NavBarProps): JSX.Element => {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false)

  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      if (document.getElementById('navBar')) {
        if (currentScrollPos === 0) {
          document.getElementById('navBar')!.style.top = '0'
        } else if (prevScrollpos > currentScrollPos) {
          document.getElementById('navBar')!.style.top = '0'
        } else if (!navBarOpen) {
          document.getElementById('navBar')!.style.top = '-75px'
        }

        if (currentScrollPos === 0 || currentScrollPos < 200) {
          document.getElementById('arrowUp')!.style.bottom = '-500px'
        } else {
          document.getElementById('arrowUp')!.style.bottom = '0'
        }
      }

      prevScrollpos = currentScrollPos
    }
  }, [])

  const closeNavBar = () => {
    setNavBarOpen(false)
    let tmp = document.getElementById('navBar')
    if (tmp) {
      tmp.style.backgroundColor = 'var(--navbar-bg-dark)'
    }
    document.body.style.removeProperty('overflow')
    document.body.style.removeProperty('height')
    document.getElementsByTagName('html')[0].style.removeProperty('overflow')
  }

  const openNavBar = () => {
    setNavBarOpen(true)
    let tmp = document.getElementById('navBar')
    if (tmp) {
      tmp.style.backgroundColor = 'var(--navig-bg-dark)'
    }
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
    document.getElementsByTagName('html')[0].style.overflow = 'hidden'
  }

  return (
    <div className={styles.navBar} id="navBar">
      {/* <div className={styles.logo}>
        <Logo/>
         <Toggle changeToggle={changeToggle} />        
      </div> */}

      {noMenu ? (
        <div style={{marginRight: '20px'}}>
          <NavItem path={'/'} text={'Home'} />
        </div>
      ) : (
        <>
          <div className={styles.navigationDesktop}>
            <Navigation />
          </div>

          {navBarOpen ? (
            <div className={styles.navigationMobile}>
              <Navigation onClick={closeNavBar} />
            </div>
          ) : null}

          <div className={styles.hamburger}>
            <Hamburger onClick={navBarOpen ? closeNavBar : openNavBar} navBarOpen={navBarOpen} />
          </div>
        </>
      )}
    </div>
  )
}

export default NavBar
