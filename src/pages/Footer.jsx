// Footer.jsx
import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import './Footer.css';



export const Footer = () => {
  return (
    <section id="contact">
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top-section">
          <div className="footer-brand-info">
            <h2 className="brand-name">Studio MCET.</h2>
            <p className="brand-tagline">Capturing Moments, Creating Memories</p>
            <p className="brand-description">
              We are a passionate community of photographers and creatives dedicated to capturing 
              the essence of life through our lens. Join us in our journey of visual storytelling.
            </p>
          </div>

          <div className="footer-links-container">
            <div className="footer-column">
              <h3 className="column-title">Quick Links</h3>
              <ul className="link-list">
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#team" className="footer-link">Our Team</a></li>
                <li><a href="#events" className="footer-link">Events</a></li>
                <li><a href="#join" className="footer-link">Join Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Contact Info</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>C-Block-229, MCET Campus, Pollachi</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>studio@mcet.edu.in</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com/studiomcet" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/studiomcet" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.youtube.com/@studiomcet" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Youtube size={20} />
                </a>
                
               
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-section">
          <p className="footer-copyright">© 2025 Studio MCET. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy" className="footer-policy-link">Privacy Policy</a>
            <span className="link-separator">•</span>
            <a href="#terms" className="footer-policy-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </section>
    
  );
};
