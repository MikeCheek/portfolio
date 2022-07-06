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
      // centerSlidePercentage={80}
      // centerMode
      autoPlay
      showArrows={false}
      showThumbs={false}
      autoFocus
      useKeyboardArrows
      stopOnHover
      showIndicators
      emulateTouch
      showStatus={false}
      infiniteLoop
      preventMovementUntilSwipeScrollTolerance
    >
      <Card href="https://pop-funding.vercel.app">
        <StaticImage
          placeholder="blurred"
          className={styles.imageMobile}
          src="../../images/screenshots/pop-mobile.jpg"
          alt={'Pop! Funding'}
        />
        <StaticImage
          placeholder="blurred"
          className={styles.image}
          src="../../images/screenshots/pop.png"
          alt={'Pop! Funding'}
        />
      </Card>
      <Card
        href="https://nt.syskrack.org"
        title="Naturalmente Tecnologici"
        description="Website created on the occasion of the Naturalmente Tecnologici event organized by the Syskrack association in Grassano (Matera)"
      >
        <StaticImage
          placeholder="blurred"
          className={styles.imageMobile}
          src="../../images/screenshots/nt-mobile.jpg"
          alt={'Naturalmente Tecnologici'}
        />
        <StaticImage
          placeholder="blurred"
          className={styles.image}
          src="../../images/screenshots/nt.png"
          alt={'Naturalmente Tecnologici'}
        />
      </Card>
      <Card
        href="https://wdc.jetop.com"
        favicon="/logo.png"
        title="Web Dev Challenge 2022"
        description="Website created on the occasion of the Web Dev Challenge event organized by JEToP"
      >
        <StaticImage
          placeholder="blurred"
          className={styles.imageMobile}
          src="../../images/screenshots/wdc-mobile.jpg"
          alt={'WDC 2022'}
        />
        <StaticImage
          placeholder="blurred"
          className={styles.image}
          src="../../images/screenshots/wdc.png"
          alt={'WDC 2022'}
        />
      </Card>
    </Carousel>
  )
}

export default Projects
