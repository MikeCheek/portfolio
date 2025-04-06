import React, {useEffect, useRef} from "react"
import styles from "./index.module.scss"

import Arrow from "@assets/arrowUp.svg"

const Index = () => {
  const ref = useRef<HTMLDivElement>(null)

  let prevScrollpos = 0
  let currentScrollPos: number

  const setListener = () => {
    window.addEventListener("scroll", handleScroll, {passive: true})
  }

  const removeListener = () => {
    window.removeEventListener("scroll", () => {})
  }

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      currentScrollPos = window.pageYOffset
      const arrow = ref.current
      if (arrow) {
        if (currentScrollPos >= 200 && currentScrollPos < prevScrollpos) {
          arrow.style.transform = "translateY(-500px)"
        } else {
          arrow.style.removeProperty("transform")
        }
      }
      prevScrollpos = currentScrollPos
    }
  }

  useEffect(() => {
    setListener()
    return removeListener
  }, [])

  return (
    <div
      className={styles.arrowUp}
      title={"Go to top"}
      ref={ref}
      onClick={() => {
        window.scroll(0, 0)
      }}
    >
      <Arrow width={"50px"} height={"50px"} />
    </div>
  )
}

export default Index
