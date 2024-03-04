import {createContext} from "react"
import {Project} from "./info.types"

interface Context {
  // scale: {x: number; y: number}
  // position?: {x: number; y: number}
  // fit: (width: number, height: number) => void
  // unFit: () => void
  // fitElement: (element: HTMLElement) => void
  projects: Project[]
}

const CursorContext = createContext<Context>({
  // scale: {x: 1, y: 1},
  // fit: () => {},
  // fitElement: () => {},
  // unFit: () => {},
  projects: [],
})

export default CursorContext
