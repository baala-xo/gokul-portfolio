"use client"

import { useState, useEffect } from "react"
import { Briefcase, School, Award, Users } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      icon: <Briefcase className="h-6 w-6 text-teal-400" />,
      title: "Data Science Intern",
      organization: "LITX Technologies",
      period: "Summer 2024",
      description: "Gained knowledge on Data Science and completed assignments related to the topic.",
      type: "professional",
    },
    {
      icon: <School className="h-6 w-6 text-teal-400" />,
      title: "Industrial Visit",
      organization: "Zephyr Technologies",
      period: "2024",
      description: "Participated in an industrial visit to learn about industry practices and technologies.",
      type: "academic",
    },
    {
      icon: <School className="h-6 w-6 text-teal-400" />,
      title: "Industrial Visit",
      organization: "GKVK, NCBS, and IISc, Bangalore",
      period: "2023",
      description: "Participated in an educational visit to premier research institutions.",
      type: "academic",
    },
    {
      icon: <Award className="h-6 w-6 text-teal-400" />,
      title: "NSS Coordinator",
      organization: "National Level Camp",
      description: "Participated as NSS coordinator in a national level camp.",
      type: "extracurricular",
    },
    {
      icon: <Award className="h-6 w-6 text-teal-400" />,
      title: "NCC Participant",
      organization: "District Level Camp",
      description: "Participated in NCC District Level Camp.",
      type: "extracurricular",
    },
    {
      icon: <Award className="h-6 w-6 text-teal-400" />,
      title: "YRC Participant",
      organization: "District Level Camp",
      description: "Participated in YRC District Level Camp.",
      type: "extracurricular",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-400" />,
      title: "Team Chairman",
      organization: "Youth Red Cross",
      description: "Served as Team Chairman, demonstrating leadership and organizational skills.",
      type: "leadership",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-400" />,
      title: "Team Captain",
      organization: "Cricket Team",
      description: "Led the cricket team as captain, showcasing teamwork and leadership abilities.",
      type: "leadership",
    },
  ]

  const categories = [
    { id: "all", label: "All" },
    { id: "professional", label: "Professional" },
    { id: "academic", label: "Academic" },
    { id: "extracurricular", label: "Extracurricular" },
    { id: "leadership", label: "Leadership" },
  ]

  const [activeCategory, setActiveCategory] = useState("all")

  const filteredExperiences = experiences.filter((exp) => activeCategory === "all" || exp.type === activeCategory)

  return (
    <section id="experience" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Experience & Activities" subtitle="Professional and extracurricular experiences" />

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-all duration-300",
              activeCategory === category.id
                ? "bg-teal-500 text-gray-900"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredExperiences.map((exp, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-5 opacity-0 transform translate-y-8 transition-all duration-500",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-800/50 rounded-lg flex-shrink-0">{exp.icon}</div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-200">{exp.title}</h3>
                  {exp.period && <span className="text-sm text-teal-400 sm:ml-auto">{exp.period}</span>}
                </div>
                <p className="text-gray-400 text-sm mb-2">{exp.organization}</p>
                <p className="text-gray-500">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
