import React, {useRef} from 'react'
import * as styles from './circles.module.scss'
import {CirclesProps} from './circles.types'

const Circles = ({number}: CirclesProps) => {
  const ref = useRef<Array<HTMLSpanElement> | Array<null>>([])
  const num = number > 5 ? 5 : number

  const handleClick = () => {
    for (let i = 0; i < num; i++) {
      const circle = ref.current[i]
      setTimeout(() => {
        if (circle) {
          circle!.style.borderWidth = '5px'
          circle!.style.opacity = '1'
        }
      }, i * 100)
      setTimeout(() => {
        if (circle) {
          circle!.style.removeProperty('border-width')
          circle!.style.removeProperty('opacity')
        }
      }, i * 100 + 200)
    }
  }

  return (
    <div className={styles.circles} onClick={handleClick}>
      {Array.from({length: num}).map((_el, index) => {
        return <span key={index} ref={(el) => (ref.current[index] = el)}></span>
      })}
    </div>
  )
}

export default Circles
