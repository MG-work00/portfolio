// src/components/ui/Card.jsx
import { Github, ExternalLink, Star } from "lucide-react";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "lg",
  background = "default",
  ...props
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";

  const backgrounds = {
    default: "bg-slate-800/50",
    glass: "bg-white/5 backdrop-blur-sm border border-white/10",
    solid: "bg-slate-800",
    gradient: "bg-gradient-to-br from-slate-800/80 to-slate-900/80",
  };

  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const hoverEffect = hover ? "hover:scale-105 hover:shadow-2xl" : "";

  const classes = `${baseClasses} ${backgrounds[background]} ${paddings[padding]} ${hoverEffect} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const ProjectCard = ({ project, className = "" }) => {
  return (
    <Card className={`overflow-hidden group ${className}`} hover>
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Star size={14} fill="currentColor" />
              Featured
            </div>
          </div>
        )}

        {/* Action buttons - show on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={16} />
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-slate-700 text-purple-400 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project links */}
      <div className="flex gap-4 pt-4 border-t border-slate-700">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 font-medium"
          >
            <Github size={18} />
            Code
          </a>
        )}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 font-medium"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      </div>
    </Card>
  );
};

export default Card;
