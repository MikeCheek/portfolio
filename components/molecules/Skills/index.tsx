import React, {useCallback, useContext, useState} from "react"
import {useInView} from "react-intersection-observer"
import Skill from "@atoms/Skill"

import styles from "./index.module.scss"
import CursorContext from "@utilities/useCursorContext"

const Index = () => {
  const [degree, setDegree] = useState<number>(45)
  let touchX: number
  let mouseDown = false

  const [ref, inView, _entry] = useInView({
    threshold: 0,
    fallbackInView: true,
    rootMargin: "-35% 0px -35% 0px",
  })

  const {projects} = useContext(CursorContext)

  const data = (() => {
    const counts = new Map<string, number>()

    projects.forEach((project) => {
      const techs = project.technologies ?? []
      const list = Array.isArray(techs) ? techs.flat() : [String(techs)]
      list.forEach((skill) => {
        counts.set(skill, (counts.get(skill) ?? 0) + 1)
      })
    })

    return Array.from(counts.entries())
      .sort((a, b) => {
        const aMulti = a[1] > 1 ? 1 : 0
        const bMulti = b[1] > 1 ? 1 : 0
        if (aMulti !== bMulti) return bMulti - aMulti // multi-occurrence first
        if (a[1] !== b[1]) return b[1] - a[1] // then by count desc
        return a[0].localeCompare(b[0]) // then alphabetically
      })
      .map(([name]) => ({name, link: ""}))
  })()

  const degreeConverter = (degree: number): [number, number] => {
    return [Math.cos(degree), Math.sin(degree)]
  }

  const calculate = useCallback(
    (mult: number) => {
      const expand = mult * 2 * (mult < 3 ? 2.5 : 1)
      let [x, y] = degreeConverter(degree * mult)
      x = x * expand
      y = y * expand
      const max = 30
      x = x > max ? max : x < -max ? -max : x
      y = y > max ? max : y < -max ? -max : y
      return [x, y]
    },
    [degree]
  )

  const handleTwoTouch = (touches: TouchList) => {
    const touchPositionX = touches[0]?.clientX
    setDegree((d) => d + Number(touchPositionX - touchX))
    touchX = touchPositionX
  }

  const handleTouchEnd = () => window.removeEventListener("touchstart", () => {})

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touches = e.nativeEvent.touches
    window.addEventListener(
      "touchstart",
      (event) => {
        if (event.touches.length > 1) event.preventDefault()
      },
      {passive: true}
    )
    switch (touches.length) {
      case 2: {
        e.preventDefault()
        touchX = touches[0].clientX
        break
      }
      default:
        break
    }
  }

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const touches = e.nativeEvent.touches

    switch (touches.length) {
      case 2: {
        e.preventDefault()
        handleTwoTouch(touches)
        break
      }
      default:
        break
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    touchX = e.clientX
    mouseDown = true
  }

  const handleMouseUp = () => (mouseDown = false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseDown) {
      setDegree((d) => d + Number(e.clientX - touchX))
      touchX = e.clientX
    }
  }

  return (
    <div className={styles.wrap} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div
        className={styles.skills}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouch}
        onTouchEnd={handleTouchEnd}
        ref={ref}
      >
        {data.map((item, key) => {
          return (
            <span
              key={key}
              className={styles.skillWrap}
              style={
                inView
                  ? {
                      transform: `translate(${calculate(key + 1)[0]}vw,${calculate(key + 1)[1]}vh)`,
                      // fontSize: `${1.7 - key / 17}rem`,
                      zIndex: data.length - key,
                      transitionDelay: `${key / 30}s`,
                    }
                  : {}
              }
            >
              <Skill
                name={item.name}
                link={item.link}
                style={inView ? {transform: "scale(1)", transitionDelay: `${key / 30}s`} : {transform: "scale(0)"}}
                color={
                  key % 4 == 3
                    ? "var(--pink)"
                    : key % 4 == 2
                    ? "var(--violet)"
                    : key % 4 == 1
                    ? "var(--orange)"
                    : "var(--blue)"
                }
              />
            </span>
          )
        })}
      </div>
      <p className={styles.neutral}>Some skills are hidden from the others?</p>
      <p className={styles.hintMobile}>Use 2 fingers and see the magic!</p>{" "}
      <p className={styles.hint}>Drag on empty space and see the magic!</p>
    </div>
  )
}

export default Index
