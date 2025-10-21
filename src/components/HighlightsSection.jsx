import React from 'react';
import '../styles/HighlightsSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const HighlightsSection = () => {
  useScrollAnimation()
  const highlights = [
    "Multidisciplinary Platform – A unique forum uniting applied science, engineering, education, business, management, social sciences and humanities.",
    "Global Participation – Engage with renowned scholars, industry leaders and professionals from across the world.",
    "Call for Papers & Publications – Opportunities to publish in reputed scopus indexed journals. Selected papers from the conference will be considered for publication in high-impact journals, offering authors the chance to showcase their research on a global platform.",
    "Expert Keynote Sessions – Insights from distinguished speakers on cutting-edge research and global challenges.",
    "Interactive Workshops & Panel Discussions – Hands-on learning and thought-provoking debates on contemporary issues.",
    "Networking Opportunities – Build academic, industrial and international collaborations.",
    "Recognition & Awards – Best paper and presentation awards to acknowledge outstanding contributions.",
    "Student & Young Researcher Engagement – Special sessions to inspire and guide the next generation of scholars."
  ];

  return (
<section className="section hero-section">  
      <div className="container">
        <h2 className="section-title">Key Highlights of ICAEBMS</h2>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-number">{index + 1}</div>
              <p className="highlight-text">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;