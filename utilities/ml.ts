import {pipeline, env} from "@xenova/transformers"

// This prevents errors in some Next.js environments
env.allowLocalModels = false

let extractor: any = null

export async function getSimilarityScore(text1: string, text2: string) {
  if (!extractor) {
    extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2")
  }

  const output1 = await extractor(text1, {pooling: "mean", normalize: true})
  const output2 = await extractor(text2, {pooling: "mean", normalize: true})

  // Manual cosine similarity calculation for stability
  const data1 = output1.data
  const data2 = output2.data

  let dotProduct = 0
  for (let i = 0; i < data1.length; i++) {
    dotProduct += data1[i] * data2[i]
  }
  return dotProduct
}

export function getTFIDFSimilarity(text1: string, text2: string) {
  const tokenize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((w) => w.length > 2)

  const words1 = tokenize(text1)
  const words2 = tokenize(text2)
  const allWords = Array.from(new Set([...words1, ...words2]))

  const getVector = (words: string[], reference: string[]) => {
    const freq: Record<string, number> = {}
    words.forEach((w) => (freq[w] = (freq[w] || 0) + 1))
    return reference.map((w) => freq[w] || 0)
  }

  const vec1 = getVector(words1, allWords)
  const vec2 = getVector(words2, allWords)

  // Cosine Similarity calculation
  const dotProduct = vec1.reduce((sum, a, i) => sum + a * vec2[i], 0)
  const mag1 = Math.sqrt(vec1.reduce((sum, a) => sum + a * a, 0))
  const mag2 = Math.sqrt(vec2.reduce((sum, a) => sum + a * a, 0))

  return mag1 && mag2 ? dotProduct / (mag1 * mag2) : 0
}

export const dotProduct = (vecA: number[], vecB: number[]) => {
  return vecA.reduce((sum, val, i) => sum + val * (vecB[i] || 0), 0)
}
