import React, {useEffect, useState, useRef} from 'react'
import sleep from '../../utilities/sleep'
import * as styles from './bashWindow.module.scss'
import {BashWindowProps, Dim} from './bashWindow.types'

const BashWindow = ({children}: BashWindowProps): JSX.Element => {
  const [dim, setDim] = useState<Dim>({width: 70, height: 32})
  const terminalRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const [compact, setCompact] = useState<boolean>(false)

  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
  let startX: number, startY: number, startW: number, startH: number

  const updatePosition = (px: number, py: number) => {
    pos1 = pos3 - px
    pos2 = pos4 - py
    pos3 = px
    pos4 = py
  }

  const calculateDim = () => {
    if (terminalRef.current) {
      const rect: DOMRect = terminalRef.current.getBoundingClientRect()
      setDim({width: Math.floor(rect.width), height: Math.floor(rect.height)})
    }
  }

  useEffect(() => {
    calculateDim()
  }, [terminalRef])

  useEffect(() => {
    terminalRef.current!.addEventListener('touchstart', handleTouch, {passive: true})
    return () => {
      terminalRef.current!.removeEventListener('touchstart', handleTouch)
    }
  }, [terminalRef.current])

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
    pos3 = event.touches[0].clientX
    pos4 = event.touches[0].clientY
    document.ontouchmove = handleOneTouchMove
    document.ontouchend = handleTouchEnd
    terminalRef.current!.style.removeProperty('transition')
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
    terminalRef.current!.style.transition = 'none'
  }

  const handleOneTouchMove = (event: TouchEvent) => {
    event.preventDefault()
    // calculate the new cursor position:
    updatePosition(event.touches[0].clientX, event.touches[0].clientY)
    // set the element's new position:
    const elmnt = terminalRef.current!
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
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

  const handleTouchEnd = () => {
    document.ontouchmove = null
    document.ontouchend = null
    terminalRef.current!.style.removeProperty('transition')
    calculateDim()
  }

  const dragMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e = e || window.event
    e.preventDefault()
    topRef.current!.style.cursor = 'grabbing'
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  const elementDrag = (e: MouseEvent) => {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    updatePosition(e.clientX, e.clientY)
    // set the element's new position:
    const elmnt = terminalRef.current!
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
  }

  const closeDragElement = () => {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
    topRef.current!.style.removeProperty('cursor')
    terminalRef.current!.style.removeProperty('transition')
    document.body.style.removeProperty('cursor')
  }

  const elementResize = (dimension: string) => (e: MouseEvent) => {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    updatePosition(e.clientX, e.clientY)
    // set the element's new position:
    const elmnt = terminalRef.current!
    const rect: DOMRect = elmnt.getBoundingClientRect()
    if (dimension === 'width') {
      elmnt.style.width = rect.width - pos1 + 'px'
    } else if (dimension === 'height') {
      elmnt.style.height = rect.height - pos2 + 'px'
    } else if (dimension === 'both') {
      elmnt.style.width = rect.width - pos1 + 'px'
      elmnt.style.height = rect.height - pos2 + 'px'
    }
    calculateDim()
  }

  const resizeMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, type: string) => {
    e.preventDefault()
    e = e || window.event
    pos3 = e.clientX
    pos4 = e.clientY
    terminalRef.current!.style.transition = 'none'
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    if (type === 'r') {
      document.onmousemove = elementResize('width')
      document.body.style.cursor = 'ew-resize'
    } else if (type === 'b') {
      document.onmousemove = elementResize('height')
      document.body.style.cursor = 'ns-resize'
    } else if (type === 'rb') {
      document.onmousemove = elementResize('both')
      document.body.style.cursor = 'nwse-resize'
    }
  }

  const minimize = () => {
    terminalRef.current!.style.cssText = 'height: 0; min-height: 0; width: auto'
    document.getElementById('content')!.style.cssText = 'height: 0; width: auto; padding: 0; opacity: 0'
    setCompact(true)
  }

  const expand = () => {
    terminalRef.current!.removeAttribute('style')
    document.getElementById('content')!.removeAttribute('style')
    setCompact(false)
    calculateDim()
  }

  const close = () => {
    terminalRef.current!.style.transform = 'scale(0)'
    terminalRef.current!.style.opacity = '0'
    sleep(2000).then(() => {
      terminalRef.current!.style.removeProperty('transform')
      terminalRef.current!.style.removeProperty('opacity')
      sleep(500).then(() => {
        calculateDim()
      })
    })
  }

  return (
    <div className={styles.terminalWrap}>
      <div className={styles.terminal} ref={terminalRef} style={{top: 0, left: 0}}>
        <div
          ref={topRef}
          className={styles.top}
          onMouseDown={(e) => dragMouseDown(e)}
          onTouchStart={(e) => handleOneTouch(e)}
        >
          <div className={styles.title}>bash{compact ? `` : `: ~ ${dim.height}x${dim.width}`}</div>
          <div className={styles.buttons}>
            <span className={styles.circleRed} onClick={close}></span>
            <span className={styles.circleYellow} onClick={expand}></span>
            <span className={styles.circleGreen} onClick={minimize}></span>
          </div>
        </div>
        <pre id={'content'} className={styles.content}>
          {children}
        </pre>
        <div className={styles.brCorner} onMouseDown={(e) => resizeMouseDown(e, 'rb')} />
        <div className={styles.rLine} onMouseDown={(e) => resizeMouseDown(e, 'r')} />
        <div className={styles.bLine} onMouseDown={(e) => resizeMouseDown(e, 'b')} />
      </div>
    </div>
  )
}

export default BashWindow
