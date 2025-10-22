import React from 'react';
import '../styles/Dates.css';

const Dates = () => {
  const deadlines = [
    { phase: 'Early Bird Registration', date: '31 Dec 2025' },
    { phase: 'Abstract Submission', date: '31 Jan 2026' },
    { phase: 'Full Paper Submission', date: '28 Feb 2026' },
    { phase: 'Final Registration', date: '31 Mar 2026' }
  ];

  const tracks = [
    "Applied Science",
    "Engineering & Technological Advancements",
    "Education & Pedagogical Innovations",
    "Business & Management Studies",
    "Social Science and Humanities",
    "Finance, Accountancy and Marketing"
  ];

  return (
    <section id="dates" className="dates section">
      <div className="container">
        <div className="dates-content">
          <div className="dates-section">
            <h2 className="section-title scroll-reveal">Submission Deadlines</h2>
            <div className="timeline">
              {deadlines.map((deadline, index) => (
                <div key={index} className="timeline-item scroll-reveal">
                  <div className="timeline-phase">{deadline.phase}</div>
                  <div className="timeline-date">{deadline.date}</div>
                  {index < deadlines.length - 1 && <div className="timeline-connector"></div>}
                </div>
              ))}
            </div>
            <div className="submission-guidelines scroll-reveal">
              <p>
                For detailed submission guidelines, please visit the <a href="#submission" className="guideline-link">Submission Page</a>.
              </p>
            </div>
          </div>
          
          <div className="tracks-section">
            <h2 className="section-title scroll-reveal">Session Tracks / Call for Papers</h2>
            <p className="tracks-intro scroll-reveal">
              We invite researchers, academicians and professionals to submit their papers. Topics of
              interest include, but are not limited to:
            </p>
            <div className="tracks-grid">
              {tracks.map((track, index) => (
                <div key={index} className="track-card scroll-reveal">
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
        </div>
      </div>
    </section>
  );
};

export default Dates;