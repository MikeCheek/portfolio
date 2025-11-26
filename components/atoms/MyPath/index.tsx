import * as React from "react"
import styles from "./index.module.scss"
import GlassCard from "@atoms/GlassCard"

export default function MyPath(): React.JSX.Element {
  const events = [
    {
      title: "Born in Catania, Sicily",
      date: "2000",
      // description: "Lived in Acireale",
    },
    {
      title: "Bachelor's Degree in Turin",
      date: "2019 - 2023",
      description: "Bachelor in Computer Engineering at Politecnico di Torino",
    },
    {
      title: "Master's Degree in Turin",
      date: "2023 - 2025",
      description: "Master in Artificial Intelligence and Data Analytics at Politecnico di Torino",
    },
    {
      title: "Erasmus in Paris",
      date: "2024 - 2025",
      description: "One-year Erasmus in Data & AI at ESILV",
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
              <p className={styles.description}>{ev.description}</p>
            </GlassCard>
          </li>
        ))}
      </ol>
    </section>
  )
}
