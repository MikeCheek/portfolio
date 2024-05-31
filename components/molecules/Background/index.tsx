import React, {useState} from "react"
import styles from "./index.module.scss"
import GameOfLife from "@atoms/GameOfLife"
import Info from "@assets/info.svg"
import {P_CATEGORY, patternToMatrix, patterns} from "@utilities/gameOfLife"

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
  const [pattern, setPattern] = useState<number[][]>()
  const [key, setKey] = useState<number>(1)

  const changeKey = () => setKey((k) => (k + 1) % 2)

  const handleSizeSelect = (index: number) => {
    setSizeIndex(index)
    changeKey()
  }

  const defaultValue = "No pattern"

  const handlePatternSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    console.log(patterns[Number(value)])
    if (value == "default") setPattern(undefined)
    else setPattern(patternToMatrix(patterns.filter((p) => p.name === value)[0]))
    changeKey()
  }

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
        <GameOfLife key={key} size={sizes[sizeIndex].value} pattern={pattern} />
      </div>
      <div className={styles.menu}>
        <p>
          Game of Life simulation{" "}
          <a title="Game of life" target="_blank" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
            <Info />
          </a>
        </p>
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
              onClick={() => handleSizeSelect(key)}
            >
              {v.key}
            </button>
          ))}
        </div>

        <select
          className={styles.patterns}
          title="Choose a pattern"
          onChange={handlePatternSelect}
          defaultValue="default"
        >
          <option value="default">{defaultValue}</option>
          {Object.values(P_CATEGORY).map((cat, key) => (
            <optgroup key={key} label={cat}>
              {patterns
                .filter((p) => p.category === cat)
                .map((p, key) => (
                  <option key={key} value={p.name}>
                    {p.name}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Index
