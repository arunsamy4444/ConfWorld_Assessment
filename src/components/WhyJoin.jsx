import React from 'react';
import '../styles/WhyJoin.css';

const WhyJoin = () => {
  const benefits = [
    {
      text: "Present Your Research – Share your ideas, findings and innovations with a global audience.",
      icon: "✓"
    },
    {
      text: "Get Published – Opportunities to publish in reputed journals with high impact factor and indexed conference proceedings.",
      icon: "✓"
    },
    {
      text: "Learn from Experts – Gain insights from keynote addresses, workshops and panel discussions by leading scholars and professionals.",
      icon: "✓"
    },
    {
      text: "Expand Your Network – Connect with academicians, industry leaders, policymakers and fellow researchers worldwide.",
      icon: "✓"
    },
    {
      text: "Interdisciplinary Exposure – Explore diverse perspectives by engaging with multiple fields of study.",
      icon: "✓"
    },
    {
      text: "Recognition & Awards – Compete for Best Paper and Best Presentation awards.",
      icon: "✓"
    },
    {
      text: "Global Visibility – Enhance your academic profile and contribute to international collaborations.",
      icon: "✓"
    },
    {
      text: "Empower the Future – Inspire and be inspired by young researchers, innovators and thought leaders.",
      icon: "✓"
    }
  ];

  const publishers = [
    { name: "Scopus", logo: "[Scopus Logo]" },
    { name: "SCIE", logo: "[SCIE Logo]" },
    { name: "Web of Science", logo: "[Web of Science Logo]" },
    { name: "Clarivate", logo: "[Clarivate Logo]" }
  ];

  return (
    <section id="why-join" className="why-join section">
      <div className="container">
        <div className="why-join-content">
          <div className="why-join-intro scroll-reveal">
            <p>
              The International Conference on Applied Science, Engineering, Education, Business,
              Management and Social Science & Humanities (ICAEBMS) is more than just an academic
              event, it's a global platform for innovation, collaboration and growth.
            </p>
          </div>
          
          <div className="publication-info scroll-reveal">
            <h3>Proceedings & Publications</h3>
            <div className="publishers-grid">
              {publishers.map((publisher, index) => (
                <div key={index} className="publisher-card">
                  <div className="publisher-logo">{publisher.logo}</div>
                  <div className="publisher-name">{publisher.name}</div>
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

          <h3 className="benefits-subtitle scroll-reveal">Benefits of Joining ICAEBMS</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card scroll-reveal">
                <div className="benefit-border"></div>
                <div className="benefit-progress"></div>
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-content">
                  <p className="benefit-text">{benefit.text}</p>
                </div>
                <div className="benefit-info">Learn More</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;