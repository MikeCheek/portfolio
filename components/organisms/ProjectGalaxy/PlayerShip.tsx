import {useFrame} from "@react-three/fiber"
import React, {useEffect, useRef} from "react"
import {Group, Matrix4, Quaternion, Vector3} from "three"
import {AUTO_BRAKE, DAMPING, GRAVITY_RADIUS, GRAVITY_STRENGTH, LAND_RADIUS, PARK_DISTANCE, THRUST} from "./constants"

const PlayerShip = ({
  targetPlanet,
  onLand,
  shipRef,
}: {
  targetPlanet: Vector3 | null
  onLand: () => void
  shipRef: React.RefObject<Group | null>
}) => {
  const velocity = useRef(new Vector3())
  const landed = useRef(false)
  const thrusting = useRef(false)

  const keys = useRef<Record<string, boolean>>({})

  // keyboard listener
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") thrusting.current = true
    }

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") thrusting.current = false
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
    }
  }, [])

  useFrame((_, delta) => {
    if (!shipRef.current) return
    const ship = shipRef.current

    if (thrusting.current) {
      const forward = new Vector3(0, 0, -1).applyQuaternion(ship.quaternion)

      velocity.current.add(forward.multiplyScalar(THRUST))
    }

    // 🧊 Space damping
    velocity.current.multiplyScalar(DAMPING)

    ship.position.add(velocity.current)

    // 🚀 FREE FLIGHT CONTROLS (disabled once landed)
    if (!landed.current) {
      const rotSpeed = 1.5 * delta

      if (keys.current["KeyA"]) ship.rotateY(rotSpeed)
      if (keys.current["KeyD"]) ship.rotateY(-rotSpeed)
      if (keys.current["KeyW"]) ship.rotateX(rotSpeed)
      if (keys.current["KeyS"]) ship.rotateX(-rotSpeed)
      if (keys.current["KeyQ"]) ship.rotateZ(rotSpeed)
      if (keys.current["KeyE"]) ship.rotateZ(-rotSpeed)

      const thrust = keys.current["Space"] ? 40 : 0
      const forward = new Vector3(0, 0, -1).applyQuaternion(ship.quaternion)
      velocity.current.add(forward.multiplyScalar(thrust * delta))
    }

    // 🌌 MOVE
    ship.position.add(velocity.current.clone().multiplyScalar(delta))

    // 🌫 DRAG (always)
    velocity.current.multiplyScalar(0.99)

    // 🪐 GRAVITY + AUTO LANDING
    if (targetPlanet && !landed.current) {
      const toPlanet = targetPlanet.clone().sub(ship.position)
      const distance = toPlanet.length()
      const direction = toPlanet.normalize()

      // 🌍 Gravity field
      if (distance < GRAVITY_RADIUS) {
        const gravityForce = GRAVITY_STRENGTH * (1 - distance / GRAVITY_RADIUS)

        velocity.current.add(direction.multiplyScalar(gravityForce * delta))

        // 🛑 Auto-brake near planet
        velocity.current.multiplyScalar(AUTO_BRAKE)
      }

      // 🧭 Align ship orientation to planet
      const targetQuaternion = new Quaternion().setFromRotationMatrix(
        new Matrix4().lookAt(ship.position, targetPlanet, ship.up)
      )

      ship.quaternion.slerp(targetQuaternion, 0.04)

      // 🛬 LAND
      if (distance < LAND_RADIUS && !landed.current) {
        landed.current = true
        velocity.current.set(0, 0, 0)

        // Park position
        ship.position.copy(targetPlanet.clone().add(new Vector3(0, 3, PARK_DISTANCE)))

        onLand()
      }
    }
  })

  return (
    <group ref={shipRef}>
      {/* placeholder rocket */}
      <mesh>
        <coneGeometry args={[1, 4, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  )
}

export default PlayerShip
