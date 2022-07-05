import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Card from '../../atoms/card/card'
import * as styles from './projects.module.scss'

const Projects = () => {
  return (
    <Carousel
      className={styles.carousel}
      interval={5000}
      ariaLabel={'My projects'}
      //@ts-ignore
      renderThumbs={() => null}
      centerSlidePercentage={80}
      centerMode
      autoPlay
      showArrows={false}
      showThumbs
      showIndicators
      emulateTouch
      showStatus={false}
      infiniteLoop
      preventMovementUntilSwipeScrollTolerance
    >
      <Card href="https://pop-funding.vercel.app">
        <StaticImage className={styles.image} src="../../images/pop.png" alt={''} />
      </Card>
      <Card href="https://nt.syskrack.org" title="Naturalmente Tecnologici">
        <StaticImage className={styles.image} src="../../images/nt.png" alt={''} />
      </Card>
      <Card href="https://wdc.jetop.com" favicon="/logo.png" title="Web Dev Challenge 2022">
        <StaticImage className={styles.image} src="../../images/wdc.png" alt={''} />
      </Card>
    </Carousel>
  )
}

export default Projects
