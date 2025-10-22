import React from 'react';
import '../styles/Theme.css';

const Theme = () => {
  const objectives = [
    {
      number: 1,
      text: "To encourage interdisciplinary collaboration among researchers, academicians, industry experts and policymakers.",
      icon: "🤝"
    },
    {
      number: 2,
      text: "To promote innovative research and practices that contribute to sustainable development.",
      icon: "🌱"
    },
    {
      number: 3,
      text: "To bridge the gap between science, technology, business and society through knowledge-sharing and discourse.",
      icon: "🌉"
    },
    {
      number: 4,
      text: "To empower future leaders and young scholars with insights and opportunities for global engagement.",
      icon: "🚀"
    },
    {
      number: 5,
      text: "To foster solutions that are practical, inclusive and impactful in addressing real-world challenges.",
      icon: "💡"
    }
  ];

  return (
    <section id="theme" className="theme section">
      <div className="theme-background"></div>
      <div className="container">
        <div className="theme-content">
          <div className="theme-header scroll-reveal">
            <h3>"Interdisciplinary Innovations for a Sustainable Future"</h3>
          </div>
          <p className="theme-description scroll-reveal">
            The theme reflects the core vision of ICAEBMS bringing together diverse fields of
            knowledge to address global challenges. By uniting applied science, engineering, education,
            business, management, social sciences and humanities, the conference aims to foster
            creativity, collaboration and sustainable solutions that transcend traditional boundaries.
            Through this theme, ICAEBMS seeks:
          </p>
          <div className="objectives-list">
            {objectives.map((objective, index) => (
              <div key={index} className="objective-item scroll-reveal">
                <div className="objective-border"></div>
                <div className="objective-progress"></div>
                <div className="objective-icon">{objective.icon}</div>
                <div className="objective-number">{objective.number}</div>
                <div className="objective-content">
                  <p className="objective-text">{objective.text}</p>
                </div>
                <div className="objective-info">Learn More</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;