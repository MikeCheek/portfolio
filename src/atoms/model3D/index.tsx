import React from 'react'
import {Canvas, extend} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Model from './notebook.js'
import * as styles from './index.module.scss'

extend({OrbitControls})
extend({Model})

const Index = () => {
  return (
    <div className={styles.canvas}>
      <Canvas camera={{position: [2, 0, 28], fov: 15}}>
        <ambientLight intensity={0.5} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Model position={[0, -0.9, 0]} />
        <OrbitControls
          autoRotate
          enableDamping
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 2.8}
          enableZoom={false}
          enablePan
        />
      </Canvas>
    </div>
  )
}

export default Index
