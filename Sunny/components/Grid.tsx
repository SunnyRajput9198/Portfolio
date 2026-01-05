import { FaGraduationCap, FaCode, FaFolderOpen } from "react-icons/fa6"

const Grid = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[rgb(9,9,11)]">
      <div className="container mx-auto">
        <p className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-4">About Me</p>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Building Meaningful
            <br />
            Digital Experiences
          </h1>
        </div>

        <div className="w-full h-px bg-zinc-800 mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                I&apos;m a creative front-end developer passionate about building modern and responsive web experiences.
                My journey began with a love for design and evolved into a deep curiosity for how the web works —
                combining logic with creativity to bring ideas to life.
              </p>
              <p>
                When I&apos;m not coding, I enjoy learning new technologies, improving my projects, and exploring better
                ways to make the web faster and more engaging. I believe in continuous learning, attention to detail,
                and the power of clean, meaningful design.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">What Drives Me</h2>

              <div className="grid gap-6">
                <div className="group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:bg-zinc-900 hover:border-blue-500/50">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                    <FaCode className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Languages</h3>
                    <p className="text-zinc-500">HTML, CSS, JavaScript, Java, C, React</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:bg-zinc-900 hover:border-purple-500/50">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Education</h3>
                    <p className="text-zinc-500">USTHB in Computer Science</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:bg-zinc-900 hover:border-cyan-500/50">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <FaFolderOpen className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Projects</h3>
                    <p className="text-zinc-500">Built more than 5 projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group lg:sticky lg:top-32">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800">
              <img
                src="/img2.jpg"
                alt="About Me"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid
