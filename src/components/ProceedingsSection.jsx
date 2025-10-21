import React from 'react';
import '../styles/ProceedingsSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const ProceedingsSection = () => {
    useScrollAnimation()
  const publishers = [
    "Scopus",
    "SCIE", 
    "Web of Science",
    "Clarivate"
  ];

  return (
<section className="section hero-section">  
      <div className="container">
        <h2 className="section-title">Proceedings & Publications</h2>
        <div className="publishers-grid">
          {publishers.map((publisher, index) => (
            <div key={index} className="publisher-card">
              <div className="publisher-logo">[{publisher} Logo]</div>
              <h3 className="publisher-name">{publisher}</h3>
            </div>
          ))}
        </div>
        <div className="proceedings-note">
          <p>
            <strong>Note:</strong> ICAEBMS - 2026 Proceedings will be submitted to the Web of Science Book
            citation index (BkCI) and Scopus for evaluation and indexing purposes (T&C)* apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProceedingsSection;