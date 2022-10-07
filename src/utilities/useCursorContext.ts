import {createContext, useContext} from 'react'

export const CursorContext = createContext<boolean>(false)

export const useCursor = useContext(CursorContext)
