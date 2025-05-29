// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="navbar">
      <nav className="container">
        <ul className="nav-list">
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
