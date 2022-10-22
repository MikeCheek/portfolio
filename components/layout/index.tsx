import React, {useState, useEffect} from 'react'
import detectBrowser from '../../utilities/detectBrowser'

import styles from './index.module.scss'
import {LayoutProps} from './index.types'

import Footer from '../footer'
import Ball from '../../atoms/ball'
import Separator from '../../atoms/separator'
import ArrowUp from '../../atoms/arrowUp'

import BallMoving from '../../assets/ballMoving.svg'
import BallStill from '../../assets/ballStill.svg'
import Network from '../../atoms/network'

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
