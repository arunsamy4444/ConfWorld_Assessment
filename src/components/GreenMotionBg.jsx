// components/GreenMotionBg.js
import React, { useEffect } from 'react';
import '../styles/GreenMotionBg.css';

const GreenMotionBg = () => {
  useEffect(() => {
    const createMotionDots = () => {
      const container = document.querySelector('.green-motion-bg');
      if (!container) return;

      // Clear existing dots
      container.innerHTML = '';

      // Create new dots
      for (let i = 0; i < 80; i++) {
        const dot = document.createElement('div');
        dot.className = 'motion-dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 8}s`;
        dot.style.animationDuration = `${4 + Math.random() * 8}s`;
        dot.style.width = `${1 + Math.random() * 3}px`;
        dot.style.height = dot.style.width;
        dot.style.opacity = `${0.1 + Math.random() * 0.3}`;
        container.appendChild(dot);
      }
    };

    createMotionDots();

    // Recreate dots on resize
    window.addEventListener('resize', createMotionDots);
    return () => window.removeEventListener('resize', createMotionDots);
  }, []);

  return <div className="green-motion-bg"></div>;
};

export default GreenMotionBg;