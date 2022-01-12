import React from 'react'

import * as styles from './toggle.module.scss'
import { ToggleProps } from './toggle.types'

const Toggle = ({toggled, changeToggle}: ToggleProps) => {

    return (
        <div className={styles.wrap} onClick={changeToggle} >
            <div className={toggled? styles.circleToggled : styles.circleUntoggled} id={"toggle"} ></div>
        </div>
    )
}

export default Toggle
