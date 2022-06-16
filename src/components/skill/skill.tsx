import React from 'react'
import {useInView} from 'react-intersection-observer'
import * as styles from './skill.module.scss'
import {SkillType} from './skill.types'

const inViewOptions = {
  /* Optional options */
  threshold: 0,
  fallbackInView: true,
}

const Skill = ({title, array}: SkillType) => {
  const [ref, inView, _entry] = useInView(inViewOptions)

  const makeDelay = (index: number) => {
    return {animationDelay: `${(index - 1) * 0.5}s`}
  }

  return (
    <>
      <h3>{title}</h3>
      <div className={styles.list} ref={ref}>
        {array.map((skill, index) => {
          return (
            <span key={index} className={inView ? styles.pView : styles.pHidden} style={makeDelay(index)}>
              {skill.link ? (
                <a href={skill.link} rel="noopener noreferrer" target={'_blank'} title={skill.name}>
                  {skill.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                  </svg>
                </a>
              ) : (
                skill.name
              )}
            </span>
          )
        })}
      </div>
    </>
  )
}

export default Skill
