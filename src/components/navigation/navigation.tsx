import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'
import { NavigationProps } from './navigation.type'

const Navigation = ({onClick}: NavigationProps): JSX.Element => {
    return (
        <>
            <div className={styles.navDesktop}>
                <NavItem text="Home" path="/" />
                <NavItem text="Info" path="#info" isHref={true} />
            </div>
            <div className={styles.navMobile}>
                <NavItem text="Home" path="/" onClick={onClick} />
                <NavItem text="Info" path="#info" onClick={onClick} isHref={true} />
            </div>
        </>
    )
}

export default Navigation
