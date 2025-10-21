import React from 'react';
import '../styles/DeadlinesSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const DeadlinesSection = () => {
    useScrollAnimation()
  const deadlines = [
    { phase: 'Early Bird Registration', date: '31 Dec 2025' },
    { phase: 'Abstract Submission', date: '31 Jan 2026' },
    { phase: 'Full Paper Submission', date: '28 Feb 2026' },
    { phase: 'Final Registration', date: '31 Mar 2026' }
  ];

  return (
  <section className="section hero-section">
      <div className="container">
        <h2 className="section-title">Submission Deadlines</h2>
        <div className="timeline">
          {deadlines.map((deadline, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-phase">{deadline.phase}</div>
              <div className="timeline-date">{deadline.date}</div>
              {index < deadlines.length - 1 && <div className="timeline-connector"></div>}
            </div>
          ))}
        </div>
        <div className="submission-guidelines">
          <p>
            For detailed submission guidelines, please visit the <a href="#submission" className="guideline-link">Submission Page</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeadlinesSection;