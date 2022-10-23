import React, {useEffect, useState} from "react"
import styles from "./index.module.scss"

const Index = () => {
  const [network, setNetwork] = useState<boolean>(true)

  useEffect(() => {
    setNetwork(window.navigator.onLine)
    window.addEventListener("online", () => setNetwork(true))
    window.addEventListener("offline", () => setNetwork(false))
  }, [])

  return (
    <div className={styles.network} onClick={() => navigator.vibrate([200, 10, 200])}>
      <svg width={10} height={10} fill={network ? "green" : "red"}>
        <circle cx="50%" cy="50%" r="5" fill="current" />
      </svg>
    </div>
  )
}

export default Index
