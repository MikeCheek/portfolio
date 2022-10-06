import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Box from './box'
import {TOUCH} from 'three'

const Index = () => {
  return (
    <div>
      <Canvas>
        <Box />
        <ambientLight intensity={0.2} />
        <directionalLight position={[-2, 5, 2]} intensity={0.2} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate touches={{ONE: TOUCH.PAN, TWO:TOUCH.ROTATE}} />
      </Canvas>
    </div>
  )
}

export default Index
