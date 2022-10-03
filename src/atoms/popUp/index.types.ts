export default interface PopUpProps {
  children: React.ReactNode
  top: number
  left: number | string
  right: number | string
  onClick?: () => void
}
