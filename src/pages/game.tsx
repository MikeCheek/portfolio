import React, {lazy, Suspense, useEffect, useState} from 'react'
import * as styles from '../styles/game.module.scss'
import SEO from '../components/seo/seo'
import GameLoader from '../game/gameLoader/gameLoader'
import Layout from '../components/layout/layout'

const Game = () => {
  const [code, setCode] = useState<string>()
  const GameHero = lazy(() => import('../game/gameHero/gameHero'))
  const isSSR = typeof window === 'undefined'

  useEffect(() => {
    const params = new URLSearchParams(location.search)

    params.forEach((value, key) => {
      if (key === 'word') {
        setCode(value.toLowerCase())
      }
    })
  }, [])

  return (
    <>
      <SEO title={'Word Game'} description={'Play this word game'} pathname={'/game'} />
      <Layout noGameLink={true}>
        <h1 className={styles.heading}>Word Game</h1>
        {!isSSR && (
          <Suspense fallback={<GameLoader />}>
            <GameHero code={code} />
          </Suspense>
        )}
      </Layout>
    </>
  )
}

export default Game
