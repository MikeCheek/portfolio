import {Canvas, useFrame, useLoader} from "@react-three/fiber"
import {Physics, Triplet, usePlane, useSphere} from "@react-three/cannon"
import {OrbitControls, PerspectiveCamera} from "@react-three/drei"
import {RefObject, Suspense, useEffect, useRef} from "react"
import {BufferGeometry, Material, Mesh} from "three"
import {useInView} from "react-intersection-observer"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import Loading from "../loading"

const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }))
  return (
    <mesh ref={ref as RefObject<Mesh<BufferGeometry, Material | Material[]>>}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial opacity={0} transparent />
    </mesh>
  )
}

const Pencil = () => {
  const gltf = useLoader(GLTFLoader, "/pencil.glb")
  return (
    <mesh position={[0, 10, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

const Sphere = ({position = [0, 5, 0]}: {position?: Triplet}) => {
  const [ref, api] = useSphere(() => ({mass: 0.1, position: position ?? [0, 5, 0], linearDamping: 0.01}))
  const _position = useRef([0, 0, 0])

  useEffect(() => api.position.subscribe((p) => (_position.current = p)), [])

  useFrame(() => {
    if (_position.current[0] < -10 || _position.current[0] > 10) {
      api.position.set(position[0], position[1], position[2])
      api.velocity.set(0, 0, 0)
    }
  })
  return (
    <mesh ref={ref as RefObject<Mesh<BufferGeometry, Material | Material[]>>} castShadow>
      <sphereGeometry />
      <meshPhysicalMaterial color={"red"} roughness={0.8} metalness={0.2} clearcoat={1} clearcoatRoughness={0.35} />
    </mesh>
  )
}

const Index = () => {
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    fallbackInView: true,
    rootMargin: "-10% 0px -10% 0px",
    delay: 200,
  })
  return (
    <Suspense fallback={<Loading />}>
      <Canvas ref={ref}>
        <Physics gravity={inView ? [0, -10, 0] : [0, 0, 0]}>
          <directionalLight position={[0, 10, 15]} intensity={0.7} />
          <Sphere position={[1, 15, 0]} />
          <Pencil />
          <Sphere position={[-1, 25, 0]} />
          <Sphere />
          <Plane />
          <PerspectiveCamera makeDefault position={[0, 3, 10]} />
          <OrbitControls />
        </Physics>
      </Canvas>
    </Suspense>
  )
}

export default Index
