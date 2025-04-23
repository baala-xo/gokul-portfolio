"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "IoT Based Car Pollution Detection",
      description:
        "A system that uses IoT sensors to detect and monitor car pollution levels in real-time, helping to identify vehicles exceeding emission standards.",
      date: "2023",
      techStack: ["IoT", "Sensors", "Data Analysis", "Python"],
      imageSrc: "/iot.jpeg?height=225&width=400",
      behanceUrl: "https://www.behance.net/gokulprasanth/iot-pollution-detection",
    },
    {
      title: "Augmented Reality Application",
      description:
        "A mini project exploring augmented reality technology to create an interactive and immersive user experience for educational purposes.",
      date: "2022",
      techStack: ["AR", "Mobile Development", "3D Modeling", "UI/UX"],
      imageSrc: "/AR.jpeg?height=225&width=400",
      behanceUrl: "https://www.behance.net/gokulprasanth/ar-application",
    },
  ]

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Projects" subtitle="My academic and personal projects" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 200}ms` : "0ms",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              date={project.date}
              techStack={project.techStack}
              imageSrc={project.imageSrc}
              behanceUrl={project.behanceUrl}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
