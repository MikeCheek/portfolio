import * as styles from './arrowUp.module.scss'
import React, {useEffect, useRef} from 'react'

import Arrow from '../../assets/arrowUp.svg'

const ArrowUp = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)

  let prevScrollpos = window.pageYOffset
  let currentScrollPos: number

  const handleScroll = () => {
    currentScrollPos = window.pageYOffset
    const arrow = ref.current
    if (arrow) {
      if (currentScrollPos >= 200 && currentScrollPos < prevScrollpos) {
        arrow.style.transform = 'translateY(-500px)'
      } else {
        arrow.style.removeProperty('transform')
      }
    }
    prevScrollpos = currentScrollPos
  }

  useEffect(() => {
    window.onscroll = handleScroll
    return () => {
      window.onscroll = null
    }
  }, [])

  return (
    <div
      className={styles.arrowUp}
      title={'Go to top'}
      ref={ref}
      onClick={() => {
        window.scroll(0, 0)
        // typeof window !== 'undefined' &&
        //   //@ts-ignore
        //   window.gtag('event', 'click', {event_category: 'Navigation', event_label: 'Go to top'})
      }}
    >
      <Arrow width={'50px'} height={'50px'} />
    </div>
  )
}

export default ArrowUp
