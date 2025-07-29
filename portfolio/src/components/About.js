import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">
            <span className="highlight">한 잎의 여정</span>
            <br />
            <span className="subtitle">차밭에서 입까지의 감성 여행</span>
          </h2>
          
          <div className="about-description">
            <p className="main-text">
              "말차 한 잎이 내 입에 들어오기까지의 복잡하고 정갈한 여정을 직접 체험하는 프로그램"
            </p>
            
            <div className="experience-highlights">
              <div className="highlight-item">
                <span className="icon">🌿</span>
                <div className="highlight-content">
                  <h3>제주 차밭 산책</h3>
                  <p>세계 3대 녹차 재배지 제주의 토양과 기후에서 직접 말차를 수확해보세요</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <span className="icon">⚙️</span>
                <div className="highlight-content">
                  <h3>전통 맷돌 분쇄</h3>
                  <p>전통 방식으로 맷돌에 갈아 나만의 말차를 만들어보세요</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <span className="icon">🍵</span>
                <div className="highlight-content">
                  <h3>다도 체험</h3>
                  <p>차를 단순한 음료가 아닌 '내가 만든 추억'으로 경험해보세요</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <span className="icon">🍰</span>
                <div className="highlight-content">
                  <h3>미식 페어링</h3>
                  <p>말차 디저트와 제주 식재료의 페어링으로 깊은 쉼과 감각적 힐링을 선사합니다</p>
                </div>
              </div>
            </div>
            
            <div className="why-matcha">
              <h3 className="why-title">왜 말차인가?</h3>
              <ul className="why-list">
                <li>전 세계적인 말차 트렌드</li>
                <li>말차 = 음료를 넘어 '감각의 예술'</li>
                <li>제주 토양/기후 = 세계 3대 녹차 재배지</li>
                <li>제주에서 말차를 경험하는 의미와 차별성</li>
                <li>말차 산업의 새로운 가능성 (국내 최초 체험 중심)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 