import React, {useState} from "react"
import {SectionProps} from "./index.types"
import styles from "./index.module.scss"

import sleep from "../../utilities/sleep"
// import {useInView} from 'react-intersection-observer'

const Index = ({title, children, id, reversed = false, Svg, paragraph = false, Model3d}: SectionProps): JSX.Element => {
  // const [ref, inView, _entry] = useInView({
  //   threshold: 0,
  //   fallbackInView: true,
  //   rootMargin: '-10px 0px -10px 0px',
  // })

  const [isClicked, setIsClicked] = useState<boolean>(false)

  const setClicked = async () => {
    if (!isClicked) {
      setIsClicked(true)
      await sleep(3000)
      setIsClicked(false)
    }
  }

  return (
    <div className={`${reversed ? styles.sectionReversed : styles.section}`} id={id ?? title}>
      {paragraph ? (
        <>
          <h2 className={styles.titleParagraph}>{title}</h2>
          <div className={styles.contentParagraph}>
            {Svg ? (
              <div className={styles.svg} onClick={setClicked} onMouseDown={setClicked}>
                <Svg.svg
                  width={"100px"}
                  height={"100px"}
                  className={isClicked ? styles.move : ""}
                  fill={Svg.fill ?? "none"}
                  stroke={Svg.stroke ?? "none"}
                />
              </div>
            ) : Model3d ? (
              <div className={styles.model}>{Model3d}</div>
            ) : null}
            <div className={styles.childrenParagraph}>{children}</div>
          </div>
        </>
      ) : (
        <>
          <h2 className={`${reversed ? styles.titleReversed : styles.title}`}>{title}</h2>
          <div className={reversed ? styles.contentReversed : styles.content}>
            {Svg ? (
              <div className={styles.svg} onClick={setClicked} onMouseDown={setClicked}>
                <Svg.svg
                  width={"100px"}
                  height={"100px"}
                  className={isClicked ? styles.jump : ""}
                  fill={Svg.fill ?? "none"}
                  stroke={Svg.stroke ?? "none"}
                />
              </div>
            ) : Model3d ? (
              <div className={styles.model}>{Model3d}</div>
            ) : null}
            <div className={styles.children}>{children}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default Index
