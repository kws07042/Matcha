import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Portfolio</div>
      <ul className="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 