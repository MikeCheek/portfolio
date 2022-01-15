import React from 'react'
import { useThemeContext } from '../../utilities/themeContext'
import RocketSvg from '../../assets/rocket.svg'
import WindSvg from '../../assets/wind.svg'

import * as styles from './rocket.module.scss'

const Rocket = () => {

    const theme = useThemeContext();

    return (
        <div className={styles.wrap}>
            <div className={styles.rocket}>
                <RocketSvg width={"200px"} fill={theme === "dark" ? "var(--orange)" : "var(--black)"} />
            </div>
            <div className={styles.wind}>
                <WindSvg width={"400px"} height={"200px"} fill={"var(--grey)"} />
            </div>
        </div>
    )
}

export default Rocket
