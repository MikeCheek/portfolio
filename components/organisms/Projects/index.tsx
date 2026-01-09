import React, {useContext, useEffect, useRef, useState} from "react"
import Project from "@molecules/Project"
import CursorContext from "@utilities/useCursorContext"
import styles from "./index.module.scss"
import Filtering from "@molecules/Filtering"

const Index = () => {
  const {projects} = useContext(CursorContext)
  const [isSticky, setIsSticky] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  const categoriesCount: Record<string, number> = {}
  for (const project of projects) {
    categoriesCount[project.category] = (categoriesCount[project.category] || 0) + 1
  }

  const [filter, setFilter] = useState<string[]>(Object.keys(categoriesCount))

  useEffect(() => {
    const handleScroll = () => {
      if (!filterRef.current) return

      const {bottom} = filterRef.current.getBoundingClientRect()

      if (!isSticky && bottom <= 0) {
        setIsSticky(true)
      } else if (isSticky && bottom > 0) {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isSticky])

  const filtering = (
    <Filtering
      values={categoriesCount}
      onChange={(value) => {
        setFilter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
      }}
      clearAll={() => setFilter([])}
      active={filter}
    />
  )

  return (
    <div className={styles.projects}>
      <span className={styles.announce}>
        Check out my projects also in an{" "}
        <a
          title="Portfolio Interactive"
          className="link"
          target="_blank"
          href="https://michelepulvirenti-interactive.vercel.app"
        >
          interactive way
        </a>{" "}
        (still in development)
      </span>
      <div ref={filterRef} className={styles.filterContainer}>
        {filtering}
      </div>
      {isSticky ? <div className={styles.sticky}>{filtering}</div> : <></>}
      <div className={styles.projectsGrid}>
        {projects
          .filter((project) => filter.includes(project.category))
          .map((project, key) => {
            return <Project project={project} key={`${key}-${filter.join("-")}`} />
          })}
      </div>
    </div>
  )
}

export default Index
