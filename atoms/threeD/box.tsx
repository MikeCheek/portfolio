import {useFrame} from "@react-three/fiber"
import React, {useRef} from "react"
import {BufferGeometry, Material, Mesh} from "three"

const Box = () => {
  const boxRef = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null)
  useFrame(({clock}) => {
    boxRef.current!.rotation.x = Math.sin(clock.getElapsedTime() / 4)
    boxRef.current!.rotation.y = Math.cos(clock.getElapsedTime() / 4)
  })
  return (
    <mesh ref={boxRef} rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3, 3]} />
      <meshLambertMaterial attach="material" color={"#ffac30"} emissive={"#fd76cb"} wireframe reflectivity={1} />
    </mesh>
  )
}

export default Box
