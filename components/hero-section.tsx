"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Terminal } from "lucide-react"
import ParticleField from "@/components/3d/particle-field"
import FloatingLogo from "@/components/3d/floating-logo"

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleField />
            <FloatingLogo />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Animated Name */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            Raju Kanchan
          </motion.h1>

          {/* Glitch Effect Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-4">
              Full Stack Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting scalable, high-performance APIs & cloud-native apps with 5+ years of experience at companies like
              American Express
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group"
            >
              <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore Work
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-green-400 hover:text-green-300 px-8 py-4 rounded-full text-lg font-mono backdrop-blur-sm bg-black/20 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group"
            >
              <Terminal className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              npx rajukanchan
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
