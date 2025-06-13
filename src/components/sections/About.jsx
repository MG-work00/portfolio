// src/components/sections/About.jsx
import CSS from "../../assets/svgs/css.svg";
import Figma from "../../assets/svgs/figma.svg";
import Framer from "../../assets/svgs/framer.svg";
import Github from "../../assets/svgs/github.svg";
import HTML from "../../assets/svgs/html.svg";
import JavaScript from "../../assets/svgs/javaScript.svg";
import MUI from "../../assets/svgs/mui.svg";
import Sass from "../../assets/svgs/sass.svg";
import Next from "../../assets/svgs/next.svg";
import ReactJS from "../../assets/svgs/react.svg";
import Redux from "../../assets/svgs/redux.svg";
import TailwindCSS from "../../assets/svgs/tailwindCSS.svg";
import Vercel from "../../assets/svgs/vercel.svg";
import Vite from "../../assets/svgs/vite.svg";
import Boostrap from "../../assets/svgs/bootstrap.svg";
import Postman from "../../assets/svgs/postman.svg";

const About = () => {
  const technologies = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: JavaScript },
    { name: "React", icon: ReactJS },
    { name: "Next.js", icon: Next },
    { name: "Vite", icon: Vite },
    { name: "Redux", icon: Redux },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "MUI", icon: MUI },
    { name: "Boostrap", icon: Boostrap },
    { name: "Sass", icon: Sass },
    { name: "Figma", icon: Figma },
    { name: "Framer", icon: Framer },
    { name: "GitHub", icon: Github },
    { name: "Vercel", icon: Vercel },
    { name: "Postman", icon: Postman },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 min-h-screen flex items-center bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Web Developer with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    2+ Years Experience
                  </span>
                </h3>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    I'm a dedicated web developer focused on creating visually
                    engaging, user-friendly websites and web apps. I specialize
                    in building intuitive interfaces that are both functional
                    and aesthetically pleasing.
                  </p>

                  <p className="text-lg">
                    Over the past 2+ years, I’ve worked extensively with modern
                    frontend technologies like React, Tailwind CSS, and Material
                    UI. I take pride in turning complex ideas into elegant,
                    responsive digital experiences.
                  </p>

                  <p className="text-lg">
                    I stay up to date with the latest web development trends and
                    best practices, ensuring my work is fast, accessible, and
                    future-proof. My goal is always to deliver solutions that
                    blend design, performance, and usability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Technologies */}
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-white mb-4">
                Technologies & Tools
              </h4>
              <p className="text-gray-400 text-lg">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                  {/* Card */}
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-purple-400/50 animate-fade-in-up">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
