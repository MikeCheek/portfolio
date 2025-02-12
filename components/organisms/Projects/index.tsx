import React, { useContext, useEffect, useRef, useState } from "react"
import Project from "@molecules/Project"
import CursorContext from "@utilities/useCursorContext"
import styles from "./index.module.scss"
import Filtering from "@molecules/Filtering"
import { P_CATEGORY } from "@utilities/info"

const Index = () => {
  const { projects } = useContext(CursorContext)
  const [filter, setFilter] = useState<string[]>(Object.values(P_CATEGORY))
  const [isSticky, setIsSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!filterRef.current) return;

      const { bottom } = filterRef.current.getBoundingClientRect();

      if (!isSticky && bottom <= 0) {
        setIsSticky(true)
      }
      else if (isSticky && bottom > 0) {
        setIsSticky(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  return (
    <div className={styles.projects}>
      <span className={styles.announce}>Check out my projects also in an <a title="Portfolio Interactive" className="link" target="_blank" href="https://michelepulvirenti-interactive.vercel.app">interactive way</a> (still in development)</span>
      <div ref={filterRef} className={styles.filterContainer}>
        <Filtering
          values={Object.values(P_CATEGORY)}
          onChange={(value) => setFilter(curr => curr.includes(value) ? curr.filter(v => v != value) : [...curr, value])}
          active={filter}
        />
      </div>
      {isSticky ? <div className={styles.sticky}>
        <Filtering
          values={Object.values(P_CATEGORY)}
          onChange={(value) => setFilter(curr => curr.includes(value) ? curr.filter(v => v != value) : [...curr, value])}
          active={filter}
        />
      </div> : <></>}
      {projects
        .filter(project => filter.includes(project.category))
        .map((project, key) => {
          return <Project project={project} reversed={key % 2 == 1} key={`${key}-${filter.join("-")}`} />
        })}
    </div>
  )
}

export default Index
