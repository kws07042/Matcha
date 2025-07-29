import React, { useEffect, useState } from 'react';

function IntroAnimation({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [scaleUp, setScaleUp] = useState(false);

  useEffect(() => {
    const scaleTimer = setTimeout(() => setScaleUp(true), 1500);   // 1.5초 후 확대
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);    // 2.5초 후 페이드아웃
    const endTimer = setTimeout(() => onComplete(), 3000);         // 3초 후 Intro 종료

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="intro-wrapper"
      style={{
        position: 'fixed',
        zIndex: 9999,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #b4e391 0%, #6dc484 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: 'none',
      }}
    >
      <dotlottie-player
        src="https://lottie.host/a2453534-3e5d-4773-be3b-a41dd047268c/jARK1MRIV4.lottie"
        background="transparent"
        speed="1"
        style={{
          width: '300px',
          height: '300px',
          transform: scaleUp ? 'scale(3)' : 'scale(1)',
          transition: 'transform 1.5s ease-in-out',
        }}
        autoplay
      />
    </div>
  );
}

export default IntroAnimation;
