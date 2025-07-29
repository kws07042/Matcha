import React from 'react';

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={scrollToTop} style={{ cursor: 'pointer' }}>CHACHACHA</div>
      <ul className="nav-menu">
        <li><a onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About</a></li>
        <li><a onClick={() => scrollToSection('Programs')} style={{ cursor: 'pointer' }}>Programs</a></li>
        <li><a onClick={() => scrollToSection('Experience')} style={{ cursor: 'pointer' }}>Experience</a></li>
        <li><a onClick={() => scrollToSection('Contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 