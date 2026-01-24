import projectsData from "@utilities/projects-with-embeddings.json"
import {useState, useEffect, useRef} from "react"
import {Project, ProjectWithEmbedding} from "./info.types"
import {projectsList} from "./info"

const recommendationCache: Record<string, Project[]> = {}
const CACHE_KEY_PREFIX = "ml_rec_"

export const useRecommendations = (project: Project, limit = 3) => {
  const [recommended, setRecommended] = useState<Project[]>([])
  const workerRef = useRef<Worker | null>(null)

  const allProjects = (projectsData as ProjectWithEmbedding[]).map((p) => {
    const match = projectsList.find((pl) => pl.id === p.id)
    return {
      ...p,
      image: match?.image,
    }
  })
  const currentProject = allProjects.find((p) => p.id === project.id)

  useEffect(() => {
    // 1. Initialize Worker
    workerRef.current = new Worker(new URL("./ml.worker.ts", import.meta.url))

    const runInference = () => {
      if (!currentProject?.embedding) return

      const cacheKey = `${CACHE_KEY_PREFIX}${currentProject.id}_${limit}`

      // 2. Layer 1: In-Memory Cache (Instant)
      if (recommendationCache[cacheKey]) {
        setRecommended(recommendationCache[cacheKey])
        return
      }

      // 3. Layer 2: LocalStorage (Persistent)
      const storedIds = localStorage.getItem(cacheKey)
      if (storedIds) {
        try {
          const ids = JSON.parse(storedIds) as string[]
          const hydrated = ids
            .map((id) => allProjects.find((p) => p.id === id))
            .filter((p): p is ProjectWithEmbedding => !!p)

          if (hydrated.length > 0) {
            recommendationCache[cacheKey] = hydrated
            setRecommended(hydrated)
            return
          }
        } catch (e) {
          console.error("Failed to parse recommendation cache", e)
        }
      }

      // 4. Layer 3: Web Worker Calculation (Off-thread Math)
      workerRef.current?.postMessage({
        currentEmbedding: currentProject.embedding,
        allProjects,
        limit,
      })

      workerRef.current!.onmessage = (e) => {
        if (e.data.success) {
          const topMatches = e.data.topMatches

          // Save to both caches
          recommendationCache[cacheKey] = topMatches
          localStorage.setItem(cacheKey, JSON.stringify(topMatches.map((p: Project) => p.id)))

          setRecommended(topMatches)
        }
      }
    }

    runInference()

    return () => workerRef.current?.terminate()
  }, [currentProject?.id, limit]) // allProjects is static, so we don't need it in deps

  return recommended
}
