// src/hooks/useScrollSpy.js
import { useState, useEffect } from 'react';
import { isElementInViewport } from '../utils/smoothScroll';

/**
 * Custom hook to track which section is currently active based on scroll position
 * @param {string[]} sectionIds - Array of section IDs to track
 * @param {number} threshold - Threshold for determining active section (0-1)
 * @returns {string} Currently active section ID
 */
export const useScrollSpy = (sectionIds, threshold = 0.3) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      // Find the first section that is in viewport
      const currentSection = sectionIds.find(sectionId => 
        isElementInViewport(sectionId, threshold)
      );

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once on mount to set initial active section
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, threshold]);

  return activeSection;
};

/**
 * Custom hook to track scroll position and determine if header should be sticky
 * @param {number} threshold - Scroll threshold for sticky header
 * @returns {boolean} Whether header should be sticky
 */
export const useScrollPosition = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};