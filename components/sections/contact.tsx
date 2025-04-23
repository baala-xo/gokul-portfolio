"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Send, Github, Linkedin } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://formspree.io/f/xpwdzype", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-teal-400" />,
      label: "Location",
      value: "Tiruppur, Tamil Nadu, India",
    },
    {
      icon: <Phone className="h-5 w-5 text-teal-400" />,
      label: "Phone",
      value: "+91 9677962941",
    },
    {
      icon: <Mail className="h-5 w-5 text-teal-400" />,
      label: "Email",
      value: "gokulprasanthsj@gmail.com",
    },
  ]

  return (
    <section id="contact" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Contact Me" subtitle="Let's get in touch" />

      <div className="grid md:grid-cols-2 gap-10">
        <div
          className={cn(
            "space-y-6 opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-sm text-gray-400">{info.label}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/sjgokul12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gokul-prasanth-s-75474924a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Send Me a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-gray-400 mb-1 block">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-gray-400 mb-1 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-gray-400 mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500/20 min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
              >
                <Send className="h-4 w-4 mr-2" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && (
                <p className="text-green-400 text-sm pt-2">Your message has been sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm pt-2">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="mt-20 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Gokul Prasanth S. All rights reserved.</p>
      </div>
    </section>
  )
}
