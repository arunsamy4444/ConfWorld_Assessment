import React from 'react';
import '../styles/BenefitsSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BenefitsSection = () => {
    useScrollAnimation()
  const benefits = [
    "Present Your Research – Share your ideas, findings and innovations with a global audience.",
    "Get Published – Opportunities to publish in reputed journals with high impact factor and indexed conference proceedings.",
    "Learn from Experts – Gain insights from keynote addresses, workshops and panel discussions by leading scholars and professionals.",
    "Expand Your Network – Connect with academicians, industry leaders, policymakers and fellow researchers worldwide.",
    "Interdisciplinary Exposure – Explore diverse perspectives by engaging with multiple fields of study.",
    "Recognition & Awards – Compete for Best Paper and Best Presentation awards.",
    "Global Visibility – Enhance your academic profile and contribute to international collaborations.",
    "Empower the Future – Inspire and be inspired by young researchers, innovators and thought leaders."
  ];

  return (
<section className="section hero-section">
      <div className="container">
        <h2 className="section-title">Why Join Us at ICAEBMS?</h2>
        <div className="benefits-intro">
          <p>
            The International Conference on Applied Science, Engineering, Education, Business,
            Management and Social Science & Humanities (ICAEBMS) is more than just an academic
            event, it's a global platform for innovation, collaboration and growth.
          </p>
        </div>
        <h3 className="benefits-subtitle">Benefits of Joining ICAEBMS</h3>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">✓</div>
              <p className="benefit-text">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
