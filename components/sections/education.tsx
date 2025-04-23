"use client"

import { useState, useEffect } from "react"
import { GraduationCap } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function Education() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const education = [
    {
      degree: "MSc Information Technology",
      institution: "Hindusthan College of Arts & Science",
      year: "2023-25",
      score: "74 CGPA",
      courses: [
        "Advanced Java Programming",
        "Database System Concepts",
        "Advance Networking Technologies",
        "Mobile Application Development",
        "Software Engineering with Agile DevOps",
        "Operating System",
      ],
    },
    {
      degree: "BSc Information Technology",
      institution: "Hindusthan College of Arts & Science",
      year: "2020-23",
      score: "79 CGPA",
      courses: [
        "Data Structures and Algorithms",
        "Web Development",
        "Programming using C",
        "Operation Research",
        "Network Security and Cryptography",
        "Database Management System",
      ],
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Govt Hr Sec School Anupparpalayam Tiruppur",
      year: "2019-20",
      score: "62%",
    },
    {
      degree: "Secondary School (10th)",
      institution: "Bishop Ubagarasaamy Swamy Higher Sec School",
      year: "2017-18",
      score: "61%",
    },
  ]

  return (
    <section id="education" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Education" subtitle="My academic journey" />

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 150}ms` : "0ms",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gray-800/50 rounded-lg text-teal-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-200">{edu.degree}</h3>
                  <span className="text-teal-400 text-sm md:text-base">{edu.year}</span>
                </div>
                <p className="text-gray-400 mb-1">{edu.institution}</p>
                <p className="text-gray-500 mb-3">Score: {edu.score}</p>

                {edu.courses && (
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span key={courseIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
