import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-media">
          <h3>Social Media</h3>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Twitter</a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Tierheim Pawship</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;