import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import {navItems} from '../../utilities/info'
import * as styles from './navigation.module.scss'
import {NavigationProps} from './navigation.type'

const Navigation = ({onClick}: NavigationProps): JSX.Element => {
  return (
    <>
      <div className={styles.navDesktop}>
        {navItems.map((item) => {
          return <NavItem text={item.text} path={item.path} isHref={item.isHref} key={item.text} />
        })}
      </div>
      <div className={styles.navMobile}>
        {navItems.map((item) => {
          return <NavItem text={item.text} path={item.path} onClick={onClick} isHref={item.isHref} key={item.text} />
        })}
      </div>
    </>
  )
}

export default Navigation
