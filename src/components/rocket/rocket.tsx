import React from 'react'
import { useThemeContext } from '../../utilities/themeContext'
import RocketSvg from '../../assets/rocket.svg'
import WindSvg from '../../assets/wind.svg'

import * as styles from './rocket.module.scss'

const Rocket = () => {

    const theme = useThemeContext();

    return (
        <div className={styles.wrap}>
            <div className={styles.rocketWrap}>
                <div className={styles.rocket}>
                    <RocketSvg width={"200px"} fill={theme === "dark" ? "var(--rocket-dark)" : "var(--rocket-light)"} />
                </div>
            </div>
            <div className={styles.wind}>
                <WindSvg width={"400px"} height={"200px"} fill={theme === "dark" ? "var(--wind-dark)" : "var(--wind-light)"} />
            </div>
        </div>
    )
}

export default Rocket
