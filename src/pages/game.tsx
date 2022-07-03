import React, {useEffect, useState} from 'react'
import GameHero from '../components/gameHero/gameHero'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Game = () => {
  const [code, setCode] = useState<string>()
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
        <GameHero code={code} />
      </Layout>
    </>
  )
}

export default Game
