import React from "react"

import styles from "./index.module.scss"

import Section from "../section"

// import HSkills from "../../assets/skills.svg"
import {about} from "../../utilities/info"
import BigHeading from "../bigHeading"
import Projects from "../projects"
import Skills from "../skills"
import Model3D from "../../atoms/threeD"
import Cursor from "../../atoms/cursor"

// const Model3D = lazy(() => import('../../atoms/model3D'))

const Index = (): JSX.Element => {
  // const color = "var(--transparent-pink)"

  return (
    <div>
      <Cursor />
      <BigHeading />
      <div className={styles.sectionWrap}>
        <Section title={"About me"} id={"about"} Model3d={<Model3D />}>
          <div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={"My projects"} id={"projects"} reversed>
          <Projects />
        </Section>{" "}
        {/*Svg={{svg: HSkills, fill: color}}>*/}
        <Section title={"Hard skills"} id={"skills"}>
          <Skills />
        </Section>
      </div>
    </div>
  )
}

export default Index
