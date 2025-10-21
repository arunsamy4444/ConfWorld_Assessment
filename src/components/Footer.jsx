import React from 'react';
import '../styles/Footer.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const Footer = () => {
    useScrollAnimation()
  return (
    // <section className="section hero-section">
        <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ICAEBMS 2026</h3>
            <p>International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@icaebms.org</p>
            <p>Phone: +66 XX XXX XXXX</p>
            <p>Bangkok, Thailand</p>
          </div>
          <div className="footer-section">
            <h3>Organized by</h3>
            <p>Confworld Educational Research and Development Association (CERADA)</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CERADA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
