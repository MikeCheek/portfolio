import React, {useState} from 'react'
import {SectionProps} from './section.types'

import * as styles from './section.module.scss'
import sleep from '../../utilities/sleep'
import {useThemeContext} from '../../utilities/themeContext'
import {useInView} from 'react-intersection-observer'

const Section = ({title, children, id, reversed = false, Svg, paragraph = false}: SectionProps): JSX.Element => {
  const theme: string = useThemeContext()
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    fallbackInView: true,
    rootMargin: '-10px 0px -10px 0px',
  })

  const [isClicked, setIsClicked] = useState<boolean>(false)

  const setClicked = async () => {
    if (!isClicked) {
      setIsClicked(true)
      await sleep(3000)
      setIsClicked(false)
    }
  }

  return (
    <div
      className={`${reversed ? styles.sectionReversed : styles.section} ${inView ? styles.sectionView : ''} ${
        theme === 'dark' ? '' : styles.light
      }`}
      ref={ref}
      style={{backgroundColor: theme === 'dark' ? 'var(--sect-bg-dark)' : 'var(--sect-bg-light)'}}
      id={id ? id : title}
    >
      {paragraph ? (
        <>
          <h2 className={`${styles.titleParagraph} ${theme === 'dark' ? '' : styles.titleLight}`}>{title}</h2>
          <div className={styles.contentParagraph}>
            {Svg ? (
              <div className={styles.svg} onClick={setClicked} onMouseDown={setClicked}>
                <Svg.svg
                  width={'100px'}
                  height={'100px'}
                  className={isClicked ? styles.move : null}
                  fill={Svg.fill ? Svg.fill : 'none'}
                  stroke={Svg.stroke ? Svg.stroke : 'none'}
                />
              </div>
            ) : null}
            <div className={styles.childrenParagraph}>{children}</div>
          </div>
        </>
      ) : (
        <>
          <h2
            className={`${reversed ? styles.titleReversed : styles.title} ${theme === 'dark' ? '' : styles.titleLight}`}
          >
            {title}
          </h2>
          <div className={reversed ? styles.contentReversed : styles.content}>
            {Svg ? (
              <div className={styles.svg} onClick={setClicked} onMouseDown={setClicked}>
                <Svg.svg
                  width={'100px'}
                  height={'100px'}
                  className={isClicked ? styles.jump : null}
                  fill={Svg.fill ? Svg.fill : 'none'}
                  stroke={Svg.stroke ? Svg.stroke : 'none'}
                />
              </div>
            ) : null}
            <div className={styles.children}>{children}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default Section
