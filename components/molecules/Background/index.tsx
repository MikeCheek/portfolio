import React from "react"
import styles from "./index.module.scss"
import GameOfLife from "@atoms/GameOfLife"

const Index = () => {
  // const [browser, setBrowser] = useState<string>("waiting")

  // useEffect(() => {
  //   setBrowser(detectBrowser())
  // }, [])

  const keys = [
    {key: "P", action: "Pause"},
    {key: "Click", action: "Change cell state"},
    {key: "R", action: "Restart random"},
  ]

  return (
    <div className={styles.background}>
      {/* {browser === "waiting" ? null : browser === "Safari" ? (
    <Ball BallSvg={BallStill} />
  ) : (
    <Ball BallSvg={BallMoving} />
  )} */}
      <GameOfLife />
      <div className={styles.keysWrap}>
        {keys.map((v, key) => (
          <div key={key} className={styles.keyAction}>
            <b>{v.key}</b>
            <p>{v.action}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
