import React, {useEffect, useRef} from 'react'
import * as styles from './index.module.scss'

import Arrow from '../../assets/arrowUp.svg'

const Index = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)

  let prevScrollpos = 0
  let currentScrollPos: number

  const setListener = () => {
    if (typeof window !== 'undefined') window.onscroll = handleScroll
  }

  const removeListener = () => {
    if (typeof window !== 'undefined') window.onscroll = null
  }

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
    setListener()
    return removeListener
  }, [])

  return (
    <div
      className={styles.arrowUp}
      title={'Go to top'}
      ref={ref}
      onClick={() => {
        window.scroll(0, 0)
      }}
    >
      <Arrow width={'50px'} height={'50px'} />
    </div>
  )
}

export default Index
