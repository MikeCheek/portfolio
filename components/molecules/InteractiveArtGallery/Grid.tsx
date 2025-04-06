import React, {useState, useEffect, useRef, useMemo} from "react"
import {Vector2} from "three"
import {useFrame} from "@react-three/fiber"
import Card from "./Card"

const Grid = () => {
  // State for grid dimensions (columns and rows) based on window size
  const [columns, setColumns] = useState(Math.floor(window.innerWidth / 100) || 1)
  const [rows, setRows] = useState(Math.floor(window.innerHeight / 100) || 1)

  // Use a ref for mouse position to avoid re-rendering each frame
  const mousePosition = useRef(new Vector2(0, 0))
  const targetMousePosition = useMemo(() => new Vector2(0, 0), [])

  useEffect(() => {
    const resize = () => {
      setColumns(Math.floor(window.innerWidth / 100) || 1)
      setRows(Math.floor(window.innerHeight / 100) || 1)
    }

    const updateMousePos = (event: MouseEvent | TouchEvent) => {
      const isMobile = event.type === "touchmove"
      const {clientX, clientY} = isMobile ? (event as TouchEvent).changedTouches[0] : (event as MouseEvent)

      const halfW = window.innerWidth * 0.5
      const halfH = window.innerHeight * 0.5
      const x = ((clientX - halfW) / window.innerWidth) * 2
      const y = -((clientY - halfH) / window.innerHeight) * 2
      targetMousePosition.set(x, y)
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", updateMousePos)
    window.addEventListener("touchmove", updateMousePos)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", updateMousePos)
      window.removeEventListener("touchmove", updateMousePos)
    }
  }, [targetMousePosition])

  // Smoothly interpolate the current mouse position towards the target position
  useFrame((_, delta) => {
    mousePosition.current.lerp(targetMousePosition, 1 - Math.pow(0.0125, delta))
  })

  // Utility to map a number from one range to another
  const mapLinear = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
    ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

  // Build an array of grid element positions
  const gridElements = []
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      const cardWidth = 0.5
      const cardHeight = 0.5
      const x = mapLinear(i, 0, columns, -columns / 2, columns / 2) + cardWidth
      const y = mapLinear(j, 0, rows, -rows / 2, rows / 2) + cardHeight
      gridElements.push({x, y})
    }
  }

  return (
    <group>
      {gridElements.map((el, index) => (
        <Card key={index} i={el.x} j={el.y} mousePositionRef={mousePosition} />
      ))}
    </group>
  )
}

export default Grid
