import {useFrame, useThree} from "@react-three/fiber"
import {useEffect, useRef} from "react"
import * as THREE from "three"
import {Group} from "three"

export default function ChaseCamera({ship}: {ship: React.RefObject<Group | null>}) {
  const {camera, gl} = useThree()

  const yaw = useRef(0)
  const pitch = useRef(0)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      yaw.current -= e.movementX * 0.002
      pitch.current -= e.movementY * 0.002

      pitch.current = Math.max(-1.2, Math.min(1.2, pitch.current))
    }

    gl.domElement.requestPointerLock()
    document.addEventListener("mousemove", onMouseMove)

    return () => document.removeEventListener("mousemove", onMouseMove)
  }, [gl])

  useFrame(() => {
    if (!ship.current) return

    const rotation = new THREE.Euler(pitch.current, yaw.current, 0, "YXZ")
    const offset = new THREE.Vector3(0, 4, 12).applyEuler(rotation)

    camera.position.copy(ship.current.position).add(offset)
    camera.lookAt(ship.current.position)

    // 🔥 Rotate ship to face forward
    ship.current.rotation.y = yaw.current
    ship.current.rotation.x = pitch.current * 0.3
  })

  return null
}
