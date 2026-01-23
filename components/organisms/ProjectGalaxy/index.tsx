"use client"

import React, {useRef, useState, useMemo, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {OrbitControls, Text, Float, PerspectiveCamera, Stars, Html} from "@react-three/drei"
import * as THREE from "three"
import {useRouter} from "next/navigation"

const ProjectNode = ({project, position}: {project: any; position: [number, number, number]}) => {
  const router = useRouter()
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const idHash = useMemo(() => {
    return project.id.split("").reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)
  }, [project.id])

  // 1. Unified Animation Logic
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle pulse effect
      const s = 1 + Math.sin(state.clock.elapsedTime * 2 + idHash) * 0.05
      meshRef.current.scale.set(s, s, s)

      // Gentle float effect for the whole group
      meshRef.current.parent!.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + idHash) * 0.5
    }
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
        onClick={() => router.push(`/project/${project.id}`)}
      >
        <sphereGeometry args={[1.2, 32, 32]} />

        <meshStandardMaterial
          color={hovered ? "#ff8a00" : "#7928ca"}
          emissive={hovered ? "#ff8a00" : "#7928ca"}
          emissiveIntensity={hovered ? 5 : 1.5} // High intensity for that "Star" look
          toneMapped={false} // Prevents the color from getting "washed out"
        />
      </mesh>

      {hovered && <pointLight distance={10} intensity={5} color="#ff8a00" />}

      <Text position={[0, 2.5, 0]} fontSize={1.2} color="white" anchorX="center" maxWidth={10} textAlign="center">
        {project.title}
      </Text>
    </group>
  )
}

const ProjectGalaxy = ({projects}: {projects: any[]}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        background: "radial-gradient(circle at center, #111 0%, #000 100%)",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Canvas shadows camera={{far: 2000}}>
        <Suspense
          fallback={
            <Html center>
              <div>Loading...</div>
            </Html>
          }
        >
          {/* Increased Far clipping and adjusted position */}
          <PerspectiveCamera makeDefault position={[0, 0, 250]} fov={50} far={2000} />

          <OrbitControls enablePan={true} enableZoom={true} maxDistance={1000} minDistance={1} />

          {/* Stronger lighting to cover the wide area */}
          <ambientLight intensity={1.0} />
          <pointLight position={[100, 100, 100]} intensity={2} />

          {/* Debug Box: If you see this red box but no projects, check your map logic */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color="red" />
          </mesh>

          {projects && projects.map((proj) => <ProjectNode key={proj.id} project={proj} position={proj.pos} />)}

          <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade speed={1} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ProjectGalaxy
