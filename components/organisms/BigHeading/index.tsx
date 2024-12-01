import React from "react"
import GoDown from "@molecules/GoDown"
import HoverPopUp from "@molecules/HoverPopUp"
import styles from "./index.module.scss"

const Index = () => {
  return (
    <nav className={styles.heading}>
      <h1>
        Hi, I&apos;m{" "}
        <HoverPopUp href="#about" down>
          <span title="" className={styles.colored}>
            Michele Pulvirenti
          </span>
          <span>Discover my background!</span>
        </HoverPopUp>
      </h1>
      <h2>
        a Computer Engineer <br /> who likes{" "}
        <HoverPopUp href="#projects" down>
          <span title="" className={styles.colored}>
            developing
          </span>
          <span>View my projects!</span>
        </HoverPopUp>{" "}
        things
      </h2>
      {/*<Circles number={5} />*/}
      <GoDown />
    </nav>
  )
}

export default Index
