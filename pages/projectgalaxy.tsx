import dynamic from "next/dynamic"
import projectsData from "../utilities/projects-with-embeddings.json"
import {ProjectWithEmbedding} from "@utilities/info.types"

// Important: Disable SSR for Three.js
const ProjectGalaxy = dynamic(() => import("../components/organisms/ProjectGalaxy"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "600px",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{color: "#7928ca", animation: "pulse 2s infinite"}}>Initializing Neural Galaxy...</p>
    </div>
  ),
})

export default function GalaxyPage() {
  const nodes = projectsData.map((p) => ({
    ...p,
    // Increase the multiplier to spread them out!
    pos: [
      p.embedding[0] * 500, // Amplifying X
      p.embedding[1] * 500, // Amplifying Y
      p.embedding[2] * 500, // Amplifying Z
    ] as [number, number, number],
  })) as ProjectWithEmbedding[]

  return (
    <main style={{padding: "2rem"}}>
      <h1 className="glowTitle">Project Universe</h1>
      <p style={{opacity: 0.6, marginBottom: "2rem"}}>
        A semantic map of my work. Click a node to explore the project.
      </p>

      <ProjectGalaxy projects={nodes} />
    </main>
  )
}
