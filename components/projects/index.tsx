import React, {useEffect, useState} from "react"
import Loading from "../../atoms/loading"
import Project from "../../atoms/project"
import {Project as ProjectType} from "../../utilities/info.types"
import styles from "./index.module.scss"

const Index = () => {
  const [projectList, setProjectList] = useState<ProjectType[]>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = () => {
    setLoading(true)
    setError(undefined)
    fetch(window.location.origin + "/api/v1/data/projects")
      .then((response) => response.json())
      .then((data) => setProjectList(data))
      .catch((e) => {
        console.table(e)
        setError("Error fetching data,")
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.projects}>
      {loading ? (
        <Loading />
      ) : error ? (
        <>
          <div>
            {error}{" "}
            <span onClick={() => fetchData()} className={"link"}>
              try again
            </span>
          </div>
        </>
      ) : (
        projectList?.map((project, key) => {
          return <Project project={project} reversed={key % 2 == 1} key={key} />
        })
      )}
    </div>
  )
}

export default Index
