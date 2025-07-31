"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Payment Tokenization Platform",
      company: "American Express",
      description:
        "Built a high-performance payment tokenization system handling millions of transactions daily with 99.99% uptime and 30% latency reduction.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Node.js", "TypeScript", "MongoDB", "AWS", "Kubernetes"],
      achievements: [
        "Reduced latency by 30% for mission-critical payment APIs",
        "Maintained 99.99% uptime across millions of daily transactions",
        "Ensured PCI compliance & security with robust microservices",
      ],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "AI Document Classifier",
      company: "Personal Project",
      description:
        "Built a transformer-based pipeline for automated document tagging using machine learning and natural language processing.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Python", "FastAPI", "Scikit-learn", "Hugging Face", "Docker"],
      achievements: [
        "Built transformer-based pipeline for automated document tagging",
        "Used TF-IDF and BERT for multi-class classification",
        "Deployed via FastAPI with real-time prediction",
      ],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Financial Data ETL System",
      company: "Smart IMS",
      description:
        "Developed a comprehensive ETL system for processing and cleaning financial data at scale with improved query performance.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Apache Kafka"],
      achievements: [
        "Processed and cleaned financial data at scale",
        "Improved query throughput by 30%",
        "Integrated with third-party APIs using REST and Kafka",
      ],
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world solutions that showcase technical excellence and business impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group h-full"
            >
              <Card className="relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full group-hover:scale-[1.02]">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Overlay Buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center space-x-4"
                  >
                    <Button size="sm" className="bg-black/80 backdrop-blur-sm border border-white/20 hover:bg-white/10">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-cyan-500/80 backdrop-blur-sm hover:bg-cyan-400/80">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs text-purple-400 border-purple-400/30">
                        {project.company}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <p className="text-sm text-gray-400">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 rounded-full text-lg backdrop-blur-sm bg-black/20 transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
