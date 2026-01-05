"use client";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="bg-[#0b0b14] max-w-2xl w-[90%] rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white"
        >
          ✕
        </button>

        <img
          src={project.img}
          alt={project.title}
          className="rounded-xl mb-4"
        />

        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
        <p className="text-zinc-400 mt-2">{project.des}</p>

        <div className="flex flex-wrap gap-3 mt-4">
          {project.iconLists.map((icon: string, i: number) => (
            <img key={i} src={icon} className="w-8 h-8" />
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          className="inline-block mt-6 text-purple hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}
