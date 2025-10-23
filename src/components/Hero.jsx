import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollingTextRef = useRef(null);

  useEffect(() => {
    // Scrolling text animation
    const scrollText = () => {
      const text = "HYBRID EVENT - You can participate in person at Bangkok, Thailand or Virtually from your home or office.";
      if (scrollingTextRef.current) {
        scrollingTextRef.current.innerHTML = text + ' ' + text;
      }
    };

    scrollText();
  }, []);

  const logos = ['CERADA', 'ICAEBMS', 'SDG', 'Scopus', 'Clarivate WoS'];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="dots"></div>
      </div>
      
      {/* Scrolling Text Banner */}
      <div className="scrolling-banner">
        <div className="scrolling-text" ref={scrollingTextRef}></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title scroll-reveal">
            International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS 2026)
          </h1>
          
          <p className="hero-subtitle scroll-reveal">
            Theme: "Interdisciplinary Innovations for a Sustainable Future"
          </p>
          
          <div className="hero-info scroll-reveal">
            <div className="info-item">
              <span className="info-label">Date:</span>
              <span className="info-value">10-11 August, 2026</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Bangkok, Thailand</span>
            </div>
            <div className="info-item">
              <span className="info-label">Organized by:</span>
              <span className="info-value">Confworld Educational Research and Development Association</span>
            </div>
            <div className="info-item">
              <span className="info-label">ISBN:</span>
              <span className="info-value">978-95-813001-3-6</span>
            </div>
          </div>

          <div className="hero-logos scroll-reveal">
            <div className="logo-grid">
              {logos.map((logo, index) => (
                <div key={logo} className="logo-item" style={{animationDelay: `${index * 0.2}s`}}>
                  {logo}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-buttons scroll-reveal">
            <a href="#register" className="btn btn-primary">Register Now</a>
            <a href="#papers" className="btn btn-outline">Call for Papers</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;