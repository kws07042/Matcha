import React from 'react';
import { GiHerbsBundle, GiTeapot } from 'react-icons/gi';
import { MdLocalDining, MdHotel } from 'react-icons/md';

function Programs() {
    return (
        <section id="Programs" data-aos="fade-up">
            <h1 className="section-title">
                <span className="highlight">말차</span>,<br />
                <span className="subtitle">네 가지 방식으로 만나다</span>
            </h1>

            <div className="experience-highlights">

                <div className="highlight-item">
                    <span className="icon"><GiHerbsBundle size={36} /></span>
                    <div className="highlight-content">
                        <h3>찻잎 수확 & 찻잔 만들기</h3>
                        <p>차밭에서 직접 찻잎을 따고, 나만의 찻잔을 도예로 빚으며 찻자리의 시작을 체험합니다.</p>
                    </div>
                </div>

                <div className="highlight-item">
                    <span className="icon"><MdLocalDining size={36} /></span>
                    <div className="highlight-content">
                        <h3>제주 로컬 푸드 & 전통주 페어링</h3>
                        <p>제주의 제철 식재료와 전통주, 말차가 어우러진 감각적인 미식 체험을 즐겨보세요.</p>
                    </div>
                </div>

                <div className="highlight-item">
                    <span className="icon"><MdHotel size={36} /></span>
                    <div className="highlight-content">
                        <h3>다도 공간 및 스테이</h3>
                        <p>차향 가득한 다도 공간에서의 숙박으로, 고요한 시간과 깊은 쉼을 경험합니다.</p>
                    </div>
                </div>

                <div className="highlight-item">
                    <span className="icon"><GiTeapot size={36} /></span>
                    <div className="highlight-content">
                        <h3>말차 티 오마카세</h3>
                        <p>계절의 말차, 디저트, 차담이 함께 어우러지는 셰프 스타일의 차 코스를 제공합니다.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Programs;
