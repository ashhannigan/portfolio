import React from 'react';
import profileImage from '../assets/profile.jpg';
import '../styles/index.css';

const About = () => {
  return (
    <section id="about">
      <div className="container about-wrapper">
        <div className="about-image-container">
          <img
            src={profileImage}
            alt="Ashley Hannigan"
            className="about-profile-img"
          />
        </div>
        <div className="about-text">
          <h2 className="section-title">About me</h2>
          <p>
            Passionate, creative, and solution-driven Full Stack Software Engineer with a strong background in JavaScript, TypeScript, React, and Node.js. I love turning ideas into functional, efficient, and scalable applications that solve real-world problems.
          </p>
          <p>
            💡 <strong>What Drives Me:</strong> Software engineering isn’t just about writing lines of code—it’s about creating impactful, innovative solutions. I love bridging the gap between technology and real-world needs—whether it’s optimizing performance, improving user experience, or making systems more efficient.
          </p>
          <p>
            🚀 <strong>What I’m Looking For:</strong> I thrive in collaborative, fast-paced environments where innovation is encouraged and great ideas become reality.
          </p>
          <p>
            ✨ <strong>A Little More About Me:</strong> Outside of coding, I enjoy exploring new tech, contributing to open-source projects, and supporting data-driven environmental initiatives.
          </p>
          <div className="about-buttons">
            <a
              className="cta-btn cta-btn--resume"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a className="cta-btn cta-btn--resume" href="#projects">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
