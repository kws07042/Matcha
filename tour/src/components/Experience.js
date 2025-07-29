import React from 'react';
import green1 from '../assets/green1.jpeg';
import green2 from '../assets/green2.jpeg';
import green3 from '../assets/green3.jpeg';
import green4 from '../assets/green4.jpeg';
import green5 from '../assets/green5.jpeg';
import green6 from '../assets/green6.jpeg';
import green7 from '../assets/green7.jpeg';

const images = [green1, green2, green3, green4, green5, green6, green7];

function Experience() {
    return (
        <section id="experience" data-aos="fade-up" className="relative w-full h-screen overflow-hidden bg-white" style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="section-title z-10 relative text-center" style={{ position: 'relative', zIndex: 10 }}>
                <span className="highlight">차를 마시는 삶, 직접 살아보기</span><br />
                <span className="subtitle">찻잎에서 찻잔까지, 당신의 손으로 완성하는 차의 시간</span>
            </h1>

            <div className="floating-container" style={{
                marginTop: '200px',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
            }}>
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`tea-experience-${idx}`}
                        className={`floating-img floating-img-${idx}`}
                        style={{
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            position: 'absolute',
                            animation: `float-${idx} 6s ease-in-out infinite`,
                            animationDelay: `${idx * 0.5}s`,
                            zIndex: 1
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
                .floating-container {
                    position: absolute;
                    top: 40rem;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }

                .floating-img-0 {
                    top: 40%;
                    left: 8%;
                    transform: rotate(-10deg);
                }

                .floating-img-1 {
                    top: 45%;
                    right: 12%;
                    transform: rotate(15deg);
                }

                .floating-img-2 {
                    top: 65%;
                    left: 5%;
                    transform: rotate(-8deg);
                }

                .floating-img-3 {
                    bottom: 10%;
                    left: 25%;
                    transform: rotate(-5deg);
                }

                .floating-img-4 {
                    bottom: 5%;
                    right: 20%;
                    transform: rotate(10deg);
                }

                .floating-img-5 {
                    top: 60%;
                    right: 8%;
                    transform: rotate(12deg);
                }

                .floating-img-6 {
                    top: 80%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(-6deg);
                }

                @keyframes float-0 {
                    0%, 100% { transform: translateY(0px) rotate(-10deg); }
                    50% { transform: translateY(-20px) rotate(-8deg); }
                }

                @keyframes float-1 {
                    0%, 100% { transform: translateY(0px) rotate(15deg); }
                    50% { transform: translateY(-25px) rotate(18deg); }
                }

                @keyframes float-2 {
                    0%, 100% { transform: translateY(0px) rotate(-8deg); }
                    50% { transform: translateY(-18px) rotate(-5deg); }
                }

                @keyframes float-3 {
                    0%, 100% { transform: translateY(0px) rotate(-5deg); }
                    50% { transform: translateY(-15px) rotate(-2deg); }
                }

                @keyframes float-4 {
                    0%, 100% { transform: translateY(0px) rotate(10deg); }
                    50% { transform: translateY(-30px) rotate(12deg); }
                }

                @keyframes float-5 {
                    0%, 100% { transform: translateY(0px) rotate(12deg); }
                    50% { transform: translateY(-22px) rotate(15deg); }
                }

                @keyframes float-6 {
                    0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(-6deg); }
                    50% { transform: translate(-50%, -50%) translateY(-20px) rotate(-3deg); }
                }

                /* 반응형 처리 */
                @media (max-width: 768px) {
                    .floating-img {
                        width: 100px !important;
                        height: 100px !important;
                    }

                    .floating-img-0 {
                        top: 45%;
                        left: 3%;
                    }

                    .floating-img-1 {
                        top: 50%;
                        right: 3%;
                    }

                    .floating-img-2 {
                        top: 70%;
                        left: 2%;
                    }

                    .floating-img-3 {
                        bottom: 15%;
                        left: 15%;
                    }

                    .floating-img-4 {
                        bottom: 10%;
                        right: 10%;
                    }

                    .floating-img-5 {
                        top: 65%;
                        right: 2%;
                    }

                    .floating-img-6 {
                        top: 85%;
                        left: 50%;
                    }
                }
            `}</style>
        </section>
    );
}

export default Experience;