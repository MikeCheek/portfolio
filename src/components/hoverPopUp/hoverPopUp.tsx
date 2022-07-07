import React, {useState} from 'react'
import PopUp from '../../atoms/popUp/popUp'
import {HoverPopUpProps} from './hoverPopUp.types'

const HoverPopUp = ({children, down = false, href}: HoverPopUpProps) => {
  const [show, setShow] = useState<boolean>(false)
  const [pos, setPos] = useState<{top: number; left: number | string; right: number | string}>({
    top: 0,
    left: 0,
    right: 0,
  })

  const checkLeftRight = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const left = event.clientX
    const right = window.innerWidth - left
    if (right > left) return {left: left - 50, right: 'auto'}
    return {left: 'auto', right: right - 50}
  }

  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const checkX = checkLeftRight(event)
    const checkY = down ? rect.top + rect.height : rect.top - rect.height
    setPos({top: checkY + window.scrollY, left: checkX.left, right: checkX.right})
    setShow(true)
  }
  const handleMouseLeave = (_event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setShow(false)
  }

  const onClick = () => {
    if (href) window.location.href = href
  }

  return (
    <span
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => {
        handleMouseLeave(e)
      }}
    >
      {show ? (
        <PopUp top={pos.top} left={pos.left} right={pos.right}>
          {children[1]}
        </PopUp>
      ) : null}
      <span onClick={onClick}>{children[0]}</span>
    </span>
  )
}

export default HoverPopUp
