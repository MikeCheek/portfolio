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

  useEffect(() => {
    const down = (e: KeyboardEvent) => (keys.current[e.code] = true)
    const up = (e: KeyboardEvent) => (keys.current[e.code] = false)

    window.addEventListener("keydown", down)
    window.addEventListener("keyup", up)

    // We removed the mouse listener since WASD now handles rotation

    return () => {
      window.removeEventListener("keydown", down)
      window.removeEventListener("keyup", up)
    }
  }, [gl])

  useFrame((_, delta) => {
    if (!shipRef.current) return
    const ship = shipRef.current

    // --- SETTINGS ---
    const pitchSpeed = 1.5 * delta
    const yawSpeed = 1.5 * delta
    const rollSpeed = 2.0 * delta

    // --- 1. WASD ROTATION (Steering) ---

    // Pitch (W = Nose Down, S = Nose Up)
    if (keys.current["KeyW"]) ship.rotateX(-pitchSpeed)
    if (keys.current["KeyS"]) ship.rotateX(pitchSpeed)

    // Yaw (A = Left, D = Right)
    if (keys.current["KeyD"]) {
      ship.rotateY(yawSpeed)
      // Auto-bank: slightly roll ship left when turning left
      ship.rotateZ(rollSpeed * 0.1)
    }
    if (keys.current["KeyA"]) {
      ship.rotateY(-yawSpeed)
      // Auto-bank: slightly roll ship right when turning right
      ship.rotateZ(-rollSpeed * 0.1)
    }

    // --- 2. ROLL (Q/E) ---
    // Manual Roll for precise adjustment
    if (keys.current["KeyQ"]) ship.rotateZ(rollSpeed)
    if (keys.current["KeyE"]) ship.rotateZ(-rollSpeed)

    // --- 3. THRUST (Space/Shift) ---
    // Since W is now pitch, we move Thrust to Space or Shift
    const activeThrust = keys.current["Space"] || keys.current["ShiftLeft"]
    setIsThrusting(activeThrust)

    if (activeThrust) {
      // Calculate "Forward" direction relative to ship's new rotation
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
