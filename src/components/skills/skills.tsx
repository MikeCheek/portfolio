import React from 'react'
//@ts-ignore
import Bar from '../../atoms/bar/bar'
import {programming, frameworks, others, languages} from '../../utilities/info'
import {useInView} from 'react-intersection-observer'

import * as styles from './skills.module.scss'
//import {useThemeContext} from '../../utilities/themeContext'

const inViewOptions = {
  /* Optional options */
  threshold: 0,
  fallbackInView: true,
}

const Skills = (): JSX.Element => {
  //const theme: string = useThemeContext()
  const [pRef, pInView, _pEntry] = useInView(inViewOptions)
  const [fRef, fInView, _fEntry] = useInView(inViewOptions)
  const [oRef, oInView, _oEntry] = useInView(inViewOptions)

  const makeDelay = (index: number) => {
    return {animationDelay: `${(index - 1) * 0.5}s`}
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.skills}>
        <h3>Programming Languages</h3>
        <div className={styles.list} ref={pRef}>
          {pInView
            ? programming.map((skill, index) => {
                //return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
                return (
                  <p key={index} style={makeDelay(index)}>
                    {skill.name}
                  </p>
                )
              })
            : null}
        </div>
        <h3>Framework</h3>
        <div className={styles.list} ref={fRef}>
          {fInView
            ? frameworks.map((skill, index) => {
                //return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
                return (
                  <p key={index} style={makeDelay(index)}>
                    {skill.name}
                  </p>
                )
              })
            : null}
        </div>
        <h3>Other</h3>
        <div className={styles.list} ref={oRef}>
          {oInView
            ? others.map((skill, index) => {
                //return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
                return (
                  <p key={index} style={makeDelay(index)}>
                    {skill.name}
                  </p>
                )
              })
            : null}
        </div>
        <div dangerouslySetInnerHTML={{__html: languages}} />
      </div>
    </div>
  )
}

export default Skills
