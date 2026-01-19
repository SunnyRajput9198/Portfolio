"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/SunnyRajput9198" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sunny-rajput-0551702b4" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/sunnyrajput_lodhi/" },
];

const Footer = () => {
  const handleResumeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;
    window.open(value, "_blank");
    e.target.value = ""; // reset cleanly
  };

  return (
    <footer
      id="contact"
      className="w-full py-20 px-6 bg-[rgb(9,9,11)] border-t border-zinc-800"
    >
      <div className="container mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let’s build something impactful
        </h2>

        <p className="text-zinc-400 max-w-xl mb-10">
          Open to internships, full-time roles, and freelance opportunities
          as a Full Stack / AI Engineer.
        </p>

        {/* Contact CTA */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rajputsny22@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="mb-8"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        {/* Resume Selector (Clean UX) */}
        <div className="relative mb-14 w-full max-w-xs">
          <select
            onChange={handleResumeSelect}
            className="w-full appearance-none bg-zinc-900 border border-zinc-700
            text-white px-5 py-3 rounded-full cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Resume</option>
            <option value="/Sunny_webd.pdf">
              Full Stack Resume
            </option>
            <option value="/Sunny_Ml.pdf">
              AI / ML Resume
            </option>
            <option value="/Sunny_Ai_Full.pdf">
              Full Stack + AI Resume
            </option>
          </select>

          {/* Dropdown arrow */}
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
            ▼
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800 mb-8" />

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm text-zinc-500">
            © 2025 Sunny Rajput. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((info) => (
              <a
                key={info.href}
                href={info.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg
                bg-zinc-900 border border-zinc-800 hover:border-purple-500/50
                transition text-zinc-400 hover:text-white"
              >
                {info.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
