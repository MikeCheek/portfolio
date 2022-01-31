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
import { useThemeContext } from '../../utilities/themeContext'

const Hero = (): JSX.Element => {

    const theme = useThemeContext();

    const color = theme === "dark" ? "var(--svg-dark)" : "var(--svg-light)";

    return (
        <div className={styles.wrapper}>
            <Whoami />
            <div className={styles.sectionWrap}>
                <Section title={"About me"} id={"about"} Svg={{ svg:Account, stroke:color }} >
                    <p>{about}</p>
                </Section>
                <Section title={"Work Experiences"} id={"works"} Svg={{ svg:Coding, fill:color }} reversed>
                    <div dangerouslySetInnerHTML={{__html: works}} />
                </Section>
                <Section title={"Hard skills"} id={"skills"} Svg={{ svg:HSkills, fill:color }} >
                    <Skills />
                </Section>
                <Section title={"Education"} id={"education"} Svg={{ svg:Teaching, fill:color }} reversed>
                    <p>{education}</p>
                </Section>
                <Section title={"Other experiences"} id={"others"} Svg={{ svg:Things, fill:color }} >
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
    `<strong>JEToP - Junior Enterprise of Politecnico di Torino</strong><br/><br/>
    -> From October 2019 to today<br/><br/>
    -> Role: IT Consultant<br/><br/>
    -> Working in <strong>teams</strong> on both internal and external
          projects, <strong>I have expanded my knowledge of web
          programming</strong> by developing sites with
          frameworks like <strong>React</strong> and <strong>Gatsby</strong> and through
          trainings I improved backend skills.
          For example, I developed the Blog section of the
          association's website (<a href="https://jetop.com/blog" style="text-decoration: none; color: inherit;">https://jetop.com/blog</a>)`
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