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
          <span title="" className={"coloredGradient"}>
            Michele Pulvirenti
          </span>
          <span>Discover who I am!</span>
        </HoverPopUp>
      </h1>
      <h2>
        an{" "}
        <HoverPopUp href="#projects">
          <span title="" className={"coloredGradient"}>
            AI Engineer
          </span>
          <span>View my projects!</span>
        </HoverPopUp>{" "}
        <br />
        focused on Edge Computer Vision &amp; AI Agents
      </h2>
      {/*<Circles number={5} />*/}
      <GoDown />
    </nav>
  )
}

export default Index