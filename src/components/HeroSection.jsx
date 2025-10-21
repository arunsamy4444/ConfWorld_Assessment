import React from 'react';
import '../styles/HeroSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const HeroSection = () => {
  useScrollAnimation()
  return (
   <section className="section hero-section">  
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="conference-title">
            International Conference on Applied Science, Engineering, Education, Business,
            Management and Social Science & Humanities (ICAEBMS)
          </h1>
          
          <div className="conference-theme">
            <h2>Theme: "Interdisciplinary Innovations for a Sustainable Future"</h2>
          </div>

          <div className="conference-details">
            <div className="detail-item">
              <span className="detail-label">Format:</span>
              <span className="detail-value">Hybrid Conference: In Person + Online</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Date:</span>
              <span className="detail-value">10-11 Aug, 2026</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">Bangkok, Thailand</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Organized by:</span>
              <span className="detail-value">Confworld Educational Research and Development Association</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">ISBN:</span>
              <span className="detail-value">978-95-813001-3-6</span>
            </div>
          </div>

          <div className="logos-section">
            <div className="logo-grid">
              <div className="logo-item">[CERADA Logo]</div>
              <div className="logo-item">[ICAEBMS Logo]</div>
              <div className="logo-item">[SDG Logo]</div>
              <div className="logo-item">[Scopus Logo]</div>
              <div className="logo-item">[Clarivate WoS Logo]</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
