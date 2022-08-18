import React from 'react'
import RocketSvg from '../../assets/rocket.svg'
import WindSvg from '../../assets/wind.svg'

import * as styles from './rocket.module.scss'

const Rocket = (): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <div className={styles.rocketWrap}>
        <div className={styles.rocket}>
          <RocketSvg width={'200px'} fill={'var(--rocket-dark)'} />
        </div>
      </div>
      <div className={styles.wind}>
        <WindSvg width={'100vw'} height={'200px'} fill={'var(--wind-dark)'} />
      </div>
    </div>
  )
}

export default Rocket
