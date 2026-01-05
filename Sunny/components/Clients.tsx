"use client";

import { motion } from "framer-motion";

const stackData = [
  {
    category: "Frontend",
    desc: "Building responsive & interactive UIs",
    techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    category: "Backend",
    desc: "Server-side logic & APIs",
    techs: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    category: "Database",
    desc: "Data storage & management",
    techs: ["MongoDB", "PostgreSQL", "Redis"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "AI / ML",
    desc: "Intelligence & Automation",
    techs: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "DevOps",
    desc: "Deployment & CI/CD",
    techs: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Vercel"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Tools",
    desc: "Workflow & Collaboration",
    techs: ["Git", "Figma", "Postman", "Linux"],
    color: "from-yellow-500 to-amber-500",
  },
];

const TechStack = () => {
  return (
    <section className="py-20 w-full" id="tech-stack">
      <h1 className="heading mb-12 text-center text-4xl font-bold text-white">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      {/* 🔴 IMPORTANT: overflow-visible */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 lg:px-20 overflow-visible">
        {stackData.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="group relative rounded-2xl overflow-visible"
          >
            {/* 🔥 OUTER GLOW — REAL FIX */}
            <div
              className={`pointer-events-none absolute -inset-8
              bg-gradient-to-r ${item.color}
              blur-[90px] opacity-0
              group-hover:opacity-30
              transition-opacity duration-500
              z-0`}
            />

            {/* CARD */}
            <div
              className="relative z-10 h-full bg-[#13162d] rounded-2xl p-6
              border border-white/10 flex flex-col justify-between
              hover:border-white/20 transition-all duration-300
              overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {item.category}
                  </h3>
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.color}`} />
                </div>

                <p className="text-zinc-400 text-sm mb-6">
                  {item.desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {item.techs.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1 text-xs font-medium text-purple
                      bg-violet-500/10 border border-violet-500/20 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
