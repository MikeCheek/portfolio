import React from 'react'
import * as styles from './popUp.module.scss'
import {PopUpProps} from './popUp.types'

const PopUp = ({children, top, left, right}: PopUpProps) => {
  return (
    <div style={{transform: `translateY(${top}px)`, left: left, right: right}} className={styles.popUp}>
      {children}
    </div>
  )
}

export default PopUp
