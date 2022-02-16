import React from 'react'

import * as styles from './footer.module.scss'

//import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import Linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'
import { useThemeContext } from '../../utilities/themeContext'
import { email, github, linkedin } from '../../utilities/info'

const width: string = "50px";
const height: string = "50px";


const Footer = ():JSX.Element => {

    const theme = useThemeContext();

    const color: string = theme === "dark" ? "var(--icon-dark)" : "var(--icon-light)"

    return (
        <div className={styles.footer} id={"contacts"}>
            <h2 className={styles.contacts}>My contacts</h2>
            <div className={styles.icons}>
                {/*<Phone width={width} fill={color} />*/}
                <a href={'mailto:'+email} title={"Send me an email"} >
                    <Email width={width} height={height} fill={color}/>
                </a>
                <a href={linkedin} title={"Linkedin profile"} >
                    <Linkedin width={width} height={height} fill={color}/>
                </a>
                <a href={github} title={"GitHub profile"} >
                    <Github width={width} height={height} fill={color}/>
                </a>
            </div>
        </div>
    )
}

export default Footer
