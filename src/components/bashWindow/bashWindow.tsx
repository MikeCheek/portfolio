import React, {useEffect, useState, useRef} from "react"
import sleep from "../../utilities/sleep"
import * as styles from "./bashWindow.module.scss"
import {BashWindowProps, Dim} from "./bashWindow.types"

const BashWindow = ({children}: BashWindowProps): JSX.Element => {
  const [dim, setDim] = useState<Dim>({width: 70, height: 32})
  const terminalRef = useRef<HTMLDivElement>(null)
  const [compact, setCompact] = useState<boolean>(false)
  const [terminal, setTerminal] = useState<HTMLElement>()

  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
  let startX: number, startY: number, startW: number, startH: number

  const calculateDim = () => {
    if (document.getElementById("terminal")) {
      const rect: DOMRect = terminalRef.current!.getBoundingClientRect()
      setDim({width: Math.floor(rect.width), height: Math.floor(rect.height)})
    }
  }

  useEffect(() => {
    calculateDim()
    window.addEventListener("resize", calculateDim)
    setTerminal(terminalRef.current!)
  }, [])

  useEffect(() => {
    terminal?.addEventListener("touchstart", handleTouch, {passive: true})
    return () => {
      terminal?.removeEventListener("touchstart", handleTouch)
    }
  }, [terminal])

  const handleTouch = (event: TouchEvent) => {
    event.preventDefault()
    switch (event.touches.length) {
      case 2:
        handleTwoTouches(event)
        break
    }
  }

  const handleOneTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault()
    document.ontouchmove = handleOneTouchMove
    document.ontouchend = handleTouchEnd
    terminalRef.current!.style.transition = "none"
  }

  const handleOneTouchMove = (event: TouchEvent) => {
    event.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - event.touches[0].clientX
    pos2 = pos4 - event.touches[0].clientY
    pos3 = event.touches[0].clientX
    pos4 = event.touches[0].clientY
    // set the element's new position:
    const elmnt = terminalRef.current!
    elmnt.style.top = elmnt.offsetTop - pos2 + "px"
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
  }

  const handleTwoTouches = (event: TouchEvent) => {
    event.preventDefault()
    const first: Touch = event.touches.item(0)!
    const second: Touch = event.touches.item(1)!
    startX = first.clientX > second.clientX ? first.clientX - second.clientX : second.clientX - first.clientX
    startY = first.clientY > second.clientY ? first.clientY - second.clientY : second.clientY - first.clientY
    startW = terminalRef.current!.getBoundingClientRect().width
    startH = terminalRef.current!.getBoundingClientRect().height
    document.ontouchmove = handleTwoTouchesMove
    document.ontouchend = handleTouchEnd
    terminalRef.current!.style.transition = "none"
  }

  const handleTouchEnd = () => {
    document.ontouchmove = null
    document.ontouchend = null
    terminalRef.current!.style.transition = ""
  }

  const handleTwoTouchesMove = (event: TouchEvent) => {
    event.preventDefault()
    const first: Touch = event.touches.item(0)!
    const second: Touch = event.touches.item(1)!
    const offXAfter: number =
      first.clientX > second.clientX ? first.clientX - second.clientX : second.clientX - first.clientX
    const offYAfter: number =
      first.clientY > second.clientY ? first.clientY - second.clientY : second.clientY - first.clientY
    console.log(startX, offXAfter)
    if (offXAfter != startX || offYAfter != startY) {
      const elmnt = terminalRef.current!
      elmnt.style.width = `${startW + (offXAfter - startX) / 2}px`
      elmnt.style.height = `${startH + (offYAfter - startY) / 2}px`
    }
    calculateDim()
  }

  const dragMouseDown = (e: any) => {
    e = e || window.event
    e.preventDefault()
    document.body.style.cursor = "move"
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  const elementDrag = (e: any) => {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    // set the element's new position:
    const elmnt = terminalRef.current!
    elmnt.style.top = elmnt.offsetTop - pos2 + "px"
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
  }

  const closeDragElement = () => {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
    document.body.style.cursor = "default"
  }

  const minimize = () => {
    terminalRef.current!.style.height = "0"
    terminalRef.current!.style.minHeight = "0"
    terminalRef.current!.style.width = "auto"
    document.getElementById("content")!.style.height = "0"
    document.getElementById("content")!.style.width = "auto"
    document.getElementById("content")!.style.padding = "0"
    document.getElementById("content")!.style.opacity = "0"
    setCompact(true)
  }

  const expand = () => {
    terminalRef.current!.style.height = ""
    terminalRef.current!.style.minHeight = ""
    terminalRef.current!.style.width = ""
    document.getElementById("content")!.style.height = ""
    document.getElementById("content")!.style.width = ""
    document.getElementById("content")!.style.padding = ""
    document.getElementById("content")!.style.opacity = ""
    setCompact(false)
    calculateDim()
  }

  const close = () => {
    terminalRef.current!.style.transform = "scale(0)"
    terminalRef.current!.style.opacity = "0"
    sleep(2000).then(() => {
      terminalRef.current!.style.transform = ""
      terminalRef.current!.style.opacity = ""
      calculateDim()
    })
  }

  return (
    <div className={styles.terminalWrap}>
      <div className={styles.terminal} ref={terminalRef}>
        <div className={styles.top} onMouseDown={(e) => dragMouseDown(e)} onTouchStart={(e) => handleOneTouch(e)}>
          <div className={styles.title}>bash{compact ? `` : `: ~ ${dim.height}x${dim.width}`}</div>
          <div className={styles.buttons}>
            <span className={styles.circleRed} onClick={close}></span>
            <span className={styles.circleYellow} onClick={expand}></span>
            <span className={styles.circleGreen} onClick={minimize}></span>
          </div>
        </div>
        <pre id={"content"} className={styles.content}>
          {children}
        </pre>
      </div>
    </div>
  )
}

export default BashWindow
