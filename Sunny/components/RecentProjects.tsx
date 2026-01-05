"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import ProjectModal from "./ProjectModal";

const RecentProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

 const filters = ["All", ...Array.from(new Set(projects.map(p => p.category)))];


  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        Featured & <span className="text-purple">Recent Projects</span>
      </h1>

      {/* FILTER TABS */}
      <div className="sticky top-0 z-30 bg-black/60 backdrop-blur py-4 mt-10 flex justify-center gap-4 flex-wrap">
        {filters.map(filter => (
          <button
          aria-label={`Filter projects by ${filter}`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm transition
              ${
                activeFilter === filter
                  ? "bg-purple text-white"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
    {/* PROJECT GRID */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-10">
        <AnimatePresence>
          {filteredProjects.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              // 1. Give the outer wrapper enough height for the 3D animation
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={item.title} href={item.link || "#"}>
                {/* 2. THE FIX: 
                   - Added fixed width/height instead of 'h-full'.
                   - Added background color (bg-[#13162d]).
                   - Added overflow-hidden to keep content inside rounded corners.
                */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  {/* Background container styling */}
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bg-img" /> {/* Optional texture */}
                  </div>
                  
                  {/* Project Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p onClick={() => setSelectedProject(item)} className="flex lg:text-xl md:text-xs text-sm text-purple cursor-pointer">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3 color-[#CBACF9]" />
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default RecentProjects;
