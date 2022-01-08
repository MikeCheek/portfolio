import React from 'react'
import BallSvg from '../../assets/ball.svg'

import * as styles from './ball.module.scss'

const Ball = (): JSX.Element => {
    return (
        <div className={styles.ball}>
            <BallSvg />
        </div>
    )
}

export default Ball
