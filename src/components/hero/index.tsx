import React, {lazy, Suspense} from 'react'

import * as styles from './index.module.scss'

import Section from '../section'

import HSkills from '../../assets/skills.svg'
import {about} from '../../utilities/info'
import BigHeading from '../bigHeading'
import Loading from '../../atoms/loading'
import Projects from '../projects'
import Skills from '../skills'

// const Model3D = lazy(() => import('../../atoms/model3D'))
const Model3D = lazy(() => import('../../atoms/threeD'))

const Index = (): JSX.Element => {
  const color = 'var(--transparent-pink)'

  const ModelComponent = (
    <Suspense fallback={<Loading />}>
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
