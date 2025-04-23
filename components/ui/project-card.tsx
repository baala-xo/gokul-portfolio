"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  techStack: string[]
  imageSrc?: string
  behanceUrl?: string
}

export default function ProjectCard({ title, description, date, techStack, imageSrc, behanceUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden group transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-200 group-hover:text-teal-400 transition-colors">{title}</h3>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {behanceUrl && (
          <div
            className={cn(
              "mt-4 transition-all duration-300 transform",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            <a
              href={behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-behance"
              >
                <path d="M22 7h-7v10h7V7z" />
                <path d="M22 10h-7" />
                <circle cx="8" cy="9" r="2" />
                <path d="M2 11h12" />
                <path d="M6 17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H2v14h9" />
              </svg>
              <span>View on Behance</span>
            </a>
          </div>
        )}
      </div>
      <div
        className={cn(
          "h-1 bg-gradient-to-r from-teal-500 to-teal-300 transition-all duration-500 transform origin-left",
          isHovered ? "scale-x-100" : "scale-x-0",
        )}
      ></div>
    </div>
  )
}
