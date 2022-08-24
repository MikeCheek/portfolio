import React, {lazy, Suspense} from 'react'

import * as styles from './hero.module.scss'

import Section from '../section/section'

import HSkills from '../../assets/skills.svg'
import {about} from '../../utilities/info'
import BigHeading from '../bigHeading/bigHeading'
import Loading from '../../atoms/loading/loading'
import * as modelStyles from '../../atoms/model3D/model3D.module.scss'

const Model3D = lazy(() => import('../../atoms/model3D/model3D'))
const Skills = lazy(() => import('../skills/skills'))
const Projects = lazy(() => import('../projects/projects'))

const Hero = (): JSX.Element => {
  const color = 'var(--transparent-pink)'

  const ModelComponent = (
    <Suspense
      fallback={
        <div className={modelStyles.canvas}>
          <Loading />
        </div>
      }
    >
      <Model3D />
    </Suspense>
  )

  return (
    <div>
      <BigHeading />
      <div className={styles.sectionWrap}>
        <Section title={'About me'} id={'about'} Model3d={ModelComponent}>
          <div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={'My projects'} id={'projects'} reversed>
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
        </Section>
        <Section title={'Hard skills'} id={'skills'} Svg={{svg: HSkills, fill: color}}>
          <Suspense fallback={null}>
            <Skills />
          </Suspense>
        </Section>
      </div>
    </div>
  )
}

export default Hero
