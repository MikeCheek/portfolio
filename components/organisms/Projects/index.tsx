import React, {useContext, useEffect, useRef, useState} from "react"
import Project from "@molecules/Project"
import CursorContext from "@utilities/useCursorContext"
import styles from "./index.module.scss"
import Filtering from "@molecules/Filtering"

const Index = () => {
  const {projects} = useContext(CursorContext)
  const [isSticky, setIsSticky] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  // 1. IMPROVED CATEGORY COUNTING
  // We normalize project.category to an array to handle both strings and arrays
  const categoriesCount: Record<string, number> = {}

  projects.forEach((project) => {
    const projectCats = Array.isArray(project.category) ? project.category : [project.category]

    projectCats.forEach((cat: string) => {
      categoriesCount[cat] = (categoriesCount[cat] || 0) + 1
    })
  })

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
      buttonText={filter.length === Object.keys(categoriesCount).length ? "X" : "All"}
      buttonAction={() =>
        filter.length === Object.keys(categoriesCount).length ? setFilter([]) : setFilter(Object.keys(categoriesCount))
      }
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
          .filter((project) => {
            // 2. IMPROVED FILTER LOGIC
            // Convert project.category to array if it's a string
            const projectCats = Array.isArray(project.category) ? project.category : [project.category]

            // Check if at least one category in the project is included in the active filters
            return projectCats.some((cat: string) => filter.includes(cat))
          })
          .map((project, key) => {
            return <Project project={project} key={`${key}-${filter.join("-")}`} />
          })}
      </div>
    </div>
  )
}

export default Index
