// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'lg',
  background = 'default',
  ...props 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const backgrounds = {
    default: 'bg-slate-800/50',
    glass: 'bg-white/5 backdrop-blur-sm border border-white/10',
    solid: 'bg-slate-800',
    gradient: 'bg-gradient-to-br from-slate-800/80 to-slate-900/80'
  };
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const hoverEffect = hover ? 'hover:scale-105 hover:shadow-2xl' : '';
  
  const classes = `${baseClasses} ${backgrounds[background]} ${paddings[padding]} ${hoverEffect} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Specialized card variants
export const ProjectCard = ({ project, className = '' }) => {
  return (
    <Card className={`overflow-hidden group ${className}`} hover>
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="bg-slate-700 text-purple-400 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
};

export const ServiceCard = ({ service, className = '' }) => {
  const IconComponent = service.icon;
  
  return (
    <Card className={`text-center group ${className}`} background="glass" hover>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <IconComponent size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-gray-300 leading-relaxed">{service.description}</p>
    </Card>
  );
};

export default Card;