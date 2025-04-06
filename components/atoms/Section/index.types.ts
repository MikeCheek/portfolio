export type SectionProps = {
  title: string
  children: React.ReactNode
  reversed?: boolean
  id?: string
  Svg?: {
    svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    fill?: string
    stroke?: string
  }
  paragraph?: boolean
  Model3d?: React.ReactNode
}
