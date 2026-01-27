import fs from "fs"
import {pipeline} from "@xenova/transformers"

// 1. Setup
const PROJECTS_PATH = "./utilities/projects.json"
const OUTPUT_PATH = "./utilities/projects-with-embeddings.json"

async function generate() {
  console.log("🚀 Starting Embedding Generation...")

  /**
   * LAYER 1: DATA SANITIZATION
   * Stringifying the list immediately "kills" the live binary imports
   * that cause the SyntaxError (PNG/SVG/SCSS).
   */
  const projects = JSON.parse(fs.readFileSync(PROJECTS_PATH, "utf-8"))

  const extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2")
  const results = []

  for (const project of projects) {
    console.log(`📦 Processing: ${project.title}`)

    // LAYER 2: CLEANING TEXT FOR ML
    // Removing HTML and extra whitespace for better vector accuracy
    const cleanDescription = project.description.replace(/<[^>]*>?/gm, "")
    const content = `
      ${project.title} 
      ${cleanDescription} 
      ${(project.technologies || []).join(" ")}
    `
      .toLowerCase()
      .trim()

    // LAYER 3: INFERENCE
    const output = await extractor(content, {pooling: "mean", normalize: true})
    const embedding = Array.from(output.data)

    // Save the original sanitized project data + the new embedding
    results.push({
      ...project,
      embedding: embedding, // 384-dimension vector
    })
  }

  // LAYER 4: PERSISTENCE
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2))
  console.log(`\n✅ Success! Semantic data saved to ${OUTPUT_PATH}`)
}

generate().catch((err) => {
  console.error("❌ Generation failed:", err)
  process.exit(1)
})
