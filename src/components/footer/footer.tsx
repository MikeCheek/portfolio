import React from 'react'

import * as styles from './footer.module.scss'

//import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import Linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'

//const phone: number = 1111111111
const email: string = "michele00.pulvirenti@gmail.com";
const linkedin: string = "https://www.linkedin.com/in/michele-pulvirenti";
const github: string = "https://github.com/Mike-cheek";

const heigth: string = "100%";


const Footer = ():JSX.Element => {
    return (
        <div className={styles.footer} id={"contacts"}>
            <h2 className={styles.contacts}>Contacts</h2>
            <div className={styles.icons}>
                {/*<Phone height={heigth} />*/}
                <a href={'mailto:'+email} title={"Send me an email"} >
                    <Email height={heigth}/>
                </a>
                <a href={linkedin} title={"Linkedin profile"} >
                    <Linkedin height={heigth}/>
                </a>
                <a href={github} title={"GitHub profile"} >
                    <Github height={heigth}/>
                </a>
            </div>
        </div>
    )
}

export default Footer
