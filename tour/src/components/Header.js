import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Header() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: [
        '수확부터 다도까지,',
'차 한 잎의 여정을 걷는 시간',
'당신만의 말차 이야기를 만들어 보세요.'

      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
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
        <h1>한 잎의 정성, 한 잔의 기억</h1>

        <div className="typing-container">
          <span className="typed"></span>
        </div>
      </div>
      <dotlottie-player
        src="https://lottie.host/d5655b5f-e69c-4447-9697-6722897616f5/Ud1k1H1JD0.lottie"
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