import React from 'react'

import * as styles from './toggle.module.scss'
import {ToggleProps} from './toggle.types'

const Toggle = ({changeToggle}: ToggleProps): JSX.Element => {
  return (
    <div className={styles.wrap} onClick={changeToggle}>
      <div className={styles.circleUntoggled} id={'toggle'}></div>
    </div>
  )
}

export default Toggle
