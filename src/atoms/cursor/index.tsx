import React, {useEffect, useState} from 'react'
import Blob from '../../assets/blob.svg'

const Index = () => {
  const [position, setPosition] = useState<{x: number; y: number}>({x: 0, y: 0})
  const dimension = 100

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({x: event.clientX - dimension / 2, y: event.clientY - dimension / 2})
  }

  useEffect(() => {
    window.addEventListener('mousemove', (e) => handleMouseMove(e))
    return () => {
      window.removeEventListener('mousemove', () => {})
    }
  }, [])
  return (
    <Blob
      width={dimension}
      height={dimension}
      style={{
        position: 'fixed',
        zIndex: -999,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  )
}

export default Index
