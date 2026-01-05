export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-left",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/ai1.jpeg",
    spareImg: "",
  },
  {
    id: 3,
    title: "I constantly try to improve My tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/AI.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Turning Tech Passion into Innovative Development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: " w-full h-full",
    titleClassName: "justify-start",
    img: "/ai4.jpg",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently building an Ecommerce platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
   {
    id: 5,
    title: "2D Metaverse - Virtual Collaboration Platform",
    des: "An immersive browser-based metaverse where users can chat, move, video call, and share screens in real time — built with WebSocket, WebRTC, and a full-stack architecture.",
    img: "/metaspace.png", // replace with your actual project thumbnail
    category: "Full Stack",
featured: true,
    iconLists: [
      "/skills/next.png",
      "skills/tailwind.png",
      "/skills/ts.png",
      "/skills/express.png",
      "/skills/postgresql.png", // or Prisma icon if you have it
      "/skills/docker.png",
    ],
    link: "https://github.com/SunnyRajput9198/2-d-metaverse",
  },
{
  id: 6,
  title: "Muzer – Collaborative Music Streaming Platform",
  des: "A real-time party music experience: create shared rooms, queue YouTube tracks, vote on the next song, and listen together in sync.",
  img: "/Muzer.png", // replace with a screenshot or visual thumbnail of Muzer
  category: "Full Stack",
  featured: true,
  iconLists: [
    "/skills/next.png",
    "/skills/ts.png",
    "/skills/express.png",
    "/skills/postgresql.png",
    "/skills/docker.png",
  ],
  link: "https://github.com/SunnyRajput9198/muzer"
},
{
  id: 7,
  title: "Millet – Agricultural Goods Ecommerce Site",
  des: "A tailored online marketplace for agricultural products, streamlined for both buyers and sellers in the agri-supply chain.",
  img: "/millet.png", // replace with an actual screenshot or visual asset of the project
  category: "Full Stack",
  featured: true,
  iconLists: [
    "/skills/react.png",      // example – adjust based on actual stack
    "/skills/express.png",        // backend or server logic
    "/skills/ts.png",          // if you used TypeScript
    "/skills/postgresql.png",     // or whichever database you used
    "/skills/prisma.png"      , // optionally, for containerisation,
    "/skills/postgresql.png"     // if containerised/deployed
  ],
  link: "https://github.com/SunnyRajput9198/Millet"
},
 {
  id: 8,
  title: "RAG-Based AI Assistant",
  des: "A knowledge-infused conversational assistant built using Retrieval-Augmented Generation, enabling natural-language queries over custom content with enhanced accuracy and context.",
  img: "/Rag.png", // replace with a screenshot of the assistant UI or architecture diagram
  category: "AI / ML",
  featured: true,
  iconLists: [
    "/skills/numpy-seeklogo.png",  // if it's built in Python
    "/skills/keras-seeklogo.png", 
    "/skills/tensorflow-seeklogo.png",
    "/skills/pandas-seeklogo.png",    // if there’s a Node.js component
    "/skills/python-seeklogo.png",  // if containerised
  ],
  link: "https://github.com/SunnyRajput9198/RAG-Based-Ai-Assistant"
},
{
  id: 9,
  title: "Smart-Study-Scheduler – Adaptive Study Planner",
  des: "An intelligent scheduler that helps students organise and prioritise study sessions, track tasks and manage time effectively to boost productivity.",
  img: "/schedular.png", // replace this with a strong thumbnail or screenshot of the project
  category: "AI / ML",
  featured: true,
  iconLists: [
    "/skills/next.png",       // example – adjust based on actual stack
    "/skills/express.png",        // backend or server logic
    "/skills/ts.png",          // if you used TypeScript
    "/skills/postgresql.png",     // or whichever database you used
    "/skills/prisma.png"      , // optionally, for containerisation,
    "/skills/postgresql.png" ,    // if containerised/deployed
    "/skills/flask-seeklogo.png" ,    // if containerised/deployed
    "/skills/python-seeklogo.png" ,    // if containerised/deployed
  ],
  link: "https://github.com/SunnyRajput9198/Smart-study-schedular"
}
,
{
  id: 10,
  title: "Image Builder – Custom Asset/Media Generator",
  des: "A versatile tool for building and managing image assets (sprites, thumbnails, composites) with customizable pipelines and workflows.",
  img: "/image.jpg", // replace with a screenshot or thumbnail of the tool in action
  category: "Full Stack",
  featured: true,
  iconLists: [
"skills/express.png",      // Node.js
"skills/ts.png",        // TypeScript
"skills/next.png",      // Next.js
"skills/python-seeklogo.png",      // Python
"skills/flask-seeklogo.png",      // Flask

  ],
  link: "https://github.com/SunnyRajput9198/image-builder"
}
,{
  id: 11,
  title: "Object Detection – Intelligent Visual Recognition System",
  des: "A computer-vision tool that uses deep learning to detect and classify objects in images or video streams, built to automate visual-analysis workflows.",
  img: "/Open.png", // replace this with a screenshot of the model output/visual results
  category: "AI / ML",
  featured: true,
  iconLists: [
   "/skills/numpy-seeklogo.png",       // Python
   "/skills/python-seeklogo.png",   // or PyTorch depending on the framework
   "/skills/pandas-seeklogo.png",   // or PyTorch depending on the framework
   "/skills/opencv-seeklogo.png",       // for image processing
   "/skills/keras-seeklogo.png",       // for deep learning
   "/skills/tensorflow-seeklogo.png",       // for deep learning
   "/skills/Ultralytics YOLOv8.png",       // for deep learning
  ],
  link: "https://github.com/SunnyRajput9198/object-detection"
}
];


