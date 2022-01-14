import React from 'react'
//@ts-ignore
import Bar from '../../atoms/bar/bar'
import { SkillsProps, SkillsType } from './skills.types'

import * as styles from './skills.module.scss'

const Skills = ({lightMode}: SkillsProps): JSX.Element => {

    return (
        <div className={styles.wrap}>

            <div className={styles.skills} >
                <h3>Programming Languages</h3>
                {
                    programming.map((skill) => {
                        return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} lightMode={lightMode} />
                    })
                }
                <h3>Framework</h3>
                {
                    frameworks.map((skill) => {
                        return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} lightMode={lightMode} />
                    })
                }
                <h3>Other</h3>
                {
                    others.map((skill) => {
                        return <Bar name={skill.name} percentage={skill.percentage} key={skill.name} lightMode={lightMode} />
                    })
                }
                <h3>Languages</h3>
                <p>Italian (mothertongue)</p>
                <p>English (B2 Cambridge First Certificate)</p>
            </div>
        </div>
    )
}

export default Skills

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
        name: 'Bash (Unix shell)', percentage: "70%"
    },
    {
        name: 'PHP', percentage: "30%"
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