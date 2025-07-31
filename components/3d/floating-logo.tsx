"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text3D, Center } from "@react-three/drei"
import type * as THREE from "three"

export default function FloatingLogo() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <Center>
      <Text3D
        ref={meshRef}
        font="/fonts/Inter_Bold.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[0, 0, -5]}
      >
        RK
        <meshStandardMaterial color="#00ffff" emissive="#004444" emissiveIntensity={0.5} />
      </Text3D>
    </Center>
  )
}
