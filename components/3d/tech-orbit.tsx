"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"

const techLogos = [
  { name: "React", position: [3, 0, 0], color: "#61DAFB" },
  { name: "Node.js", position: [0, 3, 0], color: "#339933" },
  { name: "AWS", position: [-3, 0, 0], color: "#FF9900" },
  { name: "Docker", position: [0, -3, 0], color: "#2496ED" },
  { name: "TypeScript", position: [2.1, 2.1, 0], color: "#3178C6" },
  { name: "MongoDB", position: [-2.1, 2.1, 0], color: "#47A248" },
  { name: "PostgreSQL", position: [-2.1, -2.1, 0], color: "#336791" },
  { name: "Kubernetes", position: [2.1, -2.1, 0], color: "#326CE5" },
]

export default function TechOrbit() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#00ffff" emissive="#004444" emissiveIntensity={0.5} transparent opacity={0.8} />
      </mesh>

      {/* Orbiting Tech Icons */}
      {techLogos.map((tech, index) => (
        <group key={tech.name} position={tech.position}>
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color={tech.color}
              emissive={tech.color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.9}
            />
          </mesh>
          <Html
            position={[0, -0.8, 0]}
            center
            style={{
              color: tech.color,
              fontSize: "12px",
              fontWeight: "bold",
              textAlign: "center",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {tech.name}
          </Html>
        </group>
      ))}

      {/* Orbit Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 3.2, 64]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 0, 0]} intensity={1} color="#00ffff" />
    </group>
  )
}
