import React from 'react';
import '../styles/CallForPapers.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const CallForPapers = () => {
    useScrollAnimation()
  const tracks = [
    "Applied Science",
    "Engineering & Technological Advancements",
    "Education & Pedagogical Innovations",
    "Business & Management Studies",
    "Social Science and Humanities",
    "Finance, Accountancy and Marketing"
  ];

  return (
<section className="section hero-section">
      <div className="container">
        <h2 className="section-title">Session Tracks / Call for Papers</h2>
        <p className="papers-intro">
          We invite researchers, academicians and professionals to submit their papers. Topics of
          interest include, but are not limited to:
        </p>
        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <div key={index} className="track-card">
              <div className="track-header">
                <h3 className="track-number">Session {index + 1}</h3>
              </div>
              <h4 className="track-title">{track}</h4>
              <button className="submit-button">
                Submit Paper
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
