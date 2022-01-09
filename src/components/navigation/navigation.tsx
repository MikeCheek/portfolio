import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'
import { NavigationProps } from './navigation.type'

const Navigation = ({onClick}: NavigationProps): JSX.Element => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/" />
                <NavItem text="Contacts" path="#contacts" isHref={true} />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path="/" onClick={onClick} />
                <NavItem text="Contacts" path="#contacts" onClick={onClick} isHref={true} />
            </div>
        </>
    )
}

export default Navigation
