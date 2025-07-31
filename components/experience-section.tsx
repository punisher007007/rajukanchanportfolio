"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Building, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const experiences = [
    {
      company: "American Express",
      position: "Software Engineer II",
      duration: "Aug 2024 – Present",
      location: "New York, NY",
      description: "Leading development of high-scale payment processing systems and microservices architecture.",
      achievements: [
        "Built scalable REST APIs handling millions of payment transactions daily",
        "Improved system uptime to 99.99% and reduced incident response time by 40%",
        "Mentored junior developers and led microservice optimization initiatives",
        "Implemented automated testing strategies reducing deployment time by 50%",
        "Collaborated with cross-functional teams to deliver PCI-compliant solutions",
      ],
      tech: ["Node.js", "TypeScript", "AWS", "Kubernetes", "MongoDB", "Redis"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Smart IMS",
      position: "Software Engineer",
      duration: "Sep 2020 – Nov 2022",
      location: "Remote",
      description: "Developed enterprise-grade financial data processing systems and ETL pipelines.",
      achievements: [
        "Developed real-time ETL workflows for financial data processing",
        "Automated CI/CD pipelines using Docker and Jenkins",
        "Improved data processing efficiency by 35% through optimization",
        "Supported Agile ceremonies and best practices adoption",
        "Built responsive web interfaces for data visualization",
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Jenkins", "React"],
      color: "from-green-500 to-emerald-500",
    },
    {
      company: "Capgemini",
      position: "Associate Software Engineer",
      duration: "Apr 2019 – Jul 2020",
      location: "Mumbai, India",
      description: "Started career developing web applications and database solutions for enterprise clients.",
      achievements: [
        "Designed and implemented SQL database schemas for client applications",
        "Built responsive web UIs using modern JavaScript frameworks",
        "Improved system maintainability through code refactoring initiatives",
        "Participated in code reviews and knowledge sharing sessions",
        "Contributed to technical documentation and best practices",
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "SQL", "Java", "Spring"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Experience Timeline
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of growth, learning, and technical excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-black shadow-lg`}
                />

                <Card className="relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="p-6 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                        <div className="flex items-center space-x-2 text-gray-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <Badge variant="outline" className={`bg-gradient-to-r ${exp.color} text-white border-none`}>
                          {exp.duration}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-white/5 text-gray-300 border-white/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
                    >
                      <span className="text-sm font-medium">
                        {expandedCard === index ? "Show Less" : "Show Achievements"}
                      </span>
                      {expandedCard === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    {/* Achievements (Expandable) */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedCard === index ? "auto" : 0,
                        opacity: expandedCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={expandedCard === index ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                            <p className="text-sm text-gray-300">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
