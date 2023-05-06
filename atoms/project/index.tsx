import React, {useContext, useEffect, useRef} from "react"
import Image from "next/image"
import styles from "./index.module.scss"
import {ProjectProps} from "./index.types"
import CursorContext from "../../utilities/useCursorContext"
import Link from "../../assets/link.svg"
import {useInView} from "react-intersection-observer"
import Button from "../button"

const Index = ({project, reversed = false}: ProjectProps) => {
  const {fitElement, unFit} = useContext(CursorContext)
  const id = project.title.replace(/\s+/g, "")
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    fallbackInView: true,
    rootMargin: "-30% 0px -30% 0px",
  })

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseHover = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    fitElement(e.currentTarget)
  }
  const handleMouseLeave = () => {
    unFit()
  }

  useEffect(() => {
    if (videoRef.current) {
      if (inView) videoRef.current.play()
      else videoRef.current.pause()
    }
  }, [inView])

  return (
    <div className={reversed ? styles.projectReverse : styles.project} id={id}>
      <div className={styles.head}>
        <a
          href={"#" + id}
          title={"Link to " + id}
          className={reversed ? styles.linkReversed : styles.link}
          onMouseOver={(e) => handleMouseHover(e)}
          onMouseEnter={(e) => handleMouseHover(e)}
          onMouseOut={handleMouseLeave}
          onMouseLeave={handleMouseLeave}
        >
          <Link />
        </a>
        <h3>{project.title}</h3>
        <em dangerouslySetInnerHTML={{__html: project.description}}></em>
        <div className={styles.imageMobileWrap}>
          <Image
            src={project.image_mobile}
            alt={project.title}
            className={styles.imageMobile}
            style={project.reduce_opacity ? {opacity: 0.4} : {}}
            loading={"lazy"}
            fill
            quality={50}
          />
        </div>

        <div className={styles.links}>
          <Button
            title={"Go to " + project.title + " website"}
            onMouseEnter={(e) => handleMouseHover(e)}
            onMouseLeave={handleMouseLeave}
            href={project.href}
          >
            Visit Website
          </Button>
          {project.github && (
            <Button
              title={"Go to " + project.title + " repository"}
              onMouseEnter={(e) => handleMouseHover(e)}
              onMouseLeave={handleMouseLeave}
              href={project.github}
            >
              Visit Repo
            </Button>
          )}
        </div>
      </div>
      <div ref={ref} className={styles.desktopWrap}>
        <a
          title={"Go to " + project.title + " website"}
          className={styles.imageWrap}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.video ? (
            <video
              className={styles.video}
              muted
              ref={videoRef}
              controls={false}
              onMouseEnter={(e) => e.currentTarget.pause()}
              onMouseLeave={(e) => e.currentTarget.play()}
              loop
              about={project.title + " video"}
            >
              <source src={project.video} />
            </video>
          ) : (
            <Image src={project.image} alt={project.title} className={styles.image} height={380} quality={80} />
          )}
        </a>
        <div className={styles.stand} />
      </div>
    </div>
  )
}

export default Index