export const testimonials = [
  {
    quote:
      "Working with Huzaif was a seamless experience. His expertise and creativity turned my ideas into reality with precision and style. Highly recommended for anyone looking to build something impactful.",
    name: "Abdul Rahman",
    image: "/ar.webp",
    title: "Founder of JustBuyz Ecommerce",
  },
  {
    quote:
      "Huzaif’s dedication and attention to detail really impressed me. The project was delivered on time with exceptional quality. He’s truly passionate about development and it shows in his work.",
    name: "Mohammad Mustaqeem",
    image: "/mm.webp",
    title: "CEO of TechSolutions",
  },
  {
    quote:
      "From start to finish, Huzaif ensured clear communication and delivered beyond expectations. His ability to merge design with functionality makes him stand out as a developer.",
    name: "Suleman Khan",
    image:"/sk.webp",
    title: "Director at Innovatech",
  },
];


export const companies = [
  {
    id: 1,
    name: "css",
    img: "/skills/css.png",
    nameImg: "",
  },
  {
    id: 2,
    name: "Express",
    img: "/skills/express.png",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Figma",
    img: "/skills/figma.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "HTML",
    img: "/skills/html.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "JavaScript",
    img: "/skills/js.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "MySQL",
    img: "/skills/mysql.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Next.js",
    img: "/skills/next.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Node.js",
    img: "/skills/node.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "PostgreSQL",
    img: "/skills/postgresql.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Prisma",
    img: "/skills/prisma.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "React",
    img: "/skills/react.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Tailwind",
    img: "/skills/tailwind.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Tensorflow",
    img: "/skills/tensorflow-seeklogo.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Keras",
    img: "/skills/keras-seeklogo.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Matplotlib",
    img: "/skills/matplotlib-seeklogo.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Razorpay",
    img: "/skills/razorpay-seeklogo.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Pandas",
    img: "/skills/pandas-seeklogo.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Numpy",
    img: "/skills/numpy-seeklogo.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Scikit-learn",
    img: "/skills/scikit-learn-seeklogo.png",
    nameImg: "/dockerName.svg",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Backend Developer",
    desc: "Engineered and optimized high-performance backend systems and APIs using Node.js, Express, and PostgreSQL. Focused on building scalable, secure, and maintainable architectures.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack & AI Engineer",
    desc: "Designed and developed full-stack web applications integrating AI-powered features using React, Next.js, Node.js, and Python-based ML models. Ensured seamless interaction between intelligent systems and the user interface.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance AI & Web Development Project",
    desc: "Delivered an end-to-end client project combining responsive UI design, backend logic, and machine learning insights. Managed the full lifecycle from concept to deployment and optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Built dynamic, responsive user interfaces using React, TypeScript, and Tailwind CSS. Collaborated closely with backend and AI teams to deliver intelligent and visually appealing user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
