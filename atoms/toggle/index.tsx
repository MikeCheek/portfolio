import React, {useEffect, useState} from "react"
import styles from "./index.module.scss"

const Toggle = () => {
  const [activeTheme, setActiveTheme] = useState("dark")
  const inactiveTheme = activeTheme === "light" ? "dark" : "light"

  useEffect(() => {
    document.body.dataset.theme = activeTheme
  }, [activeTheme])

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setActiveTheme(inactiveTheme)} className={styles.toggle}></button>
    </div>
  )
}

export default Toggle
