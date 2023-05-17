export default interface ArrowProps {
  right?: boolean
  down?: boolean
  up?: boolean
  color?: string
  onClick?: () => void
  injectStyle?: React.CSSProperties
  hideMobile?: boolean
  hideDesktop?: boolean
}
