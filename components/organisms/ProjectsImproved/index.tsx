import React, {useContext, useEffect, useMemo, useRef, useState} from "react"
import Image from "next/image"
import {motion, AnimatePresence} from "framer-motion"
import CursorContext from "@utilities/useCursorContext"
import styles from "./index.module.scss"
import Router from "next/router"
import {Project} from "@utilities/info.types"

type SearchHit = Project & {
  matchedFields: string[]
  matchFieldLabel?: string
  matchExcerpt?: string
  queryTokens: string[]
  score: number
}

const SEARCH_FIELDS = [
  {key: "title", label: "title", weight: 5},
  {key: "description", label: "description", weight: 3},
  {key: "readme", label: "readme", weight: 4},
  {key: "technologies", label: "technologies", weight: 2},
  {key: "tools", label: "tools", weight: 2},
  {key: "category", label: "category", weight: 1},
] as const

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const tokenize = (value: string) =>
  value
    .toLowerCase()
    .split(/[^a-z0-9]+/i)
    .map((token) => token.trim())
    .filter((token) => token.length > 1)

const renderHighlightedText = (text: string, tokens: string[]) => {
  if (!tokens.length) return text

  const uniqueTokens = Array.from(new Set(tokens.map((token) => token.toLowerCase())))
  if (!uniqueTokens.length) return text

  const matcher = new RegExp(`(${uniqueTokens.map(escapeRegex).join("|")})`, "ig")
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = matcher.exec(text)) !== null) {
    const index = match.index ?? 0
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index))
    }

    nodes.push(
      <mark key={`${index}-${match[0]}`} className={styles.highlight}>
        {match[0]}
      </mark>
    )
    lastIndex = index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes.length ? nodes : text
}

const getSnippet = (text = "", tokens: string[], length = 120) => {
  const plainText = stripHtml(text)
  if (!plainText) return ""

  if (!tokens.length) return plainText.slice(0, length)

  const lowerText = plainText.toLowerCase()
  const firstMatchIndex = Math.min(
    ...tokens.map((token) => lowerText.indexOf(token.toLowerCase())).filter((index) => index >= 0)
  )

  if (!Number.isFinite(firstMatchIndex)) {
    return plainText.slice(0, length)
  }

  const start = Math.max(0, firstMatchIndex - Math.floor(length / 3))
  const end = Math.min(plainText.length, start + length)
  const prefix = start > 0 ? "…" : ""
  const suffix = end < plainText.length ? "…" : ""

  return `${prefix}${plainText.slice(start, end)}${suffix}`
}

const getMatchPhrase = (fieldLabel: string) => {
  switch (fieldLabel) {
    case "title":
      return "the title includes"
    case "description":
      return "the description mentions"
    case "readme":
      return "the readme mentions"
    case "technologies":
      return "the technologies include"
    case "tools":
      return "the tools include"
    case "category":
      return "the category is"
    default:
      return "the project mentions"
  }
}

const buildSearchHit = (project: Project, queryTokens: string[]): SearchHit | null => {
  if (!queryTokens.length) {
    return {
      ...project,
      matchedFields: [],
      queryTokens,
      score: 0,
    }
  }

  const fields = {
    title: project.title ?? "",
    description: project.description ?? "",
    readme: project.readme ?? "",
    technologies: project.technologies?.join(" ") ?? "",
    tools: project.tools?.join(" ") ?? "",
    category: Array.isArray(project.category) ? project.category.join(" ") : project.category,
  }

  const matchedFields: string[] = []
  let matchFieldLabel: string | undefined
  let matchExcerpt: string | undefined
  let score = 0

  for (const field of SEARCH_FIELDS) {
    const text = stripHtml(fields[field.key]).toLowerCase()
    if (!text) continue

    const matched = queryTokens.some((token) => text.includes(token.toLowerCase()))
    if (matched) {
      matchedFields.push(field.label)
      if (!matchFieldLabel) {
        matchFieldLabel = field.label
        matchExcerpt = getSnippet(fields[field.key], queryTokens, 110)
      }
      score += field.weight
    }
  }

  if (!score) return null

  const snippetSource =
    fields.title || fields.description || fields.readme || fields.technologies || fields.tools || fields.category

  return {
    ...project,
    matchedFields,
    matchFieldLabel,
    matchExcerpt: matchExcerpt ?? getSnippet(snippetSource, queryTokens),
    queryTokens,
    score,
  }
}

