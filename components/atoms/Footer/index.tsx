import React from "react"
import styles from "./index.module.scss"

//import Phone from '@assets/phone.svg'
import Email from "@assets/email.svg"
import Linkedin from "@assets/linkedin.svg"
import Github from "@assets/github.svg"
import Kaggle from "@assets/kaggle.svg"
import ArtGallery from "@assets/art-gallery.svg"
import {email, github, linkedin} from "@utilities/info"
import FooterProps from "./index.types"
import Link from "next/link"

const width = (mult: number = 1): string => `${60 * mult}px`
const height = (mult: number = 1): string => `${50 * mult}px`

const Index = ({noGameLink = false}: FooterProps) => {
  const color: string = "var(--white)"

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const x: number = event.clientX
    const y: number = event.clientY
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const middleX: number = rect.left + rect.width / 2
    const middleY: number = rect.top + rect.height / 2
    const xOffset = x - middleX
    const yOffset = y - middleY
    element.style.transform = `translate(${xOffset}px, ${yOffset}px)`
  }

  const handleMouseLeave = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const element = event.currentTarget
    setTimeout(() => {
      element.style.removeProperty("transform")
    }, 150)
  }

  return (
    <>
      <footer className={styles.footerWrap} id={"contacts"}>
        <div className={styles.footer}>
          {/* <h2 className={styles.contacts}>My contacts</h2> */}
          <div className={styles.icons}>
            {/*<Phone width={width} fill={color} />*/}
            <a
              onMouseMove={(event) => handleMouseMove(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
              className={styles.iconWrap}
              href={linkedin}
              title={"Visit my Linkedin profile"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Linkedin width={width()} height={height()} fill={color} className={styles.icon} />
            </a>
            <a
              onMouseMove={(event) => handleMouseMove(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
              className={styles.iconWrap}
              href={"mailto:" + email}
              title={"Send me an email"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Email width={width()} height={height()} fill={color} className={styles.icon} />
            </a>
            <a
              onMouseMove={(event) => handleMouseMove(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
              className={styles.iconWrap}
              href={github}
              title={"Visit my GitHub profile"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Github width={width()} height={height()} fill={color} className={styles.icon} />
            </a>
            <a
              onMouseMove={(event) => handleMouseMove(event)}
              onMouseLeave={(event) => handleMouseLeave(event)}
              className={styles.iconWrap}
              href={"https://www.kaggle.com/michelepulvirenti"}
              title={"Visit my Kaggle profile"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Kaggle width={width()} height={height()} fill={color} className={styles.icon} />
            </a>
            {noGameLink ? null : (
              <Link
                href={"/art"}
                title="Visit my Art Gallery"
                onMouseMove={(event) => handleMouseMove(event)}
                onMouseLeave={(event) => handleMouseLeave(event)}
                className={styles.iconWrap}
              >
                <ArtGallery width={width(1.2)} height={height(1.2)} fill={color} className={styles.icon} />
              </Link>
            )}
          </div>
        </div>
        <Link href={"/privacy"} className={"link"} title="Privacy Policy">
          Privacy Policy
        </Link>
      </footer>
    </>
  )
}

export default Index
