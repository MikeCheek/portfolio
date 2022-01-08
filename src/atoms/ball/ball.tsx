import React from 'react'
import BallSvg from '../../assets/ball.svg'

import * as styles from './ball.module.scss'

const Ball = (): JSX.Element => {
    return (
        <div className={styles.ball}>
            <BallSvg opacity={'0.5'}/>
        </div>
    )
}

export default Ball
