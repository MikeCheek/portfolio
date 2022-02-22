import React from 'react'

import * as styles from './ball.module.scss'
import { BallProps } from './ball.types'

const Ball = ({ BallSvg, fastAnimation = false }: BallProps): JSX.Element => {

    return (
        <div className={fastAnimation ? styles.ballFast : styles.ball}>
            <BallSvg />
        </div>
    )
}

export default Ball
