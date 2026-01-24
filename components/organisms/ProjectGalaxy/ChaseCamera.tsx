import {useFrame} from "@react-three/fiber"
import {Group, MathUtils, PerspectiveCamera, Vector3} from "three"

export default function ChaseCamera({ship}: {ship: React.RefObject<Group | null>}) {
  const cameraOffset = new Vector3(0, 4, 12) // Slightly higher/further for better view
  const currentPosition = new Vector3()
  const currentLookAt = new Vector3()

  useFrame((state, delta) => {
    if (!ship.current) return

    // 1. Calculate ideal position (behind ship)
    const idealOffset = cameraOffset.clone().applyQuaternion(ship.current.quaternion)
    const idealPosition = ship.current.position.clone().add(idealOffset)

    // 2. Smoothly lerp camera position
    // We use a slightly faster lerp (0.15) to reduce "lag" feeling
    currentPosition.lerp(idealPosition, 5 * delta)
    state.camera.position.copy(currentPosition)

    // 3. Calculate ideal LookAt (slightly ahead of ship)
    const forward = new Vector3(0, 0, -1).applyQuaternion(ship.current.quaternion)
    const lookAtTarget = ship.current.position.clone().add(forward.multiplyScalar(10))

    currentLookAt.lerp(lookAtTarget, 5 * delta)
    state.camera.lookAt(currentLookAt)

    // 4. Dynamic FOV based on speed (Juice)
    // We estimate speed by distance between ship and camera (rudimentary but effective)
    // or strictly by checking if thrusting (passed via props), but this works generally:
    const dist = state.camera.position.distanceTo(ship.current.position)
    const baseFov = 75
    // As ship pulls away (thrusting), increase FOV
    const targetFov = baseFov + (dist - 12) * 2
    if (state.camera instanceof PerspectiveCamera) {
      state.camera.fov = MathUtils.lerp(state.camera.fov, targetFov, delta * 2)
      state.camera.updateProjectionMatrix()
    }
  })

  return null
}
