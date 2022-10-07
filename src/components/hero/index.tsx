import React from 'react'

import * as styles from './index.module.scss'

import Section from '../Section'

import HSkills from '../../assets/skills.svg'
import {about} from '../../utilities/info'
import BigHeading from '../BigHeading'
import Projects from '../Projects'
import Skills from '../Skills'
import Model3D from '../../atoms/ThreeD'
import Cursor from '../../atoms/Cursor'

// const Model3D = lazy(() => import('../../atoms/model3D'))

const Index = (): JSX.Element => {
  const color = 'var(--transparent-pink)'

  return (
    <div>
      <Cursor />
      <BigHeading />
      <div className={styles.sectionWrap}>
        <Section title={'About me'} id={'about'} Model3d={<Model3D />}>
          <div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={'My projects'} id={'projects'} reversed>
          <Projects />
        </Section>
        <Section title={'Hard skills'} id={'skills'} Svg={{svg: HSkills, fill: color}}>
          <Skills />
        </Section>
      </div>
    </div>
  )
}

export default Index
