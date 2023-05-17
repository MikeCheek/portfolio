import {FunctionComponent} from "react"

export default interface BallProps {
  BallSvg: FunctionComponent<React.SVGAttributes<SVGElement>>
  fastAnimation?: boolean
}
