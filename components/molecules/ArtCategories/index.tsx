import ArtCard from "@atoms/ArtCard"
import React from "react"
import styles from "./index.module.scss"
import {useRouter} from "next/router"
import {categories} from "@utilities/artImages"

const Index = ({randNum}: {randNum: number}) => {
  const router = useRouter()

  return (
    <div className={styles.wrap}>
      <h1 className="artTitle">Categories</h1>
      <div className={styles.categories}>
        {categories.map((cat, index) => (
          <ArtCard
            active
            keyIndex={0}
            key={index}
            loc={{img: cat.logo(randNum), title: cat.name}}
            setSelectedImg={() => {}}
            setImgPop={() => {}}
            link={categories[index].link}
          />
        ))}
      </div>
    </div>
  )
}

export default Index
