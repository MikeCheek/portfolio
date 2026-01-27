import {useFrame, useThree} from "@react-three/fiber"
import React, {useEffect, useRef, useState} from "react"
import {THRUST, DAMPING, TURN_SPEED, ROLL_SPEED} from "./constants"
import {Vector3} from "three"

const PlayerShip = ({targetPlanet, onLand, shipRef}: any) => {
  const {gl} = useThree()
  const velocity = useRef(new Vector3())
  const [isThrusting, setIsThrusting] = useState(false)

  // Track active keys
  const keys = useRef<Record<string, boolean>>({})

  const touchState = useRef({
    steering: {x: 0, y: 0},
    roll: 0,
    thrust: false,
    leftId: null as number | null,
    rightId: null as number | null,
  })

  useEffect(() => {
    const down = (e: KeyboardEvent) => (keys.current[e.code] = true)
    const up = (e: KeyboardEvent) => (keys.current[e.code] = false)

    const handleTouchStart = (e: TouchEvent) => {
      for (let t of Array.from(e.changedTouches)) {
        if (t.clientX < window.innerWidth / 2) {
          // Left side = Steering
          touchState.current.leftId = t.identifier
          touchState.current.steering = {x: 0, y: 0}
        } else {
          // Right side = Thrust / Roll
          touchState.current.rightId = t.identifier
          touchState.current.thrust = true
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      for (let t of Array.from(e.changedTouches)) {
        // Steering
        if (t.identifier === touchState.current.leftId) {
          const dx = (t.clientX / window.innerWidth - 0.25) * 2
          const dy = (t.clientY / window.innerHeight - 0.5) * 2

          touchState.current.steering.x = dx
          touchState.current.steering.y = dy
        }

        // Roll
        if (t.identifier === touchState.current.rightId) {
          const dx = (t.clientX / window.innerWidth - 0.75) * 2
          touchState.current.roll = dx
        }
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      for (let t of Array.from(e.changedTouches)) {
        if (t.identifier === touchState.current.leftId) {
          touchState.current.leftId = null
          touchState.current.steering = {x: 0, y: 0}
        }

        if (t.identifier === touchState.current.rightId) {
          touchState.current.rightId = null
          touchState.current.thrust = false
          touchState.current.roll = 0
        }
      }
    }

    window.addEventListener("keydown", down)
    window.addEventListener("keyup", up)

    window.addEventListener("touchstart", handleTouchStart, {passive: false})
    window.addEventListener("touchmove", handleTouchMove, {passive: false})
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("keydown", down)
      window.removeEventListener("keyup", up)

      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [gl])

  useFrame((_, delta) => {
    if (!shipRef.current) return
    const ship = shipRef.current

    // --- SETTINGS ---
    const pitchSpeed = 1.5 * delta
    const yawSpeed = 1.5 * delta
    const rollSpeed = 2.0 * delta

    // --- KEYBOARD INPUT ---
    const pitchInput = (keys.current["KeyS"] ? 1 : 0) - (keys.current["KeyW"] ? 1 : 0)

    const yawInput = (keys.current["KeyD"] ? 1 : 0) - (keys.current["KeyA"] ? 1 : 0)

    const rollInput = (keys.current["KeyQ"] ? 1 : 0) - (keys.current["KeyE"] ? 1 : 0)

    const thrustInput = keys.current["Space"] || keys.current["ShiftLeft"]

    // --- TOUCH INPUT ---
    const touch = touchState.current

    const pitch = pitchInput - touch.steering.y

    const yaw = yawInput + touch.steering.x

    const roll = rollInput + touch.roll

    const thrust = thrustInput || touch.thrust

    if (keys.current["KeyW"]) ship.rotateX(-pitchSpeed)
    if (keys.current["KeyS"]) ship.rotateX(pitchSpeed)

    if (keys.current["KeyD"]) {
      ship.rotateY(yawSpeed)
      ship.rotateZ(rollSpeed * 0.1)
    }
    if (keys.current["KeyA"]) {
      ship.rotateY(-yawSpeed)
      ship.rotateZ(-rollSpeed * 0.1)
    }

    if (keys.current["KeyQ"]) ship.rotateZ(rollSpeed)
    if (keys.current["KeyE"]) ship.rotateZ(-rollSpeed)

    // Apply rotation
    ship.rotateX(pitch * pitchSpeed)
    ship.rotateY(yaw * yawSpeed)
    ship.rotateZ(roll * rollSpeed)

    // Auto-bank
    ship.rotateZ(yaw * rollSpeed * 0.1)

    setIsThrusting(thrust)

    if (thrust) {
      const forward = new Vector3(0, 0, -1).applyQuaternion(ship.quaternion)
      velocity.current.add(forward.multiplyScalar(THRUST * delta))
    }

    // --- PHYSICS & DAMPING ---
    // Brake with 'X' or just let damping handle it
    if (keys.current["KeyX"]) {
      velocity.current.multiplyScalar(0.9)
    }

    velocity.current.multiplyScalar(DAMPING)
    ship.position.add(velocity.current)

    // --- PLANET LOGIC ---
    if (targetPlanet) {
      const dist = ship.position.distanceTo(targetPlanet)
      if (dist < 15) {
        velocity.current.multiplyScalar(0.95) // Slow down near planets
        if (dist < 5 && velocity.current.length() < 0.5) {
          onLand()
        }
      }
    }
  })

  return (
    <group ref={shipRef}>
      {/* Ship Body */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.5, 1.5, 4, 16]} />
        <meshStandardMaterial color="#222" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Cockpit */}
      <mesh position={[0, 0.5, -0.5]}>
        <boxGeometry args={[0.6, 0.4, 0.8]} />
        <meshStandardMaterial color="#111" roughness={0.2} />
      </mesh>

      {/* Engines */}
      <mesh position={[0.8, 0, 1]}>
        <boxGeometry args={[0.5, 0.5, 1.5]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[-0.8, 0, 1]}>
        <boxGeometry args={[0.5, 0.5, 1.5]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Thruster Visuals */}
      {isThrusting && (
        <group>
          <mesh position={[0.8, 0, 1.8]} rotation={[Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.2, 1.5, 8]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
          </mesh>
          <mesh position={[-0.8, 0, 1.8]} rotation={[Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.2, 1.5, 8]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
          </mesh>
        </group>
      )}
    </group>
  )
}

export default PlayerShip
