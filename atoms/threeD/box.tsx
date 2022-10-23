import {useFrame} from "@react-three/fiber"
import React, {useRef} from "react"
import {Mesh} from "three"

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
      <meshLambertMaterial attach="material" color={"#ffac30"} emissive={"#fd76cb"} wireframe reflectivity={1} />
    </mesh>
  )
}

export default Box
