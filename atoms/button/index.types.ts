export interface ButtonProps {
  title: string
  href: string
  onMouseEnter?: HandleMouseEvent
  onMouseLeave?: () => void
  children: React.ReactNode
  internal?: boolean
}

type HandleMouseEvent = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
