import React, {useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Mesh} from 'three'

const ThreeD = () => {
  return (
    <div>
      <Canvas>
        <Box />
        <ambientLight intensity={0.2} />
        <directionalLight position={[-2, 5, 2]} intensity={0.2} />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  )
}

const Box = () => {
  const boxRef = useRef<Mesh>()
  useFrame(({clock}) => {
    boxRef.current!.rotation.x = Math.sin(clock.getElapsedTime())
    boxRef.current!.rotation.y = Math.cos(clock.getElapsedTime())
  })
  return (
    /*@ts-ignore */
    <mesh ref={boxRef} rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3, 3]} />
      <meshLambertMaterial attach="material" color={'#ffac30'} emissive={'#fd76cb'} wireframe reflectivity={1} />
    </mesh>
  )
}

export default ThreeD
