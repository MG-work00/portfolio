// src/components/sections/Projects.jsx
import React, { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/Card';
import Button from '../ui/Button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Get unique technologies for filter buttons
  const allTechnologies = [...new Set(projects.flatMap(project => project.tech))];
  const filterOptions = ['all', ...allTechnologies];

  // Filter projects based on selected filter
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tech.includes(filter));

  // Show limited projects initially
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Featured{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === option
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {option === 'all' ? 'All Projects' : option}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-slate-800/50 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Project image */}
                <div className="relative overflow-hidden">
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={16} />
                    </a>
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
                
                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-slate-700 text-purple-400 px-2 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project links */}
                  <div className="flex gap-4 pt-4 border-t border-slate-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
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
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show more/less button */}
        {filteredProjects.length > 6 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              size="lg"
            >
              {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
            </Button>
          </div>
        )}
        
        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found for the selected technology.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;