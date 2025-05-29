import React from 'react';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a
            rel="noreferrer"
            href="https://linkedin.com/in/ashleyhannigan-"
            target="_blank"
          >
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/ashhannigan"
            target="_blank"
          >
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>
        <hr />
        <p className="footer__text">
          © 2025, Ashley Hannigan | Portfolio created with React, JS, CSS, HTML
        </p>
      </div>
    </footer>
  );
};

export default Footer;
