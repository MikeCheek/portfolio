import {createContext} from "react"

interface Context {
  scale: {x: number; y: number}
  position?: {x: number; y: number}
  fit: (width: number, height: number) => void
  unFit: () => void
  fitElement: (element: HTMLElement) => void
}

const CursorContext = createContext<Context>({
  scale: {x: 1, y: 1},
  fit: () => {},
  fitElement: () => {},
  unFit: () => {},
})

export default CursorContext
