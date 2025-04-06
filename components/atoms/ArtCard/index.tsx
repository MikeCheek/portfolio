import React from "react"
import Image from "next/image"
import styles from "./index.module.scss"
import {ArtImage} from "@utilities/artImages"

interface ArtCardProps {
  keyIndex: number
  loc: ArtImage
  setSelectedImg: (key: number) => void
  setImgPop: (value: boolean) => void
  active?: boolean
}

const Index: React.FC<ArtCardProps> = ({keyIndex, loc, setSelectedImg, setImgPop, active = false}) => {
  return (
    <a
      className={(keyIndex * 7 * 2) % 3 === 0 ? styles.galleryItemWide : styles.galleryItem}
      style={{
        height: `${(keyIndex * 7 * 2) % 4 === 0 ? 350 : 400}px`,
        animationDelay: `${keyIndex * 0.1}s`,
      }}
      onClick={() => {
        setSelectedImg(keyIndex)
        setImgPop(true)
      }}
    >
      <Image
        src={loc.img}
        alt={loc.title}
        quality={90}
        width={300}
        height={300}
        className={`${styles.galleryImage} ${active ? styles.galleryImageActive : ""}`}
      />
      <div className={`${styles.hoverText} ${active ? styles.hoverTextActive : ""}`}>
        <p>{loc.title}</p>
        {loc.date ? <p className={styles.date}>{loc.date}</p> : <></>}
      </div>
    </a>
  )
}

export default Index
