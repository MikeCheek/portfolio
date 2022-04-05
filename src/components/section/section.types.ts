import {ReactElement} from "react"

export type SectionProps = {
  title: string
  children: ReactElement<any, any>
  reversed?: boolean
  id?: string
  Svg?: {
    svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    fill?: string
    stroke?: string
  }
  paragraph?: boolean
}
