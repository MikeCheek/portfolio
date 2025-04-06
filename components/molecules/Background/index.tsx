import React, {useState} from "react"
import styles from "./index.module.scss"
import Info from "@assets/info.svg"
import {P_CATEGORY, patternToMatrix, patterns} from "@utilities/gameOfLife"
import dynamic from "next/dynamic"

const GameOfLife = dynamic(import("@atoms/GameOfLife"), {ssr: false})

const keys = [
  {key: "P", action: "Pause"},
  {key: "Click", action: "Change cell state"},
  {key: "R", action: "Restart"},
]

const sizes = [
  {key: "XSmall", value: 5, warning: true},
  {key: "Small", value: 10, warning: true},
  {key: "Medium", value: 20},
  {key: "Large", value: 30},
]

const speeds = [
  {key: "Slow", value: 1},
  {key: "Normal", value: 10},
  {key: "Fast", value: 100},
  {key: "Turbo", value: 1000, warning: true},
]

const Index = () => {
  // const [browser, setBrowser] = useState<string>("waiting")
  const [sizeIndex, setSizeIndex] = useState<number>(2)
  const [pattern, setPattern] = useState<number[][]>()
  const [key, setKey] = useState<number>(1)
  const [speed, setSpeed] = useState<number>(1)
  const [full, setFull] = useState<boolean>(false)

  const changeKey = () => setKey((k) => (k + 1) % 2)

  const handleSizeSelect = (index: number) => {
    setSizeIndex(index)
    changeKey()
  }

  const handleSpeedSelect = (index: number) => {
    setSpeed(index)
    changeKey()
  }

  const defaultValue = "No pattern"

  const handlePatternSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    if (value == "default") setPattern(undefined)
    else setPattern(patternToMatrix(patterns.filter((p) => p.name === value)[0]))
    changeKey()
  }

  return (
    <div className={styles.background} style={full ? {zIndex: 99999} : {}}>
      <div className={styles.gol}>
        <GameOfLife key={key} size={sizes[sizeIndex].value} pattern={pattern} speed={speeds[speed].value} />
      </div>
      <div className={styles.menu}>
        <p style={{cursor: "pointer"}}>
          Game of Life simulation <span className={styles.arrowDown}>&gt;</span>
        </p>
        <div className={styles.options}>
          {keys.map((v, key) => (
            <div key={key} className={styles.keyAction}>
              <b>{v.key}</b>
              <p>{v.action}</p>
            </div>
          ))}
          <div className={styles.wrapSizes}>
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
          </div>
          <div className={styles.wrapSizes}>
            <p>Speed</p>
            <div className={styles.sizes}>
              {speeds.map((v, key) => (
                <button
                  key={key}
                  className={`${key === speed ? styles.buttonActive : styles.button} ${
                    v.warning ? styles.warning : ""
                  }`}
                  onClick={() => handleSpeedSelect(key)}
                >
                  {v.key}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.wrapSizes}>
            <p>Pattern</p>
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
          <p onClick={() => setFull((f) => !f)}>Fullscreen</p>
        </div>
        <a title="Game of life" target="_blank" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          <Info />
        </a>
      </div>
    </div>
  )
}

export default Index
