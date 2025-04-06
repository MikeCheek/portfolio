import React, {useEffect, useState} from "react"
import dynamic from "next/dynamic"
import p5Types from "p5"
import GameOfLifeProps from "./index.types"

const Index = ({size, pattern, speed = 10}: GameOfLifeProps) => {
  const [Sketch, setSketch] = useState<any>(null)

  useEffect(() => {
    import("react-p5").then((mod) => {
      setSketch(() => mod.default)
    })
  }, [])

  if (!Sketch) return <></>

  let columns: number
  let rows: number
  let board: number[][]
  let next: number[][]
  let paused = false

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.frameRate(speed)
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
    p5.noStroke() // Disable strokes for faster drawing
    p5.rectMode(p5.CORNER)

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight)
        // Recalculate columns and rows on resize
        columns = p5.floor(p5.width / size)
        rows = p5.floor(p5.height / size)
        // Reinitialize the board on resize (if desired)
        init(p5)
      }, 100)
    }
    window.addEventListener("resize", handleResize)

    columns = p5.floor(p5.width / size)
    rows = p5.floor(p5.height / size)

    // Initialize 2D arrays
    board = new Array(columns)
    next = new Array(columns)
    for (let i = 0; i < columns; i++) {
      board[i] = new Array(rows)
      next[i] = new Array(rows)
    }
    init(p5)
  }

  const draw = (p5: p5Types) => {
    p5.background(0)
    if (!paused) generate()

    // Only draw live cells to reduce drawing calls.
    p5.fill(70)
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (board[i][j] === 1) {
          p5.rect(i * size, j * size, size - 1, size - 1)
        }
      }
    }
  }

  const keyPressed = (p5: p5Types) => {
    if (p5.keyCode === 82) {
      // R key to reinitialize
      init(p5)
    }
    if (p5.keyCode === 80 || p5.keyCode === 32) {
      // P or Space to toggle pause
      paused = !paused
    }
  }

  const mousePressed = (p5: p5Types) => {
    if (board && p5.mouseX <= p5.width && p5.mouseY <= p5.height) {
      const cellX = p5.floor(p5.mouseX / size)
      const cellY = p5.floor(p5.mouseY / size)
      if (board[cellX]) board[cellX][cellY] = (board[cellX][cellY] - 1) * -1
    }
  }

  const init = (p5: p5Types) => {
    const center = {i: columns / 2, j: rows / 2}
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // Border cells set to 0
        if (i === 0 || j === 0 || i === columns - 1 || j === rows - 1) {
          board[i][j] = 0
        }
        // If no pattern is provided, randomly initialize
        else if (!pattern) {
          board[i][j] = p5.floor(p5.random(2))
        }
        // Otherwise, initialize based on the provided pattern centered on the canvas
        else {
          board[i][j] = 0
          const start = {
            i: Math.floor(center.i - pattern[0].length / 2),
            j: Math.floor(center.j - pattern.length / 2),
          }
          if (pattern[j - start.j] && pattern[j - start.j][i - start.i]) {
            board[i][j] = pattern[j - start.j][i - start.i]
          }
        }
        next[i][j] = 0
      }
    }
  }

  const generate = () => {
    // Update the board for Conway's Game of Life.
    for (let x = 1; x < columns - 1; x++) {
      for (let y = 1; y < rows - 1; y++) {
        let neighbors = 0
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            neighbors += board[x + i][y + j]
          }
        }
        neighbors -= board[x][y]

        // Apply the rules of Life
        if (board[x][y] === 1 && neighbors < 2) next[x][y] = 0
        else if (board[x][y] === 1 && neighbors > 3) next[x][y] = 0
        else if (board[x][y] === 0 && neighbors === 3) next[x][y] = 1
        else next[x][y] = board[x][y]
      }
    }
    // Swap boards by reassigning references.
    let temp = board
    board = next
    next = temp
  }

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} keyPressed={keyPressed} />
}

export default Index
