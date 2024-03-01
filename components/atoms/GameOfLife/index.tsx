import dynamic from "next/dynamic"
import React from "react"
import p5Types from "p5"

const Sketch = dynamic(import("react-p5"), {ssr: false})

const Index = () => {
  const w = 10
  let columns: number
  let rows: number
  let board: number[][]
  let next: number[][]
  let paused: boolean = false

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.frameRate(10)
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)

    window.addEventListener("resize", () => p5.resizeCanvas(window.innerWidth, window.innerHeight))

    columns = p5.floor(p5.width / w)
    rows = p5.floor(p5.height / w)

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
        if (board[i][j] == 1) p5.fill(70)
        else p5.fill(0)
        p5.stroke(0)
        p5.rect(i * w, j * w, w - 1, w - 1)
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
      const cellX = p5.floor(p5.mouseX / w)
      const cellY = p5.floor(p5.mouseY / w)
      if (board[cellX]) board[cellX][cellY] = (board[cellX][cellY] - 1) * -1
    }
  }

  const init = (p5: p5Types) => {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // Lining the edges with 0s
        if (i == 0 || j == 0 || i == columns - 1 || j == rows - 1) board[i][j] = 0
        // Filling the rest randomly
        else board[i][j] = p5.floor(p5.random(2))
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
