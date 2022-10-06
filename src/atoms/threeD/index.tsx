import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Box from './box'
import {TOUCH} from 'three'

const Index = () => {
  const handleOneTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  const handleTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length == 1) handleOneTouch(event)
  }

  return (
    <div onTouchStart={(e) => handleTouch(e)} onTouchMove={(e) => handleTouch(e)}>
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
