import React, {useEffect, useState} from 'react'
import sleep from '../../utilities/sleep'
import Blob from '../../assets/blob.svg'
import * as styles from './index.module.scss'

const Index = () => {
  const [position, setPosition] = useState<{x: number; y: number}>({x: 0, y: 0})
  const [transform, setTransform] = useState<{scale: number; rotate: number}>({scale: 1, rotate: 0})
  const dimension = 100

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({x: event.clientX - dimension / 2, y: event.clientY - dimension / 2})
  }

  const handleMouseClick = (_event: MouseEvent) => {
    setTransform((t) => ({scale: 1.5, rotate: (t.rotate + 40) % 360}))
    sleep(100).then(() => setTransform((t) => ({scale: 1, rotate: (t.rotate + 10) % 360})))
  }

  const handleMouseDown = (_event: MouseEvent) => {
    setTransform((t) => ({scale: 0.7, rotate: t.rotate}))
  }

  const handleMouseUp = (_event: MouseEvent) => {
    setTransform((t) => ({scale: 1, rotate: t.rotate}))
  }

  useEffect(() => {
    window.addEventListener('mousemove', (e) => handleMouseMove(e))
    window.addEventListener('mousedown', (e) => handleMouseDown(e))
    window.addEventListener('mouseup', (e) => handleMouseUp(e))
    window.addEventListener('click', (e) => handleMouseClick(e))
    return () => {
      window.removeEventListener('mousemove', () => {})
      window.removeEventListener('mousedown', () => {})
      window.removeEventListener('mouseup', () => {})
      window.removeEventListener('click', () => {})
    }
  }, [])
  return (
    <div className={styles.container} style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
      <Blob
        width={dimension}
        height={dimension}
        className={styles.cursor}
        style={{transform: `scale(${transform.scale}) rotate(${transform.rotate}deg)`}}
        fill={'none'}
      />
    </div>
  )
}

export default Index
