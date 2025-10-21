import React from 'react';
import '../styles/WelcomeSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const WelcomeSection = () => {
  useScrollAnimation()
  return (
<section className="section hero-section">  
      <div className="container">
        <h2 className="section-title">Welcome to ICAEBMS-2026</h2>
        <div className="welcome-content">
          <p>
            We warmly welcome you to the International Conference on Applied Science,
            Engineering, Education, Business, Management and Social Science & Humanities
            (ICAEBMS).
          </p>
          <p>
            Theme "Interdisciplinary Innovations for a Sustainable Future" ICAEBMS serves as a
            global platform where researchers, academicians, professionals and students from around the
            world come together to exchange ideas, present findings and build collaborations across
            disciplines.
          </p>
          <p>
            This conference is not just an academic gathering, it is a space for innovation, interchange
            and the creation of solutions that address real-world challenges. By bringing together experts
            in science, engineering, education, business, management, social sciences and humanities,
            ICAEBMS fosters interdisciplinary connections that pave the way for impactful change.
          </p>
          <p className="highlight-text">
            Join us in shaping the future through knowledge, research and collaboration. Together, we
            can drive progress for a more sustainable and inclusive world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
