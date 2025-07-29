import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

function Contact() {
    return (
        <section id="Contact" data-aos="fade-up" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">문의하기</h2>
                    <p className="contact-subtitle">차 문화에 관심이 있으시거나 궁금한 점이 있으시면 언제든 연락주세요</p>
                </div>

                <div className="contact-items">
                    <div className="contact-item phone-item">
                        <div className="contact-icon-wrapper">
                            <MdPhone className="contact-icon" />
                        </div>
                        <div className="contact-info">
                            <span className="contact-label">전화 문의</span>
                            <span className="contact-text">010-2880-919*</span>
                        </div>
                    </div>

                    <div className="contact-item email-item">
                        <div className="contact-icon-wrapper">
                            <MdEmail className="contact-icon" />
                        </div>
                        <div className="contact-info">
                            <span className="contact-label">이메일 문의</span>
                            <span className="contact-text">kws07042@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="contact-background">
                    <div className="floating-leaf leaf-1"></div>
                    <div className="floating-leaf leaf-2"></div>
                    <div className="floating-leaf leaf-3"></div>
                </div>
            </div>

            <style jsx>{`
                .contact-section {
                    min-height: 100vh;
                  
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 80px 20px;
                    position: relative;
                    overflow: hidden;
                }

                .contact-container {
                    max-width: 800px;
                    width: 100%;
                    position: relative;
                    z-index: 2;
                }

                .contact-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .contact-title {
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: #2d5a27;
                    margin-bottom: 20px;
                    background: linear-gradient(135deg, #2d5a27, #4a7c59);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    position: relative;
                }

                .contact-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(90deg, #4a7c59, #6b9b4f);
                    border-radius: 2px;
                }

                .contact-subtitle {
                    font-size: 1.2rem;
                    color: #5a7c65;
                    line-height: 1.6;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .contact-items {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                    margin-top: 40px;
                }

                .contact-item {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                    padding: 40px 30px;
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 10px 40px rgba(45, 90, 39, 0.1);
                    position: relative;
                    overflow: hidden;
                }

                .contact-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(74, 124, 89, 0.05), rgba(107, 155, 79, 0.05));
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .contact-item:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 60px rgba(45, 90, 39, 0.15);
                    border-color: rgba(74, 124, 89, 0.3);
                }

                .contact-item:hover::before {
                    opacity: 1;
                }

                .contact-icon-wrapper {
                    width: 70px;
                    height: 70px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    transition: all 0.3s ease;
                }

                .phone-item .contact-icon-wrapper {
                    background: linear-gradient(135deg, #4a7c59, #6b9b4f);
                }

                .email-item .contact-icon-wrapper {
                    background: linear-gradient(135deg, #6b9b4f, #8bc34a);
                }

                .contact-item:hover .contact-icon-wrapper {
                    transform: scale(1.1) rotate(5deg);
                }

                .contact-icon {
                    font-size: 2rem;
                    color: white;
                }

                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    flex: 1;
                }

                .contact-label {
                    font-size: 0.9rem;
                    color: #7a8471;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .contact-text {
                    font-size: 1.4rem;
                    color: #2d5a27;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .contact-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }

                .floating-leaf {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, #6b9b4f, #4a7c59);
                    border-radius: 0 100% 0 100%;
                    opacity: 0.1;
                    animation: floatLeaf 8s ease-in-out infinite;
                }

                .leaf-1 {
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                }

                .leaf-2 {
                    top: 60%;
                    right: 15%;
                    animation-delay: 2s;
                    transform: rotate(45deg);
                }

                .leaf-3 {
                    bottom: 20%;
                    left: 20%;
                    animation-delay: 4s;
                    transform: rotate(-30deg);
                }

                @keyframes floatLeaf {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    33% {
                        transform: translateY(-20px) rotate(10deg);
                    }
                    66% {
                        transform: translateY(-10px) rotate(-5deg);
                    }
                }

                /* 반응형 처리 */
                @media (max-width: 768px) {
                    .contact-section {
                        padding: 60px 15px;
                    }

                    .contact-title {
                        font-size: 2.5rem;
                    }

                    .contact-subtitle {
                        font-size: 1rem;
                    }

                    .contact-items {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .contact-item {
                        padding: 30px 20px;
                        flex-direction: column;
                        text-align: center;
                        gap: 20px;
                    }

                    .contact-icon-wrapper {
                        width: 60px;
                        height: 60px;
                    }

                    .contact-icon {
                        font-size: 1.8rem;
                    }

                    .contact-text {
                        font-size: 1.2rem;
                    }
                }

                @media (max-width: 480px) {
                    .contact-title {
                        font-size: 2rem;
                    }

                    .contact-text {
                        font-size: 1rem;
                        word-break: break-all;
                    }
                }
            `}</style>
        </section>
    );
}

export default Contact;