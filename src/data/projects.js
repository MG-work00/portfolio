import jkEnggScreenshot from "../assets/images/jkengg-screenshot.jpg";
import tepnotScreenshot from "../assets/images/tepnot.jpg";
import portfolioSS from "../assets/images/portfolio screenshot.jpg";

export const projects = [
  {
    id: 1,
    title: "JK Engineering Website",
    description:
      "A professional website for JK Engineering, showcasing automated gate solutions, quotation calculator, and client portfolio. Built with modern technologies for a seamless user experience.",
    image: jkEnggScreenshot,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: null,
    live: "https://jkengg.net",
    featured: true,
  },
  {
    id: 2,
    title: "Tepnot Web Chat App",
    description:
      "Contributed to the admin panel of a real-time web chat application, developing secure UI components, optimizing performance, and integrating real-time features for user management.",
    image: tepnotScreenshot,
    tech: ["React", "Node.js", "WebSocket", "Primereact"],
    github: null,
    live: "https://tepnot.com",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.",
    image: portfolioSS,
    tech: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
    github: "https://github.com/MG-work00/portfolio",
    live: "https://portfolio-fawn-iota-31.vercel.app/",
    featured: true,
  },

  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    tech: ["JavaScript", "API Integration", "CSS3", "Chart.js"],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather-dashboard-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.vercel.app",
    featured: false,
  },
];
