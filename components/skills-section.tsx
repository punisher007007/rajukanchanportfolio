"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import TechOrbit from "@/components/3d/tech-orbit"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "HTML5", "CSS3", "Next.js"],
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "Flask", "FastAPI"],
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector DBs"],
      color: "from-red-400 to-rose-500",
    },
    {
      title: "AI & Machine Learning",
      skills: ["OpenAI API", "LangChain", "Hugging Face", "TensorFlow", "Scikit-learn"],
      color: "from-indigo-400 to-purple-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </motion.div>

        {/* 3D Tech Orbit */}
        <div className="h-96 mb-16 relative">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <Suspense fallback={null}>
              <TechOrbit />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                <div className="relative z-10">
                  <h3
                    className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center space-x-2 group/skill"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-125 transition-transform duration-200`}
                        />
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
