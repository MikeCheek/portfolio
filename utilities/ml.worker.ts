// utilities/ml.worker.ts
import {dotProduct} from "./ml"

self.onmessage = (e) => {
  const {currentEmbedding, allProjects, limit} = e.data

  try {
    const scored = allProjects
      .map((p: any) => ({
        ...p,
        score: dotProduct(currentEmbedding, p.embedding),
      }))
      // Sort by highest similarity
      .sort((a: any, b: any) => b.score - a.score)
      // Remove the current project itself (score will be 1.0)
      .filter((item: any) => item.score < 0.99)
      .slice(0, limit)

    self.postMessage({success: true, topMatches: scored})
  } catch (error) {
    self.postMessage({success: false, error: error instanceof Error ? error.message : String(error)})
  }
}
