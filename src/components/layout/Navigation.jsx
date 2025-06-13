// src/components/layout/Navigation.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy, useScrollPosition } from "../../hooks/useScrollSpy";
import { scrollToElement } from "../../utils/smoothScroll";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ["home", "about", "projects", "contact"];
  const activeSection = useScrollSpy(sections);
  const isScrolled = useScrollPosition();

  const handleNavClick = (sectionId) => {
    scrollToElement(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize transition-colors duration-200 relative group ${
                  activeSection === section
                    ? "text-purple-400"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {section}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-transform duration-200 ${
                    activeSection === section
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left px-3 py-3 rounded-lg capitalize transition-colors ${
                  activeSection === section
                    ? "text-purple-400 bg-purple-400/10"
                    : "text-white hover:text-purple-400 hover:bg-white/5"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
