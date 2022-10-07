import React, {useEffect, useState} from 'react'
import sleep from '../../utilities/sleep'
import Blob from '../../assets/blob.svg'
import * as styles from './index.module.scss'

const Index = () => {
  const [position, setPosition] = useState<{x: number; y: number}>({x: 0, y: 0})
  const [scale, setScale] = useState<number>(1)
  const dimension = 100

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({x: event.clientX - dimension / 2, y: event.clientY - dimension / 2})
  }

  const handleMouseClick = (_event: MouseEvent) => {
    setScale(1.5)
    sleep(100).then(() => setScale(1))
  }

  useEffect(() => {
    window.addEventListener('mousemove', (e) => handleMouseMove(e))
    window.addEventListener('click', (e) => handleMouseClick(e))
    return () => {
      window.removeEventListener('mousemove', () => {})
      window.removeEventListener('click', () => {})
    }
  }, [])
  return (
    <div className={styles.container} style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
      <Blob
        width={dimension}
        height={dimension}
        className={styles.cursor}
        style={{transform: `scale(${scale})`}}
        fill={'none'}
      />
    </div>
  )
}

export default Index
