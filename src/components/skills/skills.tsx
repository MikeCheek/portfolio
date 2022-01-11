import React, { useState, useEffect } from 'react'
import Bar from '../../atoms/bar/bar'
import { SkillsType } from './skills.types'

import * as styles from './skills.module.scss'
import isInViewport from '../../utilities/isInViewport'

const Skills = (): JSX.Element => {

    const [visible, setVisible] = useState(false);

    const isVisible = isInViewport(1700)

    useEffect(() => {
        if(isVisible)
            setVisible(true)
    })

    return (
        <>
            {visible ?

                <div className={styles.skills} >
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
                    <p>{text}</p>
                </div>
                :
                null}
        </>
    )
}

export default Skills

const text: string = (
    `Languages:
    Italian (mothertongue),
    English (B2, Cambridge First Certificate)`
)

const programming: SkillsType = [
    {
        name: 'C', percentage: "90%"
    },
    {
        name: 'Java', percentage: "80%"
    },
    {
        name: 'Javascript', percentage: "90%"
    },
    {
        name: 'Assembly MIPS', percentage: "70%"
    },
    {
        name: 'PHP', percentage: "60%"
    },
]

const frameworks: SkillsType = [
    {
        name: 'React', percentage: "90%"
    },
    {
        name: 'Gatsby', percentage: "80%"
    },
    {
        name: 'NextJs', percentage: "50%"
    },
]

const others: SkillsType = [
    {
        name: 'HTML', percentage: "90%"
    },
    {
        name: 'CSS', percentage: "90%"
    },
    {
        name: 'Linux', percentage: "80%"
    },
    {
        name: 'SQL', percentage: "80%"
    },
    {
        name: 'MatLab', percentage: "50%"
    },
    {
        name: 'Simulink', percentage: "50%"
    },
]