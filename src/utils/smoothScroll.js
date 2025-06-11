// src/utils/smoothScroll.js

/**
 * Smooth scroll to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 80)
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = elementPosition - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};

/**
 * Get the current scroll position
 * @returns {number} Current scroll position
 */
export const getScrollPosition = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Check if an element is in viewport
 * @param {string} elementId - The ID of the element to check
 * @param {number} threshold - Percentage of element that should be visible (0-1)
 * @returns {boolean} Whether element is in viewport
 */
export const isElementInViewport = (elementId, threshold = 0.5) => {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const elementHeight = rect.bottom - rect.top;
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
  return visibleHeight >= (elementHeight * threshold);
};