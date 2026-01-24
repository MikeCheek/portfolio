import {Billboard, Text} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import {useRouter} from "next/router"
import React, {useMemo, useRef, useState} from "react"
import {AdditiveBlending, Mesh, Vector3} from "three"

const ProjectNode = ({
  project,
  position,
  onSelect,
}: {
  project: any
  position: [number, number, number]
  onSelect: (pos: Vector3) => void
}) => {
  const router = useRouter()
  const meshRef = useRef<Mesh>(null)
  const ringRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const idHash = useMemo(() => {
    return project.id.split("").reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)
  }, [project.id])

  // 1. Unified Animation Logic
  useFrame((state) => {
    if (!meshRef.current) return

    meshRef.current.rotation.y += 0.003
    meshRef.current.rotation.x += 0.001

    const targetScale = hovered ? 1.25 : 1
    meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1)

    if (!ringRef.current) return

    ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 4) * 0.05)
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
          onSelect(new Vector3(...position))
        }}
      >
        <sphereGeometry args={[1.2, 32, 32]} />

        <meshPhysicalMaterial
          color={hovered ? "#ff8a00" : "#7928ca"}
          emissive={hovered ? "#ff8a00" : "#7928ca"}
          emissiveIntensity={hovered ? 6 : 2}
          roughness={0.15}
          metalness={0.6}
          clearcoat={1}
          clearcoatRoughness={0.1}
          toneMapped={false}
        />
      </mesh>

      {hovered && <pointLight distance={10} intensity={5} color="#ff8a00" />}
      {hovered && (
        <group>
          {/* Horizontal ring (ground) */}
          <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
            <ringGeometry args={[1.6, 2.2, 64]} />
            <meshBasicMaterial
              color="#ff8a00"
              transparent
              opacity={0.4}
              blending={AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </group>
      )}

      <Billboard follow lockX={false} lockY={false} lockZ={false}>
        <Text
          position={[0, 3.2, 0]}
          fontSize={1.1}
          color="white"
          outlineColor="black"
          outlineWidth={0.05}
          anchorX="center"
          fillOpacity={hovered ? 1 : 0.6}
        >
          {project.title}
        </Text>
      </Billboard>
    </group>
  )
}
export default ProjectNode
