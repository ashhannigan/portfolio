import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/index.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper load-hidden">
          <p className="contact-wrapper__text">
            Open to Full Stack, Front End, or Back End Software Engineering positions and opportunities.
          </p>
          <div className="contact-icons">
            <a
              href="mailto:ashleyhannigan88@email.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </a>
            <a
              href="https://linkedin.com/in/ashleyhannigan-"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
