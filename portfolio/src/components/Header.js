import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Header() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: [
        '안녕하세요!',
        '건영입니다!',
        '프론트엔드 공부 중이에요'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1>Hi, I am Geon</h1>
        <div className="typing-container">
          <span className="typed"></span>
        </div>
      </div>
      <dotlottie-player
        src="https://lottie.host/96c08111-ef72-432b-a056-0ff1469cf6b6/Cv7wOO5IAb.lottie"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      />
    </header>
  );
}

export default Header; 