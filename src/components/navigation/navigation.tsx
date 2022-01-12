import React from 'react'
import NavItem from '../../atoms/navItem/navItem'
import * as styles from './navigation.module.scss'
import { NavigationProps } from './navigation.type'

const items = [
    //{
    //    text: "Home", path: "/"
    //},
    {
        text: "About", path: "#about", isHref: true
    },
    {
        text: "Works", path: "#works", isHref: true
    },
    {
        text: "Skills", path: "#skills", isHref: true
    },
    {
        text: "Education", path: "#education", isHref: true
    },
    {
        text: "Other", path: "#others", isHref: true
    },
    {
        text: "Contacts", path: "#contacts", isHref: true
    },
]

const Navigation = ({onClick}: NavigationProps): JSX.Element => {
    return (
        <>
            <div className={styles.navDesktop}>
                {items.map((item) => {
                    return <NavItem text={item.text} path={item.path} isHref={item.isHref} key={item.text} />
                })}
            </div>
            <div className={styles.navMobile}>
                {items.map((item) => {
                    return <NavItem text={item.text} path={item.path} onClick={onClick} isHref={item.isHref} key={item.text} />
                })}
            </div>
        </>
    )
}

export default Navigation
