import React, {lazy, Suspense} from 'react'

import * as styles from './hero.module.scss'

import Section from '../section/section'
import Skills from '../skills/skills'

import Account from '../../assets/account.svg'
import Coding from '../../assets/coding.svg'
import HSkills from '../../assets/skills.svg'
import Things from '../../assets/things.svg'
import Others from '../others/others'
import {about, works} from '../../utilities/info'
import BigHeading from '../bigHeading/bigHeading'
import Loading from '../../atoms/loading/loading'

const Hero = (): JSX.Element => {
  const color = 'var(--svg-dark)'
  const Projects = lazy(() => import('../projects/projects'))
  const isSSR = typeof window === 'undefined'

  return (
    <div>
      <BigHeading />
      <div className={styles.sectionWrap}>
        <Section title={'About me'} id={'about'} Svg={{svg: Account, stroke: color}}>
          <div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={'My projects'} id={'projects'} reversed>
          <>
            {!isSSR && (
              <Suspense fallback={<Loading />}>
                <Projects />
              </Suspense>
            )}
          </>
        </Section>
        <Section title={'Hard skills'} id={'skills'} Svg={{svg: HSkills, fill: color}}>
          <Skills />
        </Section>
        <Section title={'Work Experiences'} id={'works'} Svg={{svg: Coding, fill: color}} reversed>
          <div dangerouslySetInnerHTML={{__html: works}} />
        </Section>
        <Section title={'Other experiences'} id={'others'} Svg={{svg: Things, fill: color}}>
          <Others />
        </Section>
      </div>
    </div>
  )
}

export default Hero
