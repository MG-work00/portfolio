// src/components/sections/Hero.jsx
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import Button from "../ui/Button";
import { scrollToElement } from "../../utils/smoothScroll";

const Hero = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/MG-work00", label: "GitHub" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/manish-gohil-ba861a295/",
      label: "LinkedIn",
    },
    { icon: Mail, url: "mailto:manishgohil.work.00@gmail.com", label: "Email" },
  ];

  const handleDownloadClick = () => {
    const cvUrl = "./Manish Gohil Frontend Dev Resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = cvUrl;
    downloadLink.download = "Manish Gohil Frontend Dev Resume.pdf";
    downloadLink.click();
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20">
          {" "}
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Profile image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">MG</span>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Manish Gohil
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Web Developer
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft modern, responsive websites and web applications that deliver
          outstanding user experiences through clean code and thoughtful design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={() => scrollToElement("projects")}
            icon={ArrowRight}
            iconPosition="right"
            size="lg"
            className="group"
          >
            View My Work
          </Button>

          <Button
            variant="secondary"
            icon={Download}
            size="lg"
            onClick={handleDownloadClick}
          >
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/5"
                aria-label={social.label}
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
