// // src/components/sections/About.jsx
// import { skills, technologies } from '../../data/skills';
// import { SkillBars } from '../ui/ProgressBar';

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Section heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
//           About{' '}
//           <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Me
//           </span>
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left side - About text */}
//           <div className="space-y-6">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
//               Passionate Developer with 5+ Years Experience
//             </h3>
            
//             <p className="text-gray-300 leading-relaxed text-lg">
//               I'm a full-stack developer who loves creating digital experiences that are not only functional but also beautiful. 
//               My journey in web development started 5 years ago, and I've been constantly learning and evolving ever since.
//             </p>
            
//             <p className="text-gray-300 leading-relaxed text-lg">
//               I specialize in React, Node.js, and modern web technologies. I believe in writing clean, maintainable code 
//               and creating user interfaces that are both intuitive and visually appealing.
//             </p>
            
//             <div className="space-y-4">
//               <h4 className="text-xl font-semibold text-white">What I Do:</h4>
//               <ul className="space-y-2 text-gray-300">
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
//                   Frontend Development with React & Vue.js
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
//                   Backend Development with Node.js & Python
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
//                   Database Design & Management
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
//                   UI/UX Design & Prototyping
//                 </li>
//               </ul>
//             </div>
            
//             {/* Technologies */}
//             <div className="pt-6">
//               <h4 className="text-xl font-semibold text-white mb-4">Technologies I Work With:</h4>
//               <div className="flex flex-wrap gap-3">
//                 {technologies.map((tech) => (
//                   <span 
//                     key={tech} 
//                     className="bg-slate-800 text-purple-400 px-3 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Right side - Skills */}
//           <div className="space-y-8">
//             <div>
//               <h4 className="text-xl font-semibold text-white mb-6">My Skills</h4>
//               <SkillBars skills={skills} />
//             </div>
            
//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-700">
//               <div className="text-center">
//                 <h5 className="text-3xl font-bold text-purple-400 mb-2">50+</h5>
//                 <p className="text-gray-300">Projects Completed</p>
//               </div>
//               <div className="text-center">
//                 <h5 className="text-3xl font-bold text-purple-400 mb-2">5+</h5>
//                 <p className="text-gray-300">Years Experience</p>
//               </div>
//               <div className="text-center">
//                 <h5 className="text-3xl font-bold text-purple-400 mb-2">30+</h5>
//                 <p className="text-gray-300">Happy Clients</p>
//               </div>
//               <div className="text-center">
//                 <h5 className="text-3xl font-bold text-purple-400 mb-2">24/7</h5>
//                 <p className="text-gray-300">Support</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import CSS from '../../assets/svgs/css.svg';
import Figma from '../../assets/svgs/figma.svg';
import Framer from '../../assets/svgs/framer.svg';
import Github from '../../assets/svgs/github.svg';
import HTML from '../../assets/svgs/html.svg';
import JavaScript from '../../assets/svgs/javaScript.svg';
import MUI from '../../assets/svgs/mui.svg';
import Next from '../../assets/svgs/next.svg';
import ReactJS from '../../assets/svgs/react.svg';
import Redux from '../../assets/svgs/redux.svg';
import TailwindCSS from '../../assets/svgs/tailwindCSS.svg';
import Vercel from '../../assets/svgs/vercel.svg';
import Vite from '../../assets/svgs/vite.svg';

const About = () => {
  const technologies = [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'JavaScript', icon: JavaScript },
    { name: 'React', icon: ReactJS },
    { name: 'Next.js', icon: Next },
    { name: 'Redux', icon: Redux },
    { name: 'Tailwind CSS', icon: TailwindCSS },
    { name: 'MUI', icon: MUI },
    { name: 'Figma', icon: Figma },
    { name: 'Framer', icon: Framer },
    { name: 'GitHub', icon: Github },
    { name: 'Vercel', icon: Vercel },
    { name: 'Vite', icon: Vite },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Crafting Digital Experiences with Over 2 Years of Expertise
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              With more than two years of experience, I specialize in building intuitive and visually stunning digital interfaces that prioritize user engagement. My passion lies in transforming ideas into seamless, responsive experiences that delight users across devices.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              I thrive on solving complex challenges with clean, efficient code and a keen eye for design. My work focuses on creating solutions that are both functional and aesthetically pleasing, ensuring every project delivers value and impact.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What I Do:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Building responsive and interactive user interfaces
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Creating scalable and maintainable applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Designing intuitive user experiences
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Optimizing performance for seamless interactions
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Technologies */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Technologies I Work With:</h4>
              <div className="overflow-hidden">
                <div className="flex animate-scroll">
                  {[...technologies, ...technologies].map((tech, index) => (
                    <div
                      key={`${tech.name}-${index}`}
                      className="flex items-center gap-3 px-4 py-2 mx-2 bg-slate-800 text-purple-400 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors flex-shrink-0"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6"
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default About;