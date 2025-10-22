import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Welcome to ICAEBMS-2026</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="scroll-reveal">
              We warmly welcome you to the International Conference on Applied Science,
              Engineering, Education, Business, Management and Social Science & Humanities
              (ICAEBMS).
            </p>
            <p className="scroll-reveal">
              Theme "Interdisciplinary Innovations for a Sustainable Future" ICAEBMS serves as a
              global platform where researchers, academicians, professionals and students from around the
              world come together to exchange ideas, present findings and build collaborations across
              disciplines.
            </p>
            <p className="scroll-reveal">
              This conference is not just an academic gathering, it is a space for innovation, interchange
              and the creation of solutions that address real-world challenges. By bringing together experts
              in science, engineering, education, business, management, social sciences and humanities,
              ICAEBMS fosters interdisciplinary connections that pave the way for impactful change.
            </p>
            <p className="scroll-reveal">
              Join us in shaping the future through knowledge, research and collaboration. Together, we
              can drive progress for a more sustainable and inclusive world.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder scroll-reveal">
              <div className="placeholder-content">
                <h3>Conference Venue</h3>
                <p>Bangkok, Thailand</p>
                <div className="venue-details">
                  <span>Modern Conference Facilities</span>
                  <span>Hybrid Event Capabilities</span>
                  <span>International Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;