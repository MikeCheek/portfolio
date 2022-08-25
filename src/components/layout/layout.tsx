import React, {useState, useEffect} from 'react'
import detectBrowser from '../../utilities/detectBrowser'

import * as styles from './layout.module.scss'

import {LayoutProps} from './layout.types'
// import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Ball from '../../atoms/ball/ball'
import Separator from '../../atoms/separator/separator'
import ArrowUp from '../../atoms/arrowUp/arrowUp'

import BallMoving from '../../assets/ballMoving.svg'
import BallStill from '../../assets/ballStill.svg'
import Network from '../../atoms/network/network'

const Layout = ({children, noGameLink = false}: LayoutProps): JSX.Element => {
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

export default Layout