const ProjectsImproved = () => {
  const {projects} = useContext(CursorContext)

  // State for Filters
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // 1. Extract Unique Categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => (Array.isArray(p.category) ? p.category : [p.category])))),
  ]

  // 2. Filter Logic
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => {
          const cats = Array.isArray(p.category) ? p.category : [p.category]
          return cats.includes(activeFilter)
        })

  const queryTokens = tokenize(searchQuery)

  const rankedProjects = useMemo(() => {
    const withMatches = filteredProjects
      .map((project) => buildSearchHit(project, queryTokens))
      .filter((project): project is SearchHit => !!project)

    if (!queryTokens.length) return withMatches

    return withMatches.sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score
      return left.title.localeCompare(right.title)
    })
  }, [filteredProjects, queryTokens])

  const isSmallSet = rankedProjects.length < 9
  const hasSearch = queryTokens.length > 0

  return (
    <>
      <section className={styles.container}>
        {/* --- HEADER & FILTERS --- */}
        <div className={styles.header}>
          <div className={styles.searchBar}>
            <label className={styles.searchLabel} htmlFor="project-search">
              Search projects
            </label>
            <div className={styles.searchInputWrap}>
              <input
                id="project-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search title, description, readme, tools or technologies"
                className={styles.searchInput}
              />
              {searchQuery && (
                <button type="button" className={styles.clearButton} onClick={() => setSearchQuery("")}>
                  Clear
                </button>
              )}
            </div>
            {/* <p className={styles.searchSummary}>
              {hasSearch
                ? `${rankedProjects.length} relevant project${rankedProjects.length === 1 ? "" : "s"} found for “${searchQuery.trim()}”`
                : `${rankedProjects.length} project${rankedProjects.length === 1 ? "" : "s"} available`}
            </p> */}
          </div>

          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ""}`}
              >
                {cat}
                {activeFilter === cat && <motion.div layoutId="activePill" className={styles.activeBackground} />}
              </button>
            ))}
          </div>
        </div>

        {/* --- FLUID GRID --- */}
        <motion.div layout className={`${styles.gallery} ${isSmallSet ? styles.masonryLike : ""}`}>
          <AnimatePresence>
            {rankedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                searchQuery={searchQuery}
                isHovered={hoveredId === project.id}
                onHover={setHoveredId}
                isDimmed={hoveredId !== null && hoveredId !== project.id}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {hasSearch && rankedProjects.length === 0 && (
          <div className={styles.emptyState}>
            <h3>No matching projects</h3>
            <p>Try a broader keyword, or search by technology, topic, or project title.</p>
          </div>
        )}
      </section>
    </>
  )
}

const navigateTo = (path: string) => {
  Router.push(path)
}

// --- SUB-COMPONENT: CARD ---
const ProjectCard = ({project, searchQuery, isHovered, onHover, isDimmed, index}: any) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const imageSrc = Array.isArray(project.image) ? project.image[0] : project.image
  const queryTokens = tokenize(searchQuery)

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.pause()
      } else {
        // We use a promise check because play() can be interrupted
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented by browser
          })
        }
      }
    }
  }, [isHovered])

  const heights = ["300px", "450px", "350px", "500px"]
  const randomHeight = heights[index % heights.length]

  return (
    <motion.div
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: isDimmed ? 0.4 : 1, scale: 1}}
      exit={{opacity: 0, scale: 0.9}}
      transition={{duration: 0.4, ease: "easeOut"}}
      className={styles.card}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      data-expanded={isHovered}
      onClick={() => navigateTo(`/project/${project.id}`)}
      style={{height: randomHeight}}
    >
      {/* Background Media */}
      <div className={styles.mediaWrapper}>
        {project.video && (
          <video ref={videoRef} src={project.video} loop autoPlay muted playsInline className={styles.videoBg} />
        )}
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.imageBg}
          style={{opacity: project.video ? 0 : 1}} // Fade out img if video plays
        />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Content Overlay */}
      <div className={styles.content}>
        <div className={styles.topTags}>
          {/* Show first category only to keep it clean */}
          <span className={styles.categoryTag}>
            {Array.isArray(project.category) ? project.category[0] : project.category}
          </span>
        </div>

        <div className={styles.bottomInfo}>
          <motion.h3 layout="position" className={styles.title}>
            {renderHighlightedText(project.title, queryTokens)}
          </motion.h3>

          {/* Details that slide in on Hover */}
          {/* <motion.div
            className={styles.details}
            initial={false}
          >

            <div className={styles.techStack}>
              {project.technologies?.slice(0, 3).map((t: string) => (
                <span key={t} className={styles.miniTag}>{t}</span>
              ))}
            </div>

            {project.href && (
              <a href={project.href} target="_blank" rel="noreferrer" className={styles.viewBtn}>
                View Project <LinkIcon width={16} />
              </a>
            )}
          </motion.div> */}
        </div>
      </div>

      {queryTokens.length > 0 && (
        <div className={styles.searchMeta}>
          {project.matchFieldLabel && project.matchExcerpt && (
            <p className={styles.matchReason}>
              Related because {getMatchPhrase(project.matchFieldLabel)}{" "}
              {renderHighlightedText(project.matchExcerpt, queryTokens)}
            </p>
          )}
          <div className={styles.matchPills}>
            {project.matchedFields?.slice(0, 3).map((field: string) => (
              <span key={field} className={styles.matchPill}>
                {field}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default ProjectsImproved
