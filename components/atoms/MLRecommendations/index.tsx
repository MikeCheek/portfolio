import React from "react"
import Image from "next/image"
import styles from "./index.module.scss"
import Link from "next/link"
import {Project} from "@utilities/info.types"

const Index = ({recommendations}: {recommendations: Project[]}) => {
  return (
    <section className={styles.recommendationsSection}>
      <div className={styles.titleContainer}>
        <h3 className={styles.recTitle}>ML-Powered Suggestions</h3>

        {/* Info Icon & Tooltip */}
        <div className={styles.infoWrapper}>
          <span className={styles.infoIcon}>i</span>
          <div className={styles.tooltip}>
            <p>
              <strong>How it works:</strong>
            </p>
            <p>
              I use a <strong>MiniLM-L6 transformer model</strong> to turn project descriptions into mathematical
              vectors.
            </p>
            <p>
              By calculating the <strong>Cosine Similarity</strong> between these vectors, the model identifies
              semantically related work.
            </p>
          </div>
        </div>
      </div>

      {recommendations.length === 0 ? (
        <p className={styles.loadingText}>Analyzing project similarities...</p>
      ) : (
        <div className={styles.recGrid}>
          {recommendations.map((rec) => (
            <Link key={rec.id} href={`/project/${rec.id}`} className={styles.recCard}>
              <div className={styles.recImageWrapper}>
                <Image
                  src={Array.isArray(rec.image) ? rec.image[0] : rec.image}
                  alt={rec.title}
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <h4>{rec.title}</h4>
              {Array.isArray(rec.category) ? (
                <p className={styles.tag}>{rec.category[0]}</p>
              ) : (
                <p className={styles.tag}>{rec.category}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default Index
