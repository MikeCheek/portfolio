import React, {useEffect, useState} from "react"
import styles from "./index.module.scss"

const Index = () => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    window.addEventListener("scroll", updateProgress, {passive: true})
    return () => window.removeEventListener("scroll", () => {})
  }, [])

  const updateProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setProgress((winScroll / height) * 100)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const width = document.documentElement.clientWidth
    const pos = e.clientX
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    window.scrollTo(0, height * (pos / width))
  }

  return (
    <div className={styles.wrap} onClick={handleClick}>
      <div className={styles.bar} style={{transform: `translateX(-${100 - progress}%)`}}></div>
    </div>
  )
}

export default Index
