import React, {useCallback, useState} from 'react'
import {useInView} from 'react-intersection-observer'
import {programming, frameworks, others, languages} from '../../utilities/info'
import Skill from '../skill/skill'

import * as styles from './skills.module.scss'

const Skills = (): JSX.Element => {
  const [degree, setDegree] = useState<number>(45)

  const [ref, inView, _entry] = useInView({
    threshold: 0,
    fallbackInView: true,
    rootMargin: '-35% 0px -35% 0px',
  })

  const data = [...programming, ...frameworks, ...others].sort((a, b) => (b.percentage ?? 0) - (a.percentage ?? 0))

  const degreeConverter = (degree: number): [number, number] => {
    return [Math.cos(degree), Math.sin(degree)]
  }

  const calculate = useCallback(
    (mult: number) => {
      const expand = mult * 2 * (mult < 3 ? 2.5 : 1)
      let [x, y] = degreeConverter(degree * mult)
      x = x * expand
      y = y * expand
      const max = 50
      x = x > max ? max : x < -max ? -max : x
      y = y > max ? max : y < -max ? -max : y
      return [x, y]
    },
    [degree]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDegree(Number(e.target.value))
    console.log(Number(e.target.value))
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.skills} ref={ref}>
        {data.map((item, key) => {
          return (
            <span
              key={key}
              className={styles.skillWrap}
              style={
                inView
                  ? {
                      transform: `translate(${calculate(key + 1)[0]}vw,${calculate(key + 1)[1]}vh)`,
                      fontSize: `${1.7 - key / 17}rem`,
                      zIndex: data.length - key,
                      transitionDelay: `${key / 15}s`,
                    }
                  : {}
              }
            >
              <Skill
                name={item.name}
                link={item.link}
                style={inView ? {transform: 'scale(1)', transitionDelay: `${key / 15}s`} : {transform: 'scale(0)'}}
              />
            </span>
          )
        })}
      </div>
      <input
        className={styles.range}
        type="range"
        min="0"
        max="360"
        step={1}
        value={degree}
        onChange={(e) => handleChange(e)}
      />
      <div dangerouslySetInnerHTML={{__html: languages}} />
    </div>
  )
}

export default Skills
