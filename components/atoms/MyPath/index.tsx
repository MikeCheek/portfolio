import * as React from "react"
import styles from "./index.module.scss"
import GlassCard from "@atoms/GlassCard"

export default function MyPath(): React.JSX.Element {
  const events = [
    {
      title: "AI Engineer @ Reply - Concept Engineering",
      date: "2026 - Present",
      description: "Turin, Italy",
    },
    {
      title: "Master's Degree in Turin",
      date: "2023 - 2025",
      description: "Master in Artificial Intelligence and Data Analytics at Politecnico di Torino",
      subEvents: [
        {
          title: "Machine Learning Engineer Intern @ A-BIME",
          date: "2025 (6 months)",
          description: "Paris, France",
        },
        {
          title: "Erasmus in Data & AI @ ESILV",
          date: "2024 - 2025",
          description: "Paris, France",
        },
      ],
    },
    {
      title: "Bachelor's Degree in Turin",
      date: "2019 - 2023",
      description: "Bachelor in Computer Engineering at Politecnico di Torino",
      subEvents: [
        {
          title: "Backend Development @ VLC2",
          date: "2022 (3 months)",
          description: "Turin, Italy",
        },
      ],
    },
    {
      title: "Born in Catania, Sicily",
      date: "2000",
    },
  ]

  return (
    <section className={styles.container} aria-label="Timeline">
      <ol className={styles.timeline}>
        {events.map((ev, idx) => (
          <li key={idx} className={styles.item}>
            <span className={styles.marker} aria-hidden="true" />
            <GlassCard className={styles.card}>
              
              <header className={styles.cardHeader}>
                <h3 className={styles.title}>{ev.title}</h3>
                <time className={styles.date}>{ev.date}</time>
              </header>
              {ev.description && <p className={styles.description}>{ev.description}</p>}

              {/* Render hierarchical sub-events if they exist */}
              {ev.subEvents && ev.subEvents.length > 0 && (
                <div className={styles.subEvents}>
                  {ev.subEvents.map((sub, subIdx) => (
                    <div key={subIdx} className={styles.subEvent}>
                      <header className={styles.subHeader}>
                        <h4 className={styles.subTitle}>{sub.title}</h4>
                        <time className={styles.subDate}>{sub.date}</time>
                      </header>
                      {sub.description && (
                        <p className={styles.subDescription}>{sub.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </GlassCard>
          </li>
        ))}
      </ol>
    </section>
  )
}