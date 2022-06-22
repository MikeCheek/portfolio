import React, {useState} from 'react'
import PopUp from '../../atoms/popUp/popUp'
import {HoverPopUpProps} from './hoverPopUp.types'

const HoverPopUp = ({children}: HoverPopUpProps) => {
  const [show, setShow] = useState<boolean>(false)
  const [pos, setPos] = useState<{top: number; left: number}>({top: 0, left: 0})

  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setPos({top: rect.top - rect.height, left: event.clientX})
    setShow(true)
  }
  const handleMouseLeave = (_event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setShow(false)
  }

  return (
    <span
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => {
        handleMouseLeave(e)
      }}
    >
      {show ? (
        <PopUp top={pos.top} left={pos.left}>
          {children[1]}
        </PopUp>
      ) : null}
      <span>{children[0]}</span>
    </span>
  )
}

export default HoverPopUp
