enum P_CATEGORY {
  GUN = "Gun",
  ENGINE = "Engine",
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
  description?: string
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

const mirrorY = (cells: number[][], inTheMiddle?: number[]) =>
  inTheMiddle ? [...cells, inTheMiddle, ...cells.reverse()] : [...cells, ...cells.reverse()]

// Pattern are saved in this way:
// The cells matrix stores positions of the active cells of the pattern
// For every element in position i of cell[i] I have the position
// of the active cells in that row. The remaining cells are dead.
const patterns: Pattern[] = [
  {
    name: "Gosper Glider Gun",
    description: "A famous pattern that periodically emits gliders.",
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
  {
    name: "119P4H1V0",
    category: P_CATEGORY.SPACE,
    cells: mirrorY(
      [
        [33],
        [16, 32, 34],
        [6, 8, 15, 21, 22, 31],
        [6, 11, 16, 18, 19, 20, 21, 22, 23, 28, 29],
        [6, 8, 9, 10, 11, 12, 13, 14, 15, 26, 29, 31, 32, 33],
        [9, 15, 23, 24, 25, 26, 31, 32, 33],
        [4, 5, 23, 24, 25, 27],
        [1, 4, 5, 13, 14, 23, 24],
        [1, 4],
      ],
      [0]
    ),
  },
  {
    name: "Coe ship",
    category: P_CATEGORY.ENGINE,
    cells: [[4, 5, 6, 7, 8, 9], [2, 3, 9], [0, 1, 3, 9], [4, 8], [6], [6, 7], [5, 6, 7, 8], [5, 6, 8, 9], [7, 8]],
  },
  {
    name: "double-barrelled",
    category: P_CATEGORY.GUN,
    cells: [
      [17],
      [17, 18],
      [18, 19],
      [17, 18],
      [32],
      [31, 32, 48, 49],
      [30, 31, 48, 49],
      [17, 18, 31, 32],
      [0, 1, 18, 19],
      [0, 1, 17, 18],
      [17],
      [31, 32],
      [30, 31],
      [31, 32],
      [32],
    ],
  },
  {
    name: "Dinner Table",
    category: P_CATEGORY.STUFF,
    cells: [
      [1],
      [1, 2, 3, 11, 12],
      [4, 11],
      [3, 4, 9, 11],
      [9, 10],
      [],
      [5, 6, 7],
      [5, 6, 7],
      [2, 3],
      [1, 3, 8, 9],
      [1, 8],
      [0, 1, 9, 10, 11],
      [11],
    ],
  },
  {
    name: "R-Pentomino",
    category: P_CATEGORY.INFINITE_GROWTH,
    description: "A simple pattern that evolves for a long time before stabilizing.",
    cells: [[1, 2], [0, 1], [1]],
  },
  {
    name: "Lightweight Spaceship (LWSS)",
    description: "A small, common spaceship pattern that moves across the grid.",
    category: P_CATEGORY.SPACE,
    cells: [[1, 4], [0], [0, 4], [0, 1, 2, 3]],
  },
  {
    name: "Blinker",
    category: P_CATEGORY.PHASE,
    description: "A simple oscillator that switches between two states.",
    cells: [[0, 1, 2]],
  },
  {
    name: "Toad",
    category: P_CATEGORY.PHASE,
    description: " A small oscillator with a period of 2.",
    cells: [
      [1, 2, 3],
      [0, 1, 2],
    ],
  },
  {
    name: "Beacon",
    description: "A small oscillator with a period of 2",
    category: P_CATEGORY.PHASE,
    cells: [[0, 1], [0], [3], [2, 3]],
  },
  {
    name: "Glider",
    category: P_CATEGORY.SPACE,
    description: "A small, well-known spaceship that travels diagonally across the grid.",
    cells: [[1], [2], [0, 1, 2]],
  },
  {
    name: "Acorn",
    category: P_CATEGORY.INFINITE_GROWTH,
    description: "A small pattern that grows indefinitely.",
    cells: [[1], [3], [0, 1, 4, 5, 6]],
  },
  {
    name: "Diehard",
    category: P_CATEGORY.INFINITE_GROWTH,
    description: "A pattern that eventually stabilizes after 130 generations.",
    cells: [[6], [0, 1], [1, 5, 6, 7]],
  },
  {
    name: "Switch Engine",
    category: P_CATEGORY.ENGINE,
    description: "A pattern that creates gliders and moves diagonally.",
    cells: [[1, 3], [0], [1, 4], [3, 4, 5]],
  },
  {
    name: "Copperhead",
    category: P_CATEGORY.SPACE,
    description: "A lightweight spaceship that moves orthogonally.",
    cells: [
      [1, 2, 3, 4],
      [],
      [1, 4],
      [0, 2, 3, 5],
      [0, 5],
      [],
      [0, 5],
      [0, 1, 4, 5],
      [0, 1, 2, 3, 4, 5],
      [1, 4],
      [2, 3],
      [2, 3],
    ],
  },
].map((p) => {
  const maxX = Math.max(...p.cells.map((v) => Math.max(...v))) + 1
  const maxY = p.cells.length
  return {...p, size: {x: maxX, y: maxY}}
})

export {patterns, patternToMatrix, P_CATEGORY}
