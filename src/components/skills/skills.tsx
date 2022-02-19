import React from 'react'
//@ts-ignore
import Bar from '../../atoms/bar/bar'
import { programming, frameworks, others, languages } from '../../utilities/info'

import * as styles from './skills.module.scss'
import { useThemeContext } from '../../utilities/themeContext'

const Skills = (): JSX.Element => {

    const theme = useThemeContext();

    return (
        <div className={styles.wrap}>

            <div className={theme === "dark" ? styles.skills : styles.skillsLight} >
                <h3>Programming Languages</h3>
                {
                    programming.map((skill) => {
                        return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
                    })
                }
                <h3>Framework</h3>
                {
                    frameworks.map((skill) => {
                        return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
                    })
                }
                <h3>Other</h3>
                {
                    others.map((skill) => {
                        return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} />
                    })
                }
                <div dangerouslySetInnerHTML={{ __html: languages }} />
            </div>
        </div>
    )
}

export default Skills
