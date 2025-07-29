import React, { useEffect } from 'react';
import Typed from 'typed.js';
import forestImg from '../assets/forest.jpeg'; // 이미지 경로는 src 기준으로 조정

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
        <header
            className="header"
            style={{
                backgroundImage: `url(${forestImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
            }}
        >
            {/* Optional: 어두운 반투명 오버레이 */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 0,
            }} />

            <div className="header-content" style={{ zIndex: 1 }}>
                <h1>한 잎의 정성, 한 잔의 기억</h1>

                <div className="typing-container">
                    <span className="typed"></span>
                </div>
            </div>
        </header>
    );
}

export default Header;
