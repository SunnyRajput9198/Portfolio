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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(9,9,11)] pt-24 sm:pt-28">
      
      {/* Spotlights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full hidden md:block" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] hidden lg:block" fill="blue" />
      </div>

      {/* Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 grid gap-14 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-1000">

          {/* Status */}
          <div className="flex items-center gap-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-green-500" />
            </span>
            <p className="text-zinc-400 uppercase tracking-wide text-xs">
              Available for freelance work
            </p>
          </div>

          {/* Intro */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Hi, I&apos;m <span className="text-blue-500">Sunny</span>
            </h1>

            <RotatingRoles />

            <p className="text-base sm:text-lg text-zinc-400 max-w-full sm:max-w-xl leading-relaxed">
              I am a Full Stack Engineer who builds scalable, real-time web applications
              and integrates AI/ML to create intelligent, user-centric products.
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-wrap gap-6 text-zinc-400 text-sm">
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-blue-500 text-lg" />
              Based in India
            </div>
            <div className="flex items-center gap-2">
              <HiBriefcase className="text-blue-500 text-lg" />
              Available Now
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold transition hover:bg-zinc-200 active:scale-95 w-full sm:w-auto">
              Hire Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Sunny_webd.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-zinc-800 text-white px-8 py-3.5 rounded-full font-bold transition hover:bg-white/5 active:scale-95 w-full sm:w-auto"
            >
              <FiDownload />
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="pt-4 border-t border-zinc-800/50">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                Follow me:
              </span>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition text-xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:block">
          <div className="aspect-square rounded-3xl overflow-hidden border border-zinc-800">
            <img
              src="/Sunnyimg2.jpeg"
              alt="Sunny"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
