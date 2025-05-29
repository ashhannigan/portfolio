import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper load-hidden">
          <p className="contact-wrapper__text">
            Open to Full Stack, Front End, or Back End Software Engineering positions.
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:ashleyhannigan88@email.com"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
