import React from 'react'
import {useThemeContext} from '../../utilities/themeContext'

import * as styles from './toggle.module.scss'
import {ToggleProps} from './toggle.types'

const Toggle = ({changeToggle}: ToggleProps): JSX.Element => {
  const theme: string = useThemeContext()

  return (
    <div className={styles.wrap} onClick={changeToggle}>
      <div className={theme === 'dark' ? styles.circleUntoggled : styles.circleToggled} id={'toggle'}></div>
    </div>
  )
}

export default Toggle
