import {collection, doc, increment, updateDoc} from 'firebase/firestore'
import React, {useEffect} from 'react'
import {database} from '../../firebaseConfig'
import GameHero from '../components/gameHero/gameHero'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
// import ReactGA from 'react-ga4'

const Game = () => {
  const dbInstance = collection(database, 'pages')
  const fs = doc(dbInstance, 'game')
  const update = async () => {
    await updateDoc(fs, {
      times: increment(1),
    })
  }

  useEffect(() => {
    update()
  }, [])
  return (
    <>
      <SEO title={'Word Game'} description={'Play this word game'} />
      <Layout noMenu={true} noGameLink={true}>
        <GameHero />
      </Layout>
    </>
  )
}

export default Game
