"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const roles = [
  "Backend Developer",
  "Full Stack Developer",
  "AI Engineer",
  "Frontend Developer",
]

export default function RotatingRoles() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h3
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-zinc-300"
        >
          {roles[index]}
        </motion.h3>
      </AnimatePresence>
    </div>
  )
}
