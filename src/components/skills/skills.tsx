import React from 'react'
//@ts-ignore
import Bar from '../../atoms/bar/bar'
import {programming, frameworks, others, languages} from '../../utilities/info'

import * as styles from './skills.module.scss'
import {useThemeContext} from '../../utilities/themeContext'

const Skills = (): JSX.Element => {
  const theme: string = useThemeContext()

  return (
    <div className={styles.wrap}>
      <div className={theme === 'dark' ? styles.skills : styles.skillsLight}>
        <h3>Programming Languages</h3>
        <div className={styles.list}>
          {programming.map((skill) => {
            //return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
            return <p>{skill.name}</p>
          })}
        </div>
        <h3>Framework</h3>
        <div className={styles.list}>
          {frameworks.map((skill) => {
            //return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
            return <p>{skill.name}</p>
          })}
        </div>
        <h3>Other</h3>
        <div className={styles.list}>
          {others.map((skill) => {
            //return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
            return <p>{skill.name}</p>
          })}
        </div>
        <div dangerouslySetInnerHTML={{__html: languages}} />
      </div>
    </div>
  )
}

export default Skills
