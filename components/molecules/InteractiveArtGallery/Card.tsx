import React, {useMemo, useRef, useEffect} from "react"
import {Mesh, PlaneGeometry, Vector2, TextureLoader, ShaderMaterial} from "three"
import {useFrame} from "@react-three/fiber"

// Interface for the Card props
interface CardProps {
  i: number
  j: number
  mousePositionRef: React.MutableRefObject<Vector2>
}

const Card = ({i, j, mousePositionRef}: CardProps) => {
  // Default scale for the card
  const defaultScale = useMemo(() => new Vector2(0.4, 0.4), [])

  // Position as a Vector2 for distance calculations
  const positionVec = useMemo(() => new Vector2(i, j), [i, j])

  // Ref to access the mesh directly
  const meshRef = useRef<Mesh>(null)

  // Max scale and target scale for smooth interpolation
  const maxScale = useRef(new Vector2())
  const targetScale = useRef(new Vector2())

  // Set max scale based on the screen orientation
  const setMaxScale = () => {
    const isPortrait = window.innerWidth < window.innerHeight
    const scaleFactor = isPortrait ? 8 : 10
    maxScale.current.copy(defaultScale).multiplyScalar(scaleFactor)
  }

  // Update scale based on mouse position
  const updateScale = (dt: number) => {
    if (!meshRef.current) return

    const aspect = window.innerWidth / window.innerHeight

    // Calculate distance from mouse to card position
    const distanceX = (mousePositionRef.current.x * 8 - positionVec.x) / aspect
    const distanceY = (mousePositionRef.current.y * 5 - positionVec.y) / aspect

    let distance = Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
    distance *= 4

    // Lerp scale between default scale and max scale
    targetScale.current.lerpVectors(defaultScale, maxScale.current, Math.max(1 - distance, 0))

    // Smoothly interpolate the scale of the card
    meshRef.current.scale.lerp({x: targetScale.current.x, y: targetScale.current.y, z: 1}, 1 - Math.pow(0.0002, dt))
  }

  // Set max scale on component mount and when the window is resized
  useEffect(() => {
    setMaxScale()
    window.addEventListener("resize", setMaxScale)

    return () => window.removeEventListener("resize", setMaxScale)
  }, [defaultScale])

  // Load the texture
  const texture = useMemo(() => new TextureLoader().load("/images/pandify/1.jpg"), [])

  // Create a custom shader material for the card
  const shaderMaterial = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        uTexture: {value: texture},
        uDistance: {value: 0.0},
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uDistance;
        
        varying vec2 vUv;

        vec3 getLuminance(vec3 color) {
          vec3 luminance = vec3(0.2126, 0.7152, 0.0722);
          return vec3(dot(luminance, color));
        }

        void main() {
          vec4 image = texture(uTexture, vUv);
          float distanceFactor = min(max(uDistance, 0.), 1.);

          vec3 imageLum = getLuminance(image.xyz);
          vec3 color = mix(image.xyz, imageLum, -distanceFactor);

          gl_FragColor = vec4(color, 1.);
        }
      `,
      side: 2, // Two-sided material
    })
  }, [texture])

  // Update the distance uniform for the shader on each frame
  useFrame(() => {
    if (meshRef.current && shaderMaterial) {
      // Calculate distance between mouse and card position (normalized)
      const aspect = window.innerWidth / window.innerHeight
      const distanceX = (mousePositionRef.current.x * 9 - positionVec.x) / aspect
      const distanceY = (mousePositionRef.current.y * 5 - positionVec.y) / aspect
      let distance = Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
      distance *= 1

      // Update the uniform for the shader
      shaderMaterial.uniforms.uDistance.value = Math.max(1 - distance, 0)
    }
  })

  // Update the scale on every frame
  useFrame((state, delta) => {
    updateScale(delta)
  })

  return (
    <mesh ref={meshRef} position={[positionVec.x, positionVec.y, 0]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  )
}

export default Card
