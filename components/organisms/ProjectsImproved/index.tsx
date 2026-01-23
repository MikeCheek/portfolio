import React, {use, useContext, useEffect, useMemo, useRef, useState} from "react"
import Image from "next/image"
import {motion, AnimatePresence} from "framer-motion"
import CursorContext from "@utilities/useCursorContext"
import LinkIcon from "@assets/link.svg" // Assuming you have this icon
import styles from "./index.module.scss"
import Router from "next/router"

const ProjectsImproved = () => {
  const {projects} = useContext(CursorContext)

  // State for Filters
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // 1. Extract Unique Categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => (Array.isArray(p.category) ? p.category : [p.category])))),
  ]

  // 2. Filter Logic
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => {
          const cats = Array.isArray(p.category) ? p.category : [p.category]
          return cats.includes(activeFilter)
        })

  const isSmallSet = filteredProjects.length < 9

  return (
    <>
      <section className={styles.container}>
        {/* --- HEADER & FILTERS --- */}
        <div className={styles.header}>
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ""}`}
              >
                {cat}
                {activeFilter === cat && <motion.div layoutId="activePill" className={styles.activeBackground} />}
              </button>
            ))}
          </div>
        </div>

        {/* --- FLUID GRID --- */}
        <motion.div layout className={`${styles.gallery} ${isSmallSet ? styles.masonryLike : ""}`}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredId === project.id}
                onHover={setHoveredId}
                isDimmed={hoveredId !== null && hoveredId !== project.id}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  )
}

const navigateTo = (path: string) => {
  Router.push(path)
}

// --- SUB-COMPONENT: CARD ---
const ProjectCard = ({project, isHovered, onHover, isDimmed}: any) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const imageSrc = Array.isArray(project.image) ? project.image[0] : project.image

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.pause()
      } else {
        // We use a promise check because play() can be interrupted
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented by browser
          })
        }
      }
    }
  }, [isHovered])

  const heights = ["300px", "450px", "350px", "500px"]
  const randomHeight = heights[project.id % heights.length] // Simple deterministic height

  return (
    <motion.div
      // layout // <-- TRY REMOVING THIS if the overflow persists
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: isDimmed ? 0.4 : 1, scale: 1}}
      exit={{opacity: 0, scale: 0.9}}
      transition={{duration: 0.4, ease: "easeOut"}}
      className={styles.card}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      data-expanded={isHovered}
      onClick={() => navigateTo(`/project/${project.id}`)}
      style={{height: randomHeight}}
    >
      {/* Background Media */}
      <div className={styles.mediaWrapper}>
        {project.video && (
          <video ref={videoRef} src={project.video} loop autoPlay muted playsInline className={styles.videoBg} />
        )}
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.imageBg}
          style={{opacity: project.video ? 0 : 1}} // Fade out img if video plays
        />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Content Overlay */}
      <div className={styles.content}>
        <div className={styles.topTags}>
          {/* Show first category only to keep it clean */}
          <span className={styles.categoryTag}>
            {Array.isArray(project.category) ? project.category[0] : project.category}
          </span>
        </div>

        <div className={styles.bottomInfo}>
          <motion.h3 layout="position" className={styles.title}>
            {project.title}
          </motion.h3>

          {/* Details that slide in on Hover */}
          {/* <motion.div
            className={styles.details}
            initial={false}
          >

            <div className={styles.techStack}>
              {project.technologies?.slice(0, 3).map((t: string) => (
                <span key={t} className={styles.miniTag}>{t}</span>
              ))}
            </div>

            {project.href && (
              <a href={project.href} target="_blank" rel="noreferrer" className={styles.viewBtn}>
                View Project <LinkIcon width={16} />
              </a>
            )}
          </motion.div> */}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectsImproved
