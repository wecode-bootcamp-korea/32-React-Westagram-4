import React, { useState } from 'react';
import Feed from './components/Feed/Feed';
import Recommendation from './components/Recommendation/Recommendation';
import Story from './components/Story/Story';
import './MainJongHyeok.scss';

function MainJongHyeok() {
  const dummyData = [
    {
      image: 'images/jonghyeoklim/lotso.jpeg',
      userId: '유림',
      createdAt: '17분전',
    },
    {
      image: 'images/jonghyeoklim/lotso.jpeg',
      userId: '_yum_s',
      createdAt: '100분전',
    },
    {
      image: 'images/jonghyeoklim/lotso.jpeg',
      userId: '덕순',
      createdAt: '15분전',
    },
    {
      image: 'images/jonghyeoklim/lotso.jpeg',
      userId: '덕구',
      createdAt: '16분전',
    },
  ];

  const [liveData, setLiveData] = useState(dummyData);
  const [feedList, setFeedList] = useState([1, 2, 3]);

  return (
    <div>
      <section className="container-main">
        <section className="main-wrap">
          <section className="feed-wrap">
            {feedList.map(value => (
              <Feed key={value.id} feedInfo={value} />
            ))}
          </section>
          <aside className="main-right">
            <div className="wecode-desc">
              <img
                alt="logoImg"
                src="images/jonghyeoklim/wecodeLogo.jpeg"
                className="wecode-logo"
              />
              <div className="wecode-profile">
                <div>Wecode_bootcamp</div>
                <div className="wecode-sub-profile">WeCode | 위코드</div>
              </div>
            </div>
            <section className="story-section">
              <div className="mainSection-header">
                <span>스토리</span>
                <span>모두보기</span>
              </div>
              <ul className="story-list">
                {liveData.map((value, idx) => (
                  <Story key={idx} storyInfo={value} />
                ))}
              </ul>
            </section>
            <section className="recomm-section">
              <div className="mainSection-header">
                <span>회원님을 위한 추천</span>
                <span>모두보기</span>
              </div>
              <ul className="story-list">
                {liveData.map((value, idx) => (
                  <Recommendation key={idx} recommInfo={value} />
                ))}
              </ul>
            </section>
            <div>
              <div className="westa-footer">
                Westagram 정보. 지원. 홍보 센터. API. 채용 정보.
                개인정보처리방침. 양관. 디렉터리. 프로필. 해시태그. 언어
              </div>
              <div>© 2019 WESTAGRAM</div>
            </div>
          </aside>
        </section>
      </section>
    </div>
  );
}

export default MainJongHyeok;
