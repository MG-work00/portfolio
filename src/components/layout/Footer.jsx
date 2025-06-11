//src/components/layout/Footer.jsx
import { Github, Linkedin, Mail, MoveUpRight } from "lucide-react";
import Vercel from "../../assets/svgs/vercel.svg";
import ReactJS from "../../assets/svgs/react.svg";
import Vite from "../../assets/svgs/vite.svg";
import TailwindCSS from "../../assets/svgs/tailwindCSS.svg";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-700/50 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Top section with CONNECT and POWERED BY */}
        <div className="flex justify-between items-start mb-12">
          {/* CONNECT section */}
          <div>
            <h3 className="text-sm font-medium mb-6 tracking-wide">CONNECT</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MG-work00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/manish-gohil-ba861a295/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:manishgohil.work.00@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* POWERED BY section */}
          <div>
            <h3 className="text-sm font-medium mb-6 tracking-wide">
              POWERED BY
            </h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-3">
              {/* Vite + React with both logos */}
              <a
                href="https://vitejs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-slate-700/50 hover:border-purple-400"
              >
                <img src={Vite} alt="Vite" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-gray-400">+</span>
                <img
                  src={ReactJS}
                  alt="React"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                {/* Vite + React */}
              </a>

              {/* Other technologies */}
              {[
                {
                  name: "TailwindCSS",
                  logo: TailwindCSS,
                  url: "https://tailwindcss.com",
                },
                { name: "Vercel", logo: Vercel, url: "https://vercel.com" },
              ].map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-slate-700/50 hover:border-purple-400"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  {/* {tech.name} */}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/80 mb-3 sm:mb-0 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <a
            href="https://github.com/MG-work00"
            className="inline-flex items-center space-x-1 text-white/85 hover:text-purple-400 transition-colors duration-200 group"
          >
            <span className="text-sm sm:text-base">
              Brought to you by Manish Gohil
            </span>
            <MoveUpRight
              size={16}
              className="text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
