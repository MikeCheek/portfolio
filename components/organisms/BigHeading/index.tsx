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
        As a{" "}
        <HoverPopUp href="#skills">
          <span title="" className={styles.colored}>
            developer
          </span>
          <span>See my skills!</span>
        </HoverPopUp>{" "}
        <br />I currently{" "}
        <HoverPopUp href="#projects" down>
          <span title="" className={styles.colored}>
            work
          </span>
          <span>Look at my projects!</span>
        </HoverPopUp>{" "}
        on the web
      </h2>
      {/*<Circles number={5} />*/}
      <GoDown />
    </nav>
  )
}

export default Index
