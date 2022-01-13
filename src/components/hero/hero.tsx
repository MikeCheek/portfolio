import React from 'react'

import * as styles from './hero.module.scss'

import Section from '../section/section'
import Whoami from '../whoami/whoami'
import Skills from '../skills/skills'

import Account from '../../assets/account.svg'
import Coding from '../../assets/coding.svg'
import HSkills from '../../assets/skills.svg'
import Teaching from '../../assets/teaching.svg'
import Things from '../../assets/things.svg'
import Others from '../others/others'
import { HeroProps } from './hero.types'

const Hero = ({lightMode}: HeroProps): JSX.Element => {

    const color = "#FD76CB88";

    return (
        <div className={styles.wrapper}>
            <Whoami />
            <div className={styles.sectionWrap}>
                <Section title={"About me"} id={"about"} Svg={{ svg:Account, stroke:color }} lightMode={lightMode} >
                    <p>{about}</p>
                </Section>
                <Section title={"Work Experiences"} id={"works"} Svg={{ svg:Coding, fill:color }} lightMode={lightMode} reversed>
                    <p>{works}</p>
                </Section>
                <Section title={"Hard skills"} id={"skills"} Svg={{ svg:HSkills, fill:color }} lightMode={lightMode} >
                    <Skills />
                </Section>
                <Section title={"Education"} id={"education"} Svg={{ svg:Teaching, fill:color }} lightMode={lightMode}>
                    <p>{education}</p>
                </Section>
                <Section title={"Other experiences"} id={"others"} Svg={{ svg:Things, fill:color }} lightMode={lightMode} reversed>
                    <Others />
                </Section>
            </div>
        </div>
    )
}

const about: string = (
    `Since I was a child I have always had a passion for everything there is computer science, so I'm attending the third year of studies in Computer Engineering at the Polytechnic of Turin.
    In my spare time I like to draw both on paper and digitally and I do acrobatic gymnastics`
)

const works: string = (
    `JEToP - Junior Enterprise of Politecnico di Torino 
    -> From October 2019 to today
    -> Role: IT Consultant
    -> Working in teams on both internal and external
          projects, I have expanded my knowledge of web
          programming by developing sites with
          frameworks like React and Gatsby and through
          trainings I trained backend skills.
          For example, I developed the Blog section of the
          association's website (https://jetop.com/blog)`
)

const education: string = (
    `Politecnico di Torino 
    -> From September 2019 to today
    -> Bachelor's degree
    -> Ingegneria Informatica
  
  High school "Archimede" - Acireale 
   -> From September 2013 to June 2019
   -> High school diploma`
)

export default Hero