import {useFrame} from "@react-three/fiber"
import React, {useMemo, useRef} from "react"
import {Points} from "three"

const Starfield = () => {
  const ref = useRef<Points>(null)

  const points = useMemo(() => {
    const arr = new Float32Array(6000 * 3)
    for (let i = 0; i < arr.length; i += 3) {
      const r = 800
      arr[i] = (Math.random() - 0.5) * r
      arr[i + 1] = (Math.random() - 0.5) * r
      arr[i + 2] = (Math.random() - 0.5) * r
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y += 0.0002
    ref.current.rotation.x += 0.0001
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points}
          count={points.length / 3}
          itemSize={3}
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={1.2} color="#ffffff" transparent opacity={0.8} depthWrite={false} sizeAttenuation />
    </points>
  )
}

export default Starfield
