export type SectionProps = {
  title: string
  children: JSX.Element
  reversed?: boolean
  id?: string
  Svg?: {
    svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    fill?: string
    stroke?: string
  }
  paragraph?: boolean
  Model3d?: JSX.Element
}
