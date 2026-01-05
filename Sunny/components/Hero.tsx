import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa6"
import { HiLocationMarker, HiBriefcase } from "react-icons/hi"
import { FiArrowRight, FiDownload } from "react-icons/fi"
import { Spotlight } from "@/components/ui/Spotlight"
import RotatingRoles from "./rotatingroles"

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/SunnyRajput9198",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/sunny-rajput-0551702b4",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/sunnyrajput_lodhi/",
  },
]

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(9,9,11)] pt-20">
      {/* Spotlights for visual depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          {/* Status Badge */}
          <div className="flex items-center space-x-2 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-zinc-400 tracking-wide uppercase text-xs">Available for freelance work</p>
          </div>

          {/* Intro Text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Hi, I&apos;m <span className="text-blue-500">Sunny</span>
            </h1>
            <RotatingRoles />
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              I am a Full Stack Engineer who builds scalable, real-time web applications
              and integrates AI/ML to create intelligent, user-centric products.

              My strength lies in connecting modern frontend experiences with robust
              backend systems and AI-powered features such as recommendations,
              automation, and real-time intelligence.

            </p>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 text-zinc-400 text-sm">
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-blue-500 text-lg" />
              <span>Based in India</span>
            </div>
            <div className="flex items-center gap-2">
              <HiBriefcase className="text-blue-500 text-lg" />
              <span>Available Now</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="group relative flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold transition-all hover:bg-zinc-200 active:scale-95">
              Hire Me
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/Sunny_webd_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-800 text-white px-8 py-3.5 rounded-full font-bold transition-all hover:bg-white/5 active:scale-95"
            >
              <FiDownload />
              Download CV
            </a>

          </div>

          <div className="pt-4 border-t border-zinc-800/50">
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Follow me:</span>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors text-xl"
                    aria-label="social link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block relative group">
          <div className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden border border-zinc-800">
            <img
              src="/Sunnyimg2.jpeg"
              alt="Sunny"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
