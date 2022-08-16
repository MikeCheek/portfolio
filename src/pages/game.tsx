import React, {lazy, Suspense, useEffect, useState} from 'react'
import * as styles from '../styles/game.module.scss'
import Loading from '../atoms/loading/loading'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Game = () => {
  const [code, setCode] = useState<string>()
  const GameHero = lazy(() => import('../components/gameHero/gameHero'))

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
        <Suspense fallback={<BigLoader />}>
          <GameHero code={code} />
        </Suspense>
      </Layout>
    </>
  )
}

export default Game

const BigLoader = () => {
  return (
    <div className={styles.bigLoader}>
      <Loading />
    </div>
  )
}
