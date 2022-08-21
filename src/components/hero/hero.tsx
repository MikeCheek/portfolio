import React, {lazy, Suspense} from 'react'

import * as styles from './hero.module.scss'

import Section from '../section/section'
// import Whoami from '../whoami/whoami'
import Skills from '../skills/skills'

import Account from '../../assets/account.svg'
import Coding from '../../assets/coding.svg'
import HSkills from '../../assets/skills.svg'
import Things from '../../assets/things.svg'
import Web from '../../assets/web.svg'
import Others from '../others/others'
import {about, works} from '../../utilities/info'
import BigHeading from '../bigHeading/bigHeading'
import Loading from '../../atoms/loading/loading'
// import Parallax from '../../atoms/parallax/parallax'

const Hero = (): JSX.Element => {
  const color = 'var(--svg-dark)'
  const Projects = lazy(() => import('../projects/projects'))
  const isSSR = typeof window === 'undefined'

  return (
    // <div className={styles.wrapper}>
    <div>
      <BigHeading />
      {/* <Whoami /> */}
      <div className={styles.sectionWrap}>
        {/* <div className={styles.parallax}>
          <Parallax />
        </div> */}
        <Section title={'About me'} id={'about'} Svg={{svg: Account, stroke: color}}>
          <div className={styles.about} dangerouslySetInnerHTML={{__html: about}} />
        </Section>
        <Section title={'My projects'} id={'projects'} Svg={{svg: Web, fill: color}} reversed>
          <>
            {!isSSR && (
              <Suspense fallback={<Loading />}>
                <Projects />
              </Suspense>
            )}
          </>
        </Section>
        <Section title={'Hard skills'} id={'skills'} Svg={{svg: HSkills, fill: color}} reversed>
          <Skills />
        </Section>
        <Section title={'Work Experiences'} id={'works'} Svg={{svg: Coding, fill: color}}>
          <div dangerouslySetInnerHTML={{__html: works}} />
        </Section>
        <Section title={'Other experiences'} id={'others'} Svg={{svg: Things, fill: color}} reversed>
          <Others />
        </Section>
      </div>
    </div>
  )
}

export default Hero
