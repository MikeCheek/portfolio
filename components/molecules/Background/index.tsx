import React, {useState} from "react"
import styles from "./index.module.scss"
import GameOfLife from "@atoms/GameOfLife"

const keys = [
  {key: "P", action: "Pause"},
  {key: "Click", action: "Change cell state"},
  {key: "R", action: "Restart random"},
]

const sizes = [
  {key: "XSmall", value: 5, warning: true},
  {key: "Small", value: 10, warning: true},
  {key: "Medium", value: 20},
  {key: "Large", value: 30},
]

const Index = () => {
  // const [browser, setBrowser] = useState<string>("waiting")
  const [sizeIndex, setSizeIndex] = useState<number>(2)

  // useEffect(() => {
  //   setBrowser(detectBrowser())
  // }, [])

  return (
    <div className={styles.background}>
      {/* {browser === "waiting" ? null : browser === "Safari" ? (
    <Ball BallSvg={BallStill} />
  ) : (
    <Ball BallSvg={BallMoving} />
  )} */}
      <div className={styles.gol}>
        <GameOfLife key={sizeIndex} size={sizes[sizeIndex].value} />
      </div>
      <div className={styles.menu}>
        <p>Game of Life simulation</p>
        {keys.map((v, key) => (
          <div key={key} className={styles.keyAction}>
            <b>{v.key}</b>
            <p>{v.action}</p>
          </div>
        ))}

        <p>Cell size</p>
        <div className={styles.sizes}>
          {sizes.map((v, key) => (
            <button
              key={key}
              className={`${key === sizeIndex ? styles.buttonActive : styles.button} ${
                v.warning ? styles.warning : ""
              }`}
              onClick={() => setSizeIndex(key)}
            >
              {v.key}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
