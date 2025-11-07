import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="relative pb-20 pt-36 overflow-hidden">
      {/* Fullscreen Dark Background */}
      <div className="absolute inset-0 bg-[rgb(9,9,11)] z-0" />

      {/* Radial Mask Overlay */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center 
        bg-[rgb(9,9,11)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-[1]"
      />

      {/* Spotlights (above bg, below text) */}
      <div className="absolute inset-0 z-[2]">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-[5] flex flex-col items-center justify-center text-center px-4">
        <p className="uppercase tracking-widest text-xs text-blue-100 mb-4">
          Dynamic Web Magic with End to End Development
        </p>

        <TextGenerateEffect
          words="Transforming Visions into Flawless User Experiences."
          className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
        />

        <p className="text-white text-sm md:text-lg lg:text-2xl mt-3 mb-5">
          Hi! I&apos;m Sunny, a Full-Stack Developer & AI Engineer.
        </p>

        <a href="#about">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
