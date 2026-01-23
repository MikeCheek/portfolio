import {projectsList} from "@utilities/info"
import {Project as ProjectType} from "@utilities/info.types"
import SEO from "next-head-seo"
import React from "react"
import CursorContext from "@utilities/useCursorContext"
import Project from "@molecules/Project"
import Layout from "@organisms/Layout"

const Index = ({error, project}: {error: boolean; project: ProjectType}) => {
  return error ? (
    <h1>Project not found</h1>
  ) : (
    <>
      <SEO
        title={"Michele Pulvirenti | " + project.title}
        description={project.description.length > 150 ? project.description.slice(0, 147) + "..." : project.description}
        pathname={"/project/" + project.id}
      />
      <Layout noBackground noGameLink>
        <CursorContext.Provider
          value={{
            //scale, position, fit, fitElement, unFit,
            projects: [],
          }}
        >
          <Project project={project} fullpage />
        </CursorContext.Provider>
      </Layout>
    </>
  )
}

export async function getServerSideProps({params}: {params: {slug: string}}) {
  const {slug} = params
  const validSlugs = projectsList.map((cat) => cat.id).filter((cat) => cat !== undefined)

  if (!validSlugs.includes(slug)) {
    return {
      props: {error: true, project: null},
    }
  }

  // 1. Get the local project data
  const currentProject = {...projectsList.find((cat) => cat.id === slug)!}

  // 2. If it has a GitHub link, try to fetch the README
  if (currentProject.github) {
    try {
      // Clean the URL (remove trailing slashes and .git)
      const repoBase = currentProject.github.replace(/\/$/, "")
      let branch = "main"

      // Initial fetch to get the content
      let response = await fetch(`${repoBase.replace("github.com", "raw.githubusercontent.com")}/main/README.md`)

      if (response.status === 404) {
        response = await fetch(`${repoBase.replace("github.com", "raw.githubusercontent.com")}/master/README.md`)
        branch = "master"
      }

      if (response.ok) {
        let readmeContent = await response.text()

        // 2. Build the prefix for images based on your example
        const imagePrefix = `${repoBase}/raw/refs/heads/${branch}/`

        // 3. Replace Markdown Images: ![alt](path)
        readmeContent = readmeContent.replace(/(!\[.*?\]\()(?!(http|https|#))(.+?)(\))/g, `$1${imagePrefix}$3$4`)

        // 4. Replace HTML Images: <img src="path">
        readmeContent = readmeContent.replace(
          /(<img\b[^>]*?\bsrc=["'])(?!(http|https))(.+?)(["'])/g,
          `$1${imagePrefix}$3$4`
        )

        currentProject.readme = readmeContent
      }
    } catch (error) {
      console.error("README Fetch Error:", error)
    }
  }

  return {
    props: {
      error: false,
      project: currentProject,
    },
  }
}

export default Index
