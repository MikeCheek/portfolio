import React from 'react'

import * as styles from './footer.module.scss'

//import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import Linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'
import { useThemeContext } from '../../utilities/themeContext'

//const phone: number = 1111111111
const email: string = "michele00.pulvirenti@gmail.com";
const linkedin: string = "https://www.linkedin.com/in/michele-pulvirenti";
const github: string = "https://github.com/Mike-cheek";

const heigth: string = "100%";


const Footer = ():JSX.Element => {

    const theme = useThemeContext();

    const color: string = theme === "dark" ? "#FFFEFD" : "#000000"

    return (
        <div className={styles.footer} id={"contacts"}>
            <h2 className={styles.contacts}>Contacts</h2>
            <div className={styles.icons}>
                {/*<Phone height={heigth} fill={color} />*/}
                <a href={'mailto:'+email} title={"Send me an email"} >
                    <Email height={heigth} fill={color}/>
                </a>
                <a href={linkedin} title={"Linkedin profile"} >
                    <Linkedin height={heigth} fill={color}/>
                </a>
                <a href={github} title={"GitHub profile"} >
                    <Github height={heigth} fill={color}/>
                </a>
            </div>
        </div>
    )
}

export default Footer
