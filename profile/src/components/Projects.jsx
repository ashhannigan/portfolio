import React from 'react';
import flakeguardImage from '../assets/flakeguardWeb.jpg';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">
            Free Open Source Product (for devs)
          </h2>

          {/* Project 1 */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text load-hidden">
                <h3 className="project-wrapper__text-title">FlakeGuard</h3>
                <div>
                  <p className="mb-4">
                    FlakeGuard is a free, open-source tool that allows developers to run Jest tests to automatically detect, report, and manage flaky Jest test(s)/files.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://flakeguard.com"
                >
                  See Live
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/oslabs-beta/flake-guard-alpha"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image load-hidden">
                <a rel="noreferrer" href="https://flakeguard.com" target="_blank">
                  <div
                    data-tilt
                    data-tilt-max="4"
                    data-tilt-glare="true"
                    data-tilt-max-glare="0.5"
                    className="thumbnail rounded js-tilt"
                  >
                    <img
                      alt="Project FlakeGuard"
                      className="img-fluid"
                      src={flakeguardImage}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Add more projects here as needed */}

        </div>
      </div>
    </section>
  );
};

export default Projects;
