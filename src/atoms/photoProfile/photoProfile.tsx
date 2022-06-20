import React, {useRef} from 'react'
import {StaticImage} from 'gatsby-plugin-image'

import * as styles from './photoProfile.module.scss'

const PhotoProfile = (): JSX.Element => {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const ref4 = useRef<HTMLDivElement>(null)
  const ref5 = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    const c = [ref1.current, ref2.current, ref3.current, ref4.current, ref5.current]
    for (let i = 0; i < c.length; i++) {
      setTimeout(() => {
        if (c[i]) {
          c[i]!.style.borderWidth = '5px'
          c[i]!.style.opacity = '1'
        }
      }, i * 100)
      setTimeout(() => {
        if (c[i]) {
          c[i]!.style.removeProperty('border-width')
          c[i]!.style.removeProperty('opacity')
        }
      }, i * 100 + 200)
    }
  }

  return (
    <div id="profile" className={styles.profile}>
      <StaticImage
        src={'../../images/newProfescional.png'}
        alt="Michele Pulvirenti"
        placeholder="tracedSVG"
        layout="constrained"
        style={{zIndex: 1}} //for safari
        tracedSVGOptions={{color: 'dimGrey'}}
        quality={80}
        width={200}
        height={200}
        className={styles.profescional}
        onClick={handleClick}
      />
      <div className={styles.circles}>
        <span ref={ref1}></span>
        <span ref={ref2}></span>
        <span ref={ref3}></span>
        <span ref={ref4}></span>
        <span ref={ref5}></span>
      </div>
    </div>
  )
}

export default PhotoProfile
