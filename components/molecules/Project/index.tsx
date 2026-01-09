import React, {useContext, useEffect, useRef} from "react"
import Image from "next/image"
import styles from "./index.module.scss"
import {ProjectProps} from "./index.types"
import Link from "@assets/link.svg"
import {useInView} from "react-intersection-observer"
import Button from "@atoms/Button"
import Chip from "@atoms/Chip"
import GlassCard from "@atoms/GlassCard"
import ReactMarkdown from "react-markdown"
import ReadmeViewer from "@atoms/ReadmeViewer"

const Index = ({project, fullpage = false}: ProjectProps) => {
  // const {fitElement, unFit} = useContext(CursorContext)
  const id = project.id
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    fallbackInView: true,
    rootMargin: "-10% 0px -10% 0px",
  })

  const videoRef = useRef<HTMLVideoElement>(null)
  const movingRef = useRef<HTMLElement | null>(null)
  const projectRef = useRef<HTMLDivElement>(null)

  // const handleMouseHover = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   fitElement(e.currentTarget)
  // }
  // const handleMouseLeave = () => {
  //   unFit()
  // }

  useEffect(() => {
    const handle = projectRef.current
    if (!handle || fullpage) return // Disable tilt effect on fullpage for better readability
    const el = movingRef.current
    if (!el) return

    let raf = 0
    const clamp = (v: number) => Math.max(-1, Math.min(1, v))

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = clamp((e.clientX - cx) / (rect.width / 2))
      const dy = clamp((e.clientY - cy) / (rect.height / 2))

      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${-dy * 15}deg) rotateY(${dx * 5}deg) translate3d(${dx * 10}px, ${dy * 10}px, 0)`
      })
    }

    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = "none"
    }

    handle.addEventListener("mousemove", onMove)
    handle.addEventListener("mouseleave", onLeave)

    return () => {
      handle.removeEventListener("mousemove", onMove)
      handle.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [id, fullpage])

  useEffect(() => {
    if (videoRef.current) {
      if (inView) videoRef.current.play()
      else videoRef.current.pause()
    }
  }, [inView])

  const Chips = (
    <div className={styles.chipsWrap}>
      {project.technologies && (
        <div className={styles.chips}>
          {(project.technologies as string[]).map((tech, i) => (
            <Chip key={i} text={tech} />
          ))}
        </div>
      )}
      {project.tools && (
        <div className={styles.chips}>
          {(project.tools as string[]).map((tool, i) => (
            <Chip key={i} orange text={tool} />
          ))}
        </div>
      )}
    </div>
  )

  // Dynamic Class Names
  const containerClass = `
    ${styles.project} 
    ${fullpage ? styles.fullpage : ""}
  `

  const Media = (
    <span ref={movingRef} className={styles.imageDesktopWrap}>
      <a
        title={project.title}
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
            loop
            onMouseEnter={(e) => !fullpage && e.currentTarget.pause()}
            onMouseLeave={(e) => !fullpage && e.currentTarget.play()}
          >
            <source src={project.video} />
          </video>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            className={styles.image}
            height={fullpage ? 600 : 380}
            quality={90}
          />
        )}
      </a>
      <div className={styles.stand} />
    </span>
  )

  if (!fullpage) {
    return (
      <div ref={projectRef} className={containerClass} id={id}>
        <div className={styles.head}>
          <div className={styles.titleSection}>
            <a href={"#" + id} title={"Link to " + id} className={styles.link}>
              <Link />
            </a>
            <h3>{project.title}</h3>
          </div>
        </div>
        <div ref={ref} className={styles.desktopWrap}>
          {Media}
        </div>
        <Button title="See project details" href={"/project/" + id} internal>
          See details -&gt;
        </Button>
      </div>
    )
  }

  return (
    <div ref={projectRef} className={containerClass} id={id}>
      <div className={styles.head}>
        <div className={styles.titleSection}>
          <a href={fullpage ? "#" : "#" + id} title={"Link to " + id} className={styles.link}>
            <Link />
          </a>
          <h1 className="coloredGradient">{project.title}</h1>
        </div>

        <div ref={ref} className={styles.desktopWrap}>
          {Media}
          <GlassCard className={styles.descriptionFull} dangerouslySetInnerHTML={{__html: project.description}} />
        </div>

        <div className={styles.links}>
          {project.href && (
            <Button title="Visit website" href={project.href}>
              Visit Website
            </Button>
          )}
          {project.github && (
            <Button title="Visit repository" href={project.github}>
              Visit Repo
            </Button>
          )}
        </div>

        {Chips}

        {project.readme ? <ReadmeViewer content={project.readme} repoUrl={project.github ?? ""} /> : <></>}
      </div>
    </div>
  )
}

export default Index
