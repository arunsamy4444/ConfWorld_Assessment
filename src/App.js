import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Theme from './components/Theme';
import Highlights from './components/Highlights';
import Dates from './components/Dates';
import WhyJoin from './components/WhyJoin';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll reveal functionality
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    // Create enhanced green motion background
    const createMotionBackground = () => {
      const container = document.querySelector('.green-motion-bg');
      if (!container) return;

      container.innerHTML = '';
      
      // Create grid
      const grid = document.createElement('div');
      grid.className = 'motion-grid';
      container.appendChild(grid);
      
      // Create orbs
      for (let i = 0; i < 3; i++) {
        const orb = document.createElement('div');
        orb.className = 'motion-orb';
        orb.style.left = `${20 + i * 30}%`;
        orb.style.top = `${10 + i * 40}%`;
        orb.style.width = `${100 + i * 50}px`;
        orb.style.height = orb.style.width;
        orb.style.animationDelay = `${i * 5}s`;
        container.appendChild(orb);
      }
      
      // Create dots with different sizes and patterns
      const dotSizes = ['small', 'medium', 'large', 'xlarge'];
      const patterns = ['pattern-1', 'pattern-2', 'pattern-3'];
      
      for (let i = 0; i < 80; i++) {
        const dot = document.createElement('div');
        const size = dotSizes[Math.floor(Math.random() * dotSizes.length)];
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        
        dot.className = `motion-dot ${size} ${pattern}`;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 12}s`;
        dot.style.opacity = `${0.05 + Math.random() * 0.2}`;
        container.appendChild(dot);
      }
      
      // Create floating particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'motion-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = `${1 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.opacity = `${0.1 + Math.random() * 0.3}`;
        container.appendChild(particle);
      }
    };

    createMotionBackground();
    
    // Scroll interaction
    const handleScroll = () => {
      const bg = document.querySelector('.green-motion-bg');
      if (window.scrollY > 100) {
        bg.classList.add('scrolling');
      } else {
        bg.classList.remove('scrolling');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', createMotionBackground);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', createMotionBackground);
    };
  }, []);

  return (
    <div className="App">
      <div className="green-motion-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <Theme />
      <Highlights />
      <Dates />
      <WhyJoin />
      <Footer />
    </div>
  );
}

export default App;