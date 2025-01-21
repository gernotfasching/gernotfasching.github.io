import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-media">
          <h3>Social Media</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Tierheim Pawship</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;