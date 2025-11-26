import React from "react"
import styles from "./index.module.scss"

type ShapeType = "circle" | "rounded" | "triangle" | "blob"
type Shape = {
  left: number
  top: number
  size: number
  delay: number
  duration: number
  color: string
  type: ShapeType
}

const count = 14
const colors = ["var(--violet)", "var(--transparent-pink)", "var(--green)", "var(--blue)", "var(--transparent-orange)"]

function generateShapes(): Shape[] {
  return Array.from({length: count}).map(() => {
    const typeRoll = Math.random()
    const type: ShapeType =
      typeRoll < 0.25 ? "circle" : typeRoll < 0.6 ? "rounded" : typeRoll < 0.85 ? "triangle" : "blob"
    return {
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 24 + Math.random() * 160,
      delay: Math.random() * 12,
      duration: 3 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      type,
    }
  })
}

// Generate once on the server so server HTML contains the deterministic values.
// On the client this will be undefined; the component will read the serialized
// shapes from the DOM during initialization so hydration matches the server HTML.
let serverShapes: Shape[] | null = null
if (typeof window === "undefined") {
  serverShapes = generateShapes()
}

const Index = () => {
  // initialize shapes from serverShapes (SSR) or from the DOM attribute (hydration).
  const [shapes] = React.useState<Shape[]>(() => {
    if (serverShapes) return serverShapes

    // On client during hydration, the server rendered container will include
    // the data-shapes attribute with the JSON we emitted below.
    if (typeof document !== "undefined") {
      const el = document.getElementById("decorations-shapes")
      if (el && el.dataset.shapes) {
        try {
          return JSON.parse(el.dataset.shapes) as Shape[]
        } catch {
          // fall through to generating new shapes
        }
      }
    }

    // No server data available (client-only render) — generate locally.
    return generateShapes()
  })

  // For SSR we serialize serverShapes (which equals shapes).
  // For pure client render serverShapes will be null and we serialize shapes.
  const serialized = JSON.stringify(serverShapes ?? shapes)

  return (
    <div id="decorations-shapes" className={styles.decorations} aria-hidden data-shapes={serialized}>
      {shapes.map((s, i) => {
        const size = Math.max(8, Math.round(s.size))
        const commonStyle: React.CSSProperties = {
          left: `${s.left}%`,
          top: `${s.top}%`,
          width: `${size}px`,
          height: `${size}px`,
          position: "absolute",
          animationDelay: `${s.delay}s`,
          animationDuration: `${s.duration}s`,
          transformOrigin: "center",
          pointerEvents: "none",
        }

        const strokeProps = {
          fill: "none",
          stroke: s.color,
          strokeWidth: 2,
          vectorEffect: "non-scaling-stroke" as any,
          strokeLinecap: "round" as any,
          strokeLinejoin: "round" as any,
        }

        if (s.type === "circle") {
          const r = size / 2 - 1
          return (
            <svg key={i} className={styles.shape} style={commonStyle} viewBox={`0 0 ${size} ${size}`}>
              <circle cx={size / 2} cy={size / 2} r={r} {...strokeProps} />
            </svg>
          )
        }

        if (s.type === "rounded") {
          const rx = Math.min(24, size / 4)
          return (
            <svg key={i} className={styles.shape} style={commonStyle} viewBox={`0 0 ${size} ${size}`}>
              <rect x={1} y={1} width={size - 2} height={size - 2} rx={rx} ry={rx} {...strokeProps} />
            </svg>
          )
        }

        if (s.type === "triangle") {
          const points = `${size / 2},2 ${size - 2},${size - 2} 2,${size - 2}`
          return (
            <svg key={i} className={styles.shape} style={commonStyle} viewBox={`0 0 ${size} ${size}`}>
              <polygon points={points} {...strokeProps} />
            </svg>
          )
        }

        const jitter = ((i * 97) % 21) - 10
        const rx = Math.max(4, (size / 2) * (0.7 + jitter / 100))
        const ry = Math.max(4, (size / 2) * (0.9 - jitter / 200))
        return (
          <svg key={i} className={styles.shape} style={commonStyle} viewBox={`0 0 ${size} ${size}`}>
            <ellipse
              cx={size / 2}
              cy={size / 2}
              rx={rx}
              ry={ry}
              transform={`rotate(${jitter}, ${size / 2}, ${size / 2})`}
              {...strokeProps}
            />
          </svg>
        )
      })}
    </div>
  )
}

export default Index
