"use client"

import React, {Suspense, useEffect, useRef, useState} from "react"
import {Canvas} from "@react-three/fiber"
import {Html} from "@react-three/drei"
import {EffectComposer, Bloom} from "@react-three/postprocessing"
import {Group, Vector3} from "three"
import {useRouter} from "next/navigation"

import ProjectNode from "./ProjectNode"
import Starfield from "./Starfield"
import PlayerShip from "./PlayerShip"
import ChaseCamera from "./ChaseCamera"
import {ProjectWithEmbedding} from "@utilities/info.types"

const ProjectGalaxy = ({projects}: {projects: ProjectWithEmbedding[]}) => {
  const router = useRouter()

  const shipRef = useRef<Group | null>(null)

  const [targetPlanet, setTargetPlanet] = useState<Vector3 | null>(null)
  const [selectedProject, setSelectedProject] = useState<ProjectWithEmbedding | null>(null)
  const [landed, setLanded] = useState(false)

  useEffect(() => {
    const onChange = () => {
      const locked = document.pointerLockElement !== null
      console.log("Pointer lock:", locked)
    }

    document.addEventListener("pointerlockchange", onChange)
    return () => document.removeEventListener("pointerlockchange", onChange)
  }, [])

  return (
    <div
      onClick={() => {
        document.body.requestPointerLock()
      }}
      style={{
        width: "100%",
        height: "600px",
        background: "radial-gradient(circle at center, #111 0%, #000 100%)",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        cursor: "crosshair",
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
          {/* 🚀 Player ship */}
          <PlayerShip shipRef={shipRef} targetPlanet={targetPlanet} onLand={() => setLanded(true)} />

          {/* 🎥 Chase camera */}
          <ChaseCamera ship={shipRef} />

          {/* 💡 Lighting */}
          <ambientLight intensity={1} />
          <pointLight position={[100, 100, 100]} intensity={2} />

          {/* 🟥 Debug center cube */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color="red" />
          </mesh>

          {/* 🪐 Project planets */}
          {projects.map((proj) => (
            <ProjectNode
              key={proj.id}
              project={proj}
              position={proj.pos}
              onSelect={(pos) => {
                setTargetPlanet(pos.clone())
                setSelectedProject(proj) // 🔥 REQUIRED
                setLanded(false)
              }}
            />
          ))}

          {/* 🛬 Landing UI */}
          {landed && targetPlanet && selectedProject && (
            <Html
              position={targetPlanet}
              center
              distanceFactor={12}
              style={{pointerEvents: "auto"}} // 🔥 REQUIRED
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  background: "rgba(0,0,0,0.7)",
                  padding: "12px 16px",
                  borderRadius: "16px",
                  backdropFilter: "blur(6px)",
                }}
              >
                <button onClick={() => router.push(`/project/${selectedProject.id}`)}>Enter Project</button>

                <button
                  onClick={() => {
                    setTargetPlanet(null)
                    setSelectedProject(null)
                    setLanded(false)
                  }}
                >
                  Take off
                </button>
              </div>
            </Html>
          )}

          {/* ✨ Postprocessing */}
          <EffectComposer>
            <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
          </EffectComposer>

          {/* 🌌 Background */}
          <Starfield />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ProjectGalaxy
