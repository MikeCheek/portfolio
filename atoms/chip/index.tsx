import React, {useEffect, useState} from "react"
import styles from "./index.module.scss"
import ChipProps from "./index.types"

const Index = ({text, orange = false}: ChipProps) => {
  const [opacity, setOpacity] = useState<number>(0)
  const [timer, setTimer] = useState<number>(1700)

  const increment = () => {
    setOpacity((curr) => (curr > 1 ? curr : curr + 0.1))
  }

  const decrement = () => {
    setOpacity((curr) => (curr < 0 ? curr : curr - 0.05))
  }

  const handleMouseEnter = () => increment()

  useEffect(() => {
    if (opacity >= 0) {
      setTimer(8000)
      setTimeout(() => setTimer(1700), 8000)
    }
    setTimeout(decrement, timer)
    console.log("runned")
  }, [opacity])

  return (
    <div
      className={orange ? styles.wrapOrange : styles.wrap}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
    >
      <div className={orange ? styles.backgroundOrange : styles.background} style={{opacity: opacity}}>
        {text}
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Index
