import dynamic from "next/dynamic"
import React from "react"
import p5Types from "p5"
import GameOfLifeProps from "./index.types"

const Sketch = dynamic(import("react-p5"), {ssr: false})

const Index = ({size, pattern, speed = 10}: GameOfLifeProps) => {
  let columns: number
  let rows: number
  let board: number[][]
  let next: number[][]
  let paused = false

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.frameRate(speed)
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)

    window.addEventListener("resize", () => p5.resizeCanvas(window.innerWidth, window.innerHeight))

    columns = p5.floor(p5.width / size)
    rows = p5.floor(p5.height / size)

    board = new Array(columns)
    for (let i = 0; i < columns; i++) {
      board[i] = new Array(rows)
    }

    next = new Array(columns)
    for (let i = 0; i < columns; i++) {
      next[i] = new Array(rows)
    }
    init(p5)
  }

  const draw = (p5: p5Types) => {
    p5.background(0)
    if (!paused) generate()
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (board[i][j] == 1) p5.fill(70) //(i % j) % 2 == 0 ? p5.fill(255, 172, 48) : p5.fill(253, 118, 203)
        else p5.fill(0)
        p5.stroke(0)
        p5.rect(i * size, j * size, size - 1, size - 1)
      }
    }
  }

  const keyPressed = (p5: p5Types) => {
    if (
      p5.keyCode === 82 // r
    ) {
      init(p5)
    }
    if (
      p5.keyCode === 80 || // p
      p5.keyCode === 32 // space
    ) {
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
    // const pattern = patternToMatrix(patterns[0])
    const center = {i: columns / 2, j: rows / 2}
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // Lining the edges with 0s
        if (i == 0 || j == 0 || i == columns - 1 || j == rows - 1) board[i][j] = 0
        // Filling the rest
        else if (!pattern) board[i][j] = p5.floor(p5.random(2))
        else {
          board[i][j] = 0
          const start = {i: Math.floor(center.i - pattern[0].length / 2), j: Math.floor(center.j - pattern.length / 2)}
          if (pattern[j - start.j] && pattern[j - start.j][i - start.i]) board[i][j] = pattern[j - start.j][i - start.i]
        }
        next[i][j] = 0
      }
    }
  }

  const generate = () => {
    for (let x = 1; x < columns - 1; x++) {
      for (let y = 1; y < rows - 1; y++) {
        let neighbors = 0
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            neighbors += board[x + i][y + j]
          }
        }

        neighbors -= board[x][y]
        // Rules of Life
        if (board[x][y] == 1 && neighbors < 2) next[x][y] = 0 // Loneliness
        else if (board[x][y] == 1 && neighbors > 3) next[x][y] = 0 // Overpopulation
        else if (board[x][y] == 0 && neighbors == 3) next[x][y] = 1 // Reproduction
        else next[x][y] = board[x][y] // Stasis
      }
    }

    let temp = board
    board = next
    next = temp
  }

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} keyPressed={keyPressed} />
}

export default Index
