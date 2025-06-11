// src/components/ui/ProgressBar.jsx
import React, { useState, useEffect } from 'react';

const ProgressBar = ({ 
  skill, 
  delay = 0, 
  duration = 1000,
  showPercentage = true,
  className = '' 
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setProgress(skill.level);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium text-lg">{skill.name}</span>
        {showPercentage && (
          <span className="text-purple-400 font-semibold">
            {isVisible ? `${skill.level}%` : '0%'}
          </span>
        )}
      </div>
      
      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all ease-out shadow-lg"
          style={{ 
            width: `${progress}%`,
            transitionDuration: `${duration}ms`
          }}
        >
          <div className="h-full bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

// Animated skill bars container
export const SkillBars = ({ skills, className = '' }) => {
  return (
    <div className={className}>
      {skills.map((skill, index) => (
        <ProgressBar 
          key={skill.name}
          skill={skill}
          delay={index * 200} // Stagger animation
        />
      ))}
    </div>
  );
};

export default ProgressBar;