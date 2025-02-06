import React, { useContext } from "react"
import Project from "@molecules/Project"
import CursorContext from "@utilities/useCursorContext"
import styles from "./index.module.scss"
import Banner from "@atoms/Banner"
import { bannerText } from "@utilities/info"

const Index = () => {
  const { projects } = useContext(CursorContext)
  return (
    <div className={styles.projects}>
      <Banner text={bannerText} />
      {projects.map((project, key) => {
        return <Project project={project} reversed={key % 2 == 1} key={key} />
      })}
    </div>
  )
}

export default Index
