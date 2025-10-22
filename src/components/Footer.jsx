import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ICAEBMS 2026</h3>
            <p className="footer-text">
              International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <p>Email: info@icaebms.org</p>
              <p>Phone: +66 XX XXX XXXX</p>
              <p>Bangkok, Thailand</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Organized by</h3>
            <p className="footer-text">
              Confworld Educational Research and Development Association (CERADA)
            </p>
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