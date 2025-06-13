// src/components/sections/Projects.jsx
import { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/Card";
import Button from "../ui/Button";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Get unique technologies for filter buttons
  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.tech)),
  ];
  const filterOptions = ["all", ...allTechnologies];

  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  // Show limited projects initially
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section heading */}

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Projects
            </span>
          </h2>
        </div>

        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === option
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {option === "all" ? "All Projects" : option}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
              {showAll
                ? "Show Less"
                : `Show All ${filteredProjects.length} Projects`}
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
