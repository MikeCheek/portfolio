import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Box from './box'
import {TOUCH} from 'three'

const Index = () => {
  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length == 1) {
      event.stopPropagation()
      const current = event.touches[0].clientY
      window.scroll(0, current)
    }
  }

  return (
    <div onTouchMove={(e) => handleTouchMove(e)}>
      <Canvas>
        <Box />
        <ambientLight intensity={0.2} />
        <directionalLight position={[-2, 5, 2]} intensity={0.2} />
        <OrbitControls enableZoom={false} autoRotate touches={{ONE: TOUCH.DOLLY_ROTATE, TWO: TOUCH.ROTATE}} />
      </Canvas>
    </div>
  )
}

export default Index
