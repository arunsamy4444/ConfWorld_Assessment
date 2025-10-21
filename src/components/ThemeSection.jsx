import React from 'react';
import '../styles/ThemeSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const ThemeSection = () => {
  useScrollAnimation()
  const objectives = [
    "To encourage interdisciplinary collaboration among researchers, academicians, industry experts and policymakers.",
    "To promote innovative research and practices that contribute to sustainable development.",
    "To bridge the gap between science, technology, business and society through knowledge-sharing and discourse.",
    "To empower future leaders and young scholars with insights and opportunities for global engagement.",
    "To foster solutions that are practical, inclusive and impactful in addressing real-world challenges."
  ];

  return (
<section className="section hero-section">  
      <div className="container">
        <h2 className="section-title">Conference Theme</h2>
        <div className="theme-content">
          <div className="theme-header">
            <h3>"Interdisciplinary Innovations for a Sustainable Future"</h3>
          </div>
          <p className="theme-description">
            The theme reflects the core vision of ICAEBMS bringing together diverse fields of
            knowledge to address global challenges. By uniting applied science, engineering, education,
            business, management, social sciences and humanities, the conference aims to foster
            creativity, collaboration and sustainable solutions that transcend traditional boundaries.
            Through this theme, ICAEBMS seeks:
          </p>
          <div className="objectives-list">
            {objectives.map((objective, index) => (
              <div key={index} className="objective-item">
                <span className="objective-number">{index + 1}</span>
                <span className="objective-text">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
