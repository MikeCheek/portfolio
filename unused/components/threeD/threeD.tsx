import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

const ThreeD = () => {
  return (
    <div>
      <Canvas>
        <Box />
        <ambientLight intensity={1} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
    </div>
  )
}

const Box = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export default ThreeD
