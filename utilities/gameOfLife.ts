enum P_CATEGORY {
  GUN = "Gun",
  TRAIN = "Train",
  SPACE = "Space",
  STUFF = "Stuff",
  FUSE = "Fuse",
  PHASE = "Phase",
  ANIMAL = "Animal",
  INFINITE_GROWTH = "Infinite Growth",
}
type Pattern = {
  name: string
  cells: number[][]
  category: P_CATEGORY
  size: {x: number; y: number}
  rightTrimmable?: number // number of cells to trim keeping the pattern work, it can be multiplied
}

const patternToMatrix = (pattern: Pattern) => {
  const matrix = new Array(pattern.size.y)
  for (let i = 0; i < pattern.size.y; i++) {
    matrix[i] = new Array(pattern.size.x).fill(0)
    pattern.cells[i].forEach((c) => (matrix[i][c] = 1))
  }
  return matrix
}

const doubleNumbers = (start: number, length: number) => {
  const result: number[] = []
  let current = start
  let increment = 1

  while (result.length < length) {
    result.push(current)
    current += increment
    increment = increment === 1 ? 3 : 1
  }

  return result
}

const mirrorY = (cells: number[][]) => [...cells, ...cells.reverse()]

// Pattern are saved in this way:
// The cells matrix stores positions of the active cells of the pattern
// For every element in position i of cell[i] I have the position
// of the active cells in that row. The remaining cells are dead.
const patterns: Pattern[] = [
  {
    name: "Gosper Glider Gun",
    category: P_CATEGORY.GUN,
    cells: [
      [24],
      [22, 24],
      [12, 13, 20, 21, 34, 35],
      [11, 15, 20, 21, 34, 35],
      [0, 1, 10, 16, 20, 21],
      [0, 1, 10, 14, 16, 17, 22, 24],
      [10, 16, 24],
      [11, 15],
      [12, 13],
    ],
  },
  {
    name: "Glasses",
    category: P_CATEGORY.STUFF,
    cells: [
      [4, 13],
      [2, 3, 4, 13, 14, 15],
      [1, 16],
      [1, 4, 5, 6, 11, 12, 13, 16],
      [0, 1, 3, 7, 10, 14, 16, 17],
      [3, 7, 8, 9, 10, 14],
      [3, 7, 10, 14],
      [4, 5, 6, 11, 12, 13],
      [],
      [4, 5, 7, 10, 12, 13],
      [4, 6, 7, 10, 11, 13],
    ],
  },
  {
    name: "Bi-block fuse",
    category: P_CATEGORY.FUSE,
    cells: [
      [1, 2, ...doubleNumbers(5, 20)],
      [0, 3, ...doubleNumbers(5, 20)],
      [1, 2],
      [...doubleNumbers(5, 20)],
      [...doubleNumbers(5, 20)],
    ],
    rightTrimmable: 4,
  },
  {
    name: "101",
    category: P_CATEGORY.PHASE,
    cells: mirrorY([
      [4, 5, 12, 13],
      [3, 5, 12, 14],
      [3, 14],
      [0, 1, 3, 14, 16, 17],
      [0, 1, 3, 6, 8, 9, 11, 14, 16, 17],
      [3, 5, 7, 10, 12, 14],
    ]),
  },
  {
    name: "Phoenix",
    category: P_CATEGORY.ANIMAL,
    cells: [[4], [2, 4], [6], [0, 1], [6, 7], [1], [3, 5], [3]],
  },
  {
    name: "Line",
    category: P_CATEGORY.INFINITE_GROWTH,
    cells: [[0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 17, 18, 19, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38]],
  },
  {
    name: "Kok's Galaxy",
    category: P_CATEGORY.SPACE,
    cells: [
      [0, 1, 2, 3, 4, 5, 7, 8],
      [0, 1, 2, 3, 4, 5, 7, 8],
      [7, 8],
      [0, 1, 7, 8],
      [0, 1, 7, 8],
      [0, 1, 7, 8],
      [0, 1],
      [0, 1, 3, 4, 5, 6, 7, 8],
      [0, 1, 3, 4, 5, 6, 7, 8],
    ],
  },
].map((p) => {
  const maxX = Math.max(...p.cells.map((v) => Math.max(...v))) + 1
  const maxY = p.cells.length
  return {...p, size: {x: maxX, y: maxY}}
})

export {patterns, patternToMatrix, P_CATEGORY}
