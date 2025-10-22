import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Scroll detection
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['home', 'about', 'theme', 'highlights', 'dates', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Progress bar update
    const updateProgressBar = () => {
      const progress = document.querySelector('.nav-progress');
      if (progress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', updateProgressBar);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Theme', href: 'theme' },
    { name: 'Highlights', href: 'highlights' },
    { name: 'Dates', href: 'dates' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-progress"></div>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" onClick={closeMenu}>
              ICAEBMS 2026
            </a>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
      
      {/* Mobile backdrop */}
      <div 
        className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;