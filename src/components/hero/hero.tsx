import React from 'react'

import * as styles from './hero.module.scss'

import Section from '../section/section'
import Whoami from '../whoami/whoami'

const Hero = (): JSX.Element => {
    return (
        <>
            <Whoami />
            <div className={styles.sectionWrap}>
                <Section title={"About me"} >
                    <p>{about}</p>
                </Section>
                <Section title={"Work Experiences"} /*reversed={true}*/ >
                    <p>{works}</p>
                </Section>
                <Section title={"Education"} /*reversed={true}*/ >
                    <p>{education}</p>
                </Section>
                <Section title={"Other experiences"} /*reversed={true}*/ >
                    <p>{others}</p>
                </Section>
                <Section title={"Hard skills"} /*reversed={true}*/ >
                    <p>{skills}</p>
                </Section>
            </div>
        </>
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

const others: string = (
    `JEISM - JE Italy Summer Meeting (2021)
    -> Event between Italian Junior Enterprises
    -> Location: Gabicce, Marche
    -> Duration: 3 days
    -> It was a great opportunity to discuss with guys
          from different Junior Enterprises and for getting
          to know the partner companies of the event
          through daily workshops.
          A stimulating workshop was organized by Open
          Marketplace on the theme of Open Innovation
    
    SysE2021 - Summer School (2021) 
    -> Orientation event on the Master's degree
          organized by the University of Genova in
          collaboration with University of Savoie Mont
          Blanc and carried out in English
    -> Location: Imperia, Liguria
    -> Duration: 5 days
    -> Thanks to the Hackathon held during the event,
          I improved my knowledge skills of scientific
          calculation language such as Matlab and Simulink`
)

const skills: string = (
    `Programming languages:
    C, Java, Assembly MIPS, JavaScript, PHP
    
    Framework:
    React, Gatsby 
    
    Other:
    HTML, CSS, SQL, Linux, Matlab, Simulink
    
    Languages:
    Italian (mothertongue),
    English (B2, Cambridge First Certificate)`
)

export default Hero