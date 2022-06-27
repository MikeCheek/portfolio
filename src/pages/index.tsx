import React, {useEffect} from 'react'
import Hero from '../components/hero/hero'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
// import ReactGA from 'react-ga4'
// import {collection, doc, increment, updateDoc} from 'firebase/firestore'
// import {database} from '../../firebaseConfig'

import '../styles/globals.scss'

const IndexPage = (): JSX.Element => {
  // const dbInstance = collection(database, 'pages')
  // const fs = doc(dbInstance, 'home')

  const animateKeyDown = (key: KeyboardEvent) => {
    if (key.keyCode === 79)
      //o
      document.body.style.color = 'var(--orange)'
    if (key.keyCode === 80)
      //p
      document.body.style.color = 'var(--pink)'
    if (key.keyCode === 187) {
      //+
      document.body.style.transform = 'scale(1.5)'
      document.body.style.overflowX = 'scroll'
    }
    if (key.keyCode === 189)
      //-
      document.body.style.transform = 'scale(0.5)'
    if (key.keyCode === 85)
      //u
      document.body.style.textDecoration = 'underline'
    if (key.keyCode === 84)
      //t
      document.body.style.webkitTextStroke = 'thick'
  }
  const animateKeyUp = () => {
    document.body.removeAttribute('style')
  }

  // const update = async () => {
  //   await updateDoc(fs, {
  //     times: increment(1),
  //   })
  // }

  useEffect(() => {
    // update()

    // if (!ReactGA.isInitialized) ReactGA.initialize(process.env.MEASUREMENT_ID as string)
    // ReactGA.send({hitType: 'pageview', page: '/', title: 'Home'})
    document.addEventListener('keydown', animateKeyDown)
    document.addEventListener('keyup', animateKeyUp)
    return () => {
      document.removeEventListener('keydown', animateKeyDown)
      document.removeEventListener('keyup', animateKeyUp)
    }
  }, [])

  return (
    <>
      <SEO
        title={'Michele Pulvirenti'}
        description={
          "Hi, I'm a developer and I'm currently working on the web. I'm passionate about building cool websites with amazing animations and I'm always looking for new ways to improve my skills."
        }
        googleSiteVerification={'I4IPeMDb8LK64z0WfFe8k8Ep4XWwHih824Fu6F8fy64'}
        pathname={'/'}
      />
      <Layout>
        <div>
          <Hero />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
