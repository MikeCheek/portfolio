import React, {useEffect, useState} from "react"
import Image from "next/image"
import styles from "./index.module.scss"
import ArtCard from "../../atoms/ArtCard"
import {ArtImage} from "@utilities/artImages"

const Gallery = ({images}: {images: ArtImage[]}) => {
  const [selectedImg, setSelectedImg] = useState<number>(0)
  const [imgPop, setImgPop] = useState<boolean>(false)

  const swipeImg = (moveType: string) => {
    if (moveType === "prv") {
      setSelectedImg(selectedImg === 0 ? images.length - 1 : selectedImg - 1)
    }
    if (moveType === "nxt") {
      setSelectedImg(selectedImg === images.length - 1 ? 0 : selectedImg + 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        swipeImg("prv")
      } else if (event.key === "ArrowRight") {
        swipeImg("nxt")
      } else if (event.key === "Escape") {
        setImgPop(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImg])

  const handlePopupImageClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const target = e.target as HTMLElement
    const rect = target.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top

    if (target.style.transform === "scale(1)" || target.style.transform === "") {
      target.style.transformOrigin = `${clickX}px ${clickY}px`
      target.style.transform = "scale(2)"
      target.style.cursor = "zoom-out"
    } else {
      target.style.transform = "scale(1)"
      target.style.cursor = "zoom-in"
    }
  }

  return (
    <>
      <div className={styles.galleryWrapper}>
        {images.map((loc, key) => (
          <ArtCard key={key} keyIndex={key} loc={loc} setSelectedImg={setSelectedImg} setImgPop={setImgPop} />
        ))}
      </div>

      {imgPop && (
        <div className={styles.imagePopup}>
          <div className={styles.overlay} onClick={() => setImgPop(false)}></div>
          <a onClick={() => setImgPop(false)} className={styles.closeButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                d="m100.3,90.4l-26.4-26.4,26.3-26.4c.4-.4.4-1,0-1.4l-8.5-8.5c-.4-.4-1-.4-1.4,0l-26.3,26.4-26.3-26.3c-.4-.4-1-.4-1.4,0l-8.5,8.5c-.4.4-.4,1,0,1.4l26.2,26.3-26.3,26.3c-.4.4-.4,1,0,1.4l8.5,8.5c.4.4,1.1.4,1.4,0l26.4-26.3,26.3,26.3c.4.4,1.1.4,1.5.1l8.5-8.5c.4-.4.4-1,0-1.4Z"
                fill="var(--pink)"
              />
            </svg>
          </a>

          <a onClick={() => swipeImg("prv")} className={styles.arrow}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.leftArrow}
            >
              <path
                clipRule="evenodd"
                d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <div className={styles.imageContainer}>
            <div key={selectedImg} className={styles.fadeIn}>
              <Image
                src={images[selectedImg].img}
                alt={images[selectedImg].title}
                width={650}
                height={500}
                quality={100}
                className={styles.popupImage}
                onClick={handlePopupImageClick}
                style={{transition: "transform 0.3s ease", cursor: "zoom-in"}}
              />
            </div>
            <h3 className={styles.popupTitle}>{images[selectedImg].title}</h3>
            {images[selectedImg].date && <p className={styles.popupDate}>{images[selectedImg].date}</p>}
          </div>

          <a onClick={() => swipeImg("nxt")} className={styles.arrow}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.rightArrow}
            >
              <path
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
      )}
    </>
  )
}

export default Gallery
