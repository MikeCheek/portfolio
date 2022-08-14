import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Arrow from '../../atoms/arrow/arrow'
import Card from '../../atoms/card/card'
import Legend from '../../atoms/legend/legend'
import * as styles from './projects.module.scss'

const Projects = () => {
  return (
    <>
      <Legend />
      <div style={{position: 'relative'}}>
        <div className={styles.shadowLeft}></div>
        <Carousel
          className={styles.carousel}
          interval={5000}
          ariaLabel={'My projects'}
          centerSlidePercentage={80}
          centerMode
          autoPlay
          // showArrows={false}
          renderArrowNext={(clickHandler) => (
            <Arrow
              right
              onClick={clickHandler}
              hideMobile
              injectStyle={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                margin: 'auto',
                transform: 'scale(0.8)',
                zIndex: 2,
              }}
            />
          )}
          renderArrowPrev={(clickHandler) => (
            <Arrow
              onClick={clickHandler}
              hideMobile
              injectStyle={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                margin: 'auto',
                transform: 'scale(0.8)',
                zIndex: 2,
              }}
            />
          )}
          showThumbs={false}
          useKeyboardArrows
          stopOnHover
          showIndicators={false}
          emulateTouch
          showStatus={false}
          swipeScrollTolerance={10}
          preventMovementUntilSwipeScrollTolerance
        >
          <Card
            href="https://pop-funding.vercel.app"
            title="Pop! Funding"
            description="A working crowdfunding web application based on Algorand Blockchain where anyone with Algo can create a funding or donate "
            github="https://github.com/MikeCheek/pop-funding"
            designed
            developed
          >
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
            github="https://github.com/MikeCheek/naturalmente-tecnologici"
            developed
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
            developed
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
        <div className={styles.shadowRight}></div>
      </div>
    </>
  )
}

export default Projects
