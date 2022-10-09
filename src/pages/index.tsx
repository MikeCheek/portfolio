import React, {useEffect, useState} from 'react'
import CursorContext from '../utilities/useCursorContext'
import Hero from '../components/hero'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/globals.scss'

const IndexPage = (): JSX.Element => {
  const [scale, setScale] = useState<{x: number; y: number}>({x: 1, y: 1})
  const [position, setPosition] = useState<{x: number; y: number}>()
  const dimension = 100

  const fit = (width: number, height: number) => {
    setScale({x: width / dimension + 1, y: height / dimension + 1})
  }
  const fitElement = (element: HTMLElement) => {
    const dim = element.getBoundingClientRect()
    const [width, height] = [dim.width + 10, dim.height + 10]
    const [x, y] = [dim.left + width / 2 - dimension / 2, dim.top + height / 2 - dimension / 2]
    setScale({x: width / dimension + 1, y: height / dimension + 1})
    setPosition({x: x, y: y})
  }
  const unFit = () => {
    setScale({x: 1, y: 1})
    setPosition(undefined)
  }

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

  useEffect(() => {
    document.addEventListener('keydown', animateKeyDown)
    document.addEventListener('keyup', animateKeyUp)
    return () => {
      document.removeEventListener('keydown', () => {})
      document.removeEventListener('keyup', () => {})
    }
  }, [])

  return (
    <>
      <SEO
        title={'Michele Pulvirenti'}
        description={
          "Hi, I'm a developer and I'm currently working on the web. I love building cool websites with amazing animations and always strive to improve my skills."
        }
        googleSiteVerification={'I4IPeMDb8LK64z0WfFe8k8Ep4XWwHih824Fu6F8fy64'}
        bingSiteVerification={'40DAF13A693A13CA237525B8B8F584D1'}
        pathname={'/'}
      />
      <Layout>
        <CursorContext.Provider value={{scale, position, fit, fitElement, unFit}}>
          <Hero />
        </CursorContext.Provider>
      </Layout>
    </>
  )
}

export default IndexPage
