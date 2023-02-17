import React, {useContext, useEffect, useRef, useState} from "react"
import Image from "next/image"
import styles from "./index.module.scss"
import {ProjectProps} from "./index.types"
import CursorContext from "../../utilities/useCursorContext"

const Index = ({project, reversed = false}: ProjectProps) => {
  const {fitElement, unFit} = useContext(CursorContext)
  const [showVideo, setShowVideo] = useState<boolean>(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current)
      if (showVideo) videoRef.current.play()
      else videoRef.current.pause()
  }, [showVideo])

  const handleMouseHover = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    fitElement(e.currentTarget)
  }
  const handleMouseLeave = () => {
    unFit()
  }

  return (
    <div className={reversed ? styles.projectReverse : styles.project}>
      <div className={styles.head}>
        <h3>{project.title}</h3>
        <em dangerouslySetInnerHTML={{__html: project.description}}></em>
        <div className={styles.imageMobileWrap}>
          <Image
            src={project.image_mobile}
            alt={project.title}
            className={styles.imageMobile}
            style={project.reduce_opacity ? {opacity: 0.4} : {}}
            loading={"lazy"}
            quality={50}
          />
        </div>

        <div className={styles.links}>
          <a
            onMouseOver={(e) => handleMouseHover(e)}
            onMouseEnter={(e) => handleMouseHover(e)}
            onMouseOut={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="buttonStyle"
          >
            Visit Website
          </a>
          {project.github && (
            <a
              onMouseOver={(e) => handleMouseHover(e)}
              onMouseEnter={(e) => handleMouseHover(e)}
              onMouseOut={handleMouseLeave}
              onMouseLeave={handleMouseLeave}
              href={project.github}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className="buttonStyle"
            >
              Visit Repo
            </a>
          )}
        </div>
      </div>
      <div className={styles.desktopWrap}>
        <a
          className={styles.imageWrap}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => project.video && setShowVideo(true)}
          onMouseLeave={() => setShowVideo(false)}
        >
          {project.video ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                className={`${styles.image} ${styles.media}`}
                loading={"lazy"}
                quality={50}
                style={showVideo ? {opacity: 0} : {opacity: 1}}
              />
              <video
                muted
                autoPlay
                ref={videoRef}
                loop
                className={`${styles.video} ${styles.media}`}
                style={showVideo ? {opacity: 1} : {opacity: 0}}
              >
                <source src={project.video} />
              </video>
            </>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              className={styles.image}
              loading={"lazy"}
              quality={50}
              onMouseEnter={() => project.video && setShowVideo(true)}
            />
          )}
        </a>
        <div className={styles.stand} />
      </div>
    </div>
  )
}

export default Index
