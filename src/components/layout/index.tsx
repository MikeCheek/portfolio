import React, {useState, useEffect} from 'react'
import detectBrowser from '../../utilities/detectBrowser'

import * as styles from './index.module.scss'
import {LayoutProps} from './index.types'

import Footer from '../Footer'
import Ball from '../../atoms/Ball'
import Separator from '../../atoms/Separator'
import ArrowUp from '../../atoms/ArrowUp'

import BallMoving from '../../assets/ballMoving.svg'
import BallStill from '../../assets/ballStill.svg'
import Network from '../../atoms/Network'

const Index = ({children, noGameLink = false}: LayoutProps): JSX.Element => {
  const [browser, setBrowser] = useState<string>('waiting')

  useEffect(() => {
    setBrowser(detectBrowser())
  }, [])

  return (
    <>
      {browser === 'waiting' ? null : browser === 'Safari' ? (
        <Ball BallSvg={BallStill} />
      ) : (
        <Ball BallSvg={BallMoving} />
      )}
      <div id="top" className={styles.layout}>
        <Network />
        {children}

        {!noGameLink && (
          <>
            <Separator />
            <Footer noGameLink={noGameLink} />
          </>
        )}
      </div>
      {!noGameLink && <ArrowUp />}
    </>
  )
}

export default Index
