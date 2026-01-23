import React, {useEffect, useRef, useState} from "react"
import styles from "./index.module.scss"

import Arrow from "@assets/arrowUp.svg"

const Index = () => {
  const ref = useRef<HTMLDivElement>(null)
  // 1. New state to trigger the rocket effect
  const [isRocket, setIsRocket] = useState(false)
  const [mounted, setMounted] = useState(false)

  let prevScrollpos = 0
  let currentScrollPos: number

  // Note: The original removeListener did not remove the correct handler.
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      currentScrollPos = window.pageYOffset
      const arrow = ref.current
      if (arrow) {
        // Only show arrow if scroll position is 200px or more AND we are scrolling UP
        if (currentScrollPos >= 200 && currentScrollPos < prevScrollpos) {
          arrow.style.transform = "translateY(0)" // Move back to visible position
          arrow.style.opacity = "1"
        } else {
          // Hide it or move it down (original behavior)
          arrow.style.transform = "translateY(150px)"
          arrow.style.opacity = "0"
        }
      }
      prevScrollpos = currentScrollPos
    }
  }

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setIsRocket((curr) => !curr)
    }, 1000)

    // Correctly reference the handleScroll function for removal
    const setListener = () => {
      window.addEventListener("scroll", handleScroll, {passive: true})
    }

    const removeListener = () => {
      window.removeEventListener("scroll", handleScroll)
    }

    setListener()
    return () => {
      removeListener()
      clearInterval(interval)
    }
  }, [])

  const handleClick = () => {
    // 2. Trigger the rocket animation state
    setIsRocket(true)

    // Scroll to top
    window.scroll(0, 0)

    // 3. Turn off the rocket state after the animation finishes (e.g., 500ms)
    // This allows the animation to be re-triggered later.
    const timer = setTimeout(() => {
      setIsRocket(false)
    }, 500)

    return () => clearTimeout(timer)
  }

  // Helper component for the exhaust lines
  const ExhaustTrail = ({startRandom}: {startRandom?: boolean}) => (
    <div className={styles.exhaustContainer} style={startRandom ? {animationIterationCount: "infinite"} : {}}>
      <div
        className={`${styles.exhaustLine} ${styles.line1}`}
        style={
          startRandom
            ? {
                animationIterationCount: "infinite",
                animationDelay: `${(Math.random() * 0.6 + 0.0).toFixed(2)}s`,
              }
            : {}
        }
      ></div>
      <div
        className={`${styles.exhaustLine} ${styles.line2}`}
        style={
          startRandom
            ? {
                animationIterationCount: "infinite",
                animationDelay: `${(Math.random() * 0.6 + 0.2).toFixed(2)}s`,
              }
            : {}
        }
      ></div>
      <div
        className={`${styles.exhaustLine} ${styles.line3}`}
        style={
          startRandom
            ? {
                animationIterationCount: "infinite",
                animationDelay: `${(Math.random() * 0.6 + 0.4).toFixed(2)}s`,
              }
            : {}
        }
      ></div>
    </div>
  )

  return (
    <div
      // Add the isRocket class to trigger the animation on the main container
      className={`${styles.arrowUp} ${isRocket ? styles.rocketActive : ""}`}
      title={"Go to top"}
      ref={ref}
      onClick={handleClick}
    >
      {/* 4. Conditionally render the exhaust lines */}
      {isRocket ? <ExhaustTrail /> : <></>}
      {mounted && <ExhaustTrail startRandom />}
      <Arrow width={"50px"} height={"50px"} />
    </div>
  )
}

export default Index
