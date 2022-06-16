import React from 'react'
import {programming, frameworks, others, languages} from '../../utilities/info'
import Skill from '../skill/skill'

import * as styles from './skills.module.scss'

const Skills = (): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <div className={styles.skills}>
        <Skill title="Programming Languages" array={programming} />
        <Skill title="Frameworks" array={frameworks} />
        <Skill title="Others" array={others} />
        <div dangerouslySetInnerHTML={{__html: languages}} />
      </div>
    </div>
  )
}

export default Skills
