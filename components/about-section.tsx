"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Cloud, Database, Zap } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cards = [
    {
      icon: Code2,
      title: "Full Stack Expertise",
      description: "5+ years architecting scalable web applications with modern tech stacks",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "AWS certified with experience in microservices, containers, and serverless",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Built high-performance APIs handling millions of transactions daily",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimized systems achieving 99.99% uptime and 30% latency reduction",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate software engineer with over 5 years of hands-on experience architecting and delivering
              full-stack web applications. I specialize in crafting scalable backend systems, RESTful APIs, and dynamic
              user interfaces.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              At American Express, I played a key role in building a high-performance payment tokenization platform
              handling millions of transactions daily. My stack includes Node.js, TypeScript, AWS, React, Spring Boot,
              and Docker.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I thrive in fast-paced, agile environments and enjoy mentoring junior engineers, implementing best
              practices, and driving technical excellence across teams.
            </p>
          </div>
        </motion.div>

        {/* Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="relative p-6 h-full bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{card.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "Node.js",
              "React",
              "AWS",
              "Docker",
              "PostgreSQL",
              "MongoDB",
              "OpenAI API",
              "LangChain",
              "Machine Learning",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-black/30 border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
