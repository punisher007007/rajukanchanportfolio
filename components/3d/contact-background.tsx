"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

export default function ContactBackground() {
  const sphere1Ref = useRef<THREE.Mesh>(null)
  const sphere2Ref = useRef<THREE.Mesh>(null)
  const sphere3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (sphere1Ref.current) {
      sphere1Ref.current.position.x = Math.sin(time * 0.5) * 2
      sphere1Ref.current.position.y = Math.cos(time * 0.3) * 1.5
      sphere1Ref.current.rotation.x = time * 0.2
      sphere1Ref.current.rotation.y = time * 0.1
    }

    if (sphere2Ref.current) {
      sphere2Ref.current.position.x = Math.cos(time * 0.4) * -2.5
      sphere2Ref.current.position.y = Math.sin(time * 0.6) * 2
      sphere2Ref.current.rotation.x = -time * 0.15
      sphere2Ref.current.rotation.z = time * 0.1
    }

    if (sphere3Ref.current) {
      sphere3Ref.current.position.x = Math.sin(time * 0.3) * 1.5
      sphere3Ref.current.position.y = Math.cos(time * 0.4) * -2
      sphere3Ref.current.rotation.y = time * 0.25
      sphere3Ref.current.rotation.z = -time * 0.1
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 5]} intensity={1} color="#00ffff" />

      <Sphere ref={sphere1Ref} args={[1, 64, 64]} position={[2, 0, -3]}>
        <MeshDistortMaterial color="#00ffff" transparent opacity={0.3} distort={0.4} speed={2} roughness={0.1} />
      </Sphere>

      <Sphere ref={sphere2Ref} args={[1.5, 64, 64]} position={[-2, 1, -4]}>
        <MeshDistortMaterial color="#8b5cf6" transparent opacity={0.2} distort={0.6} speed={1.5} roughness={0.1} />
      </Sphere>

      <Sphere ref={sphere3Ref} args={[0.8, 64, 64]} position={[1, -2, -2]}>
        <MeshDistortMaterial color="#ec4899" transparent opacity={0.25} distort={0.3} speed={3} roughness={0.1} />
      </Sphere>
    </>
  )
}
