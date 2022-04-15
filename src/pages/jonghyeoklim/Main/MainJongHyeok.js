import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Recommendation from './components/Recommendation/Recommendation';
import Story from './components/Story/Story';
import Comment from './components/Comment/Comment';
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

  const commentData = [
    {
      userId: 'lotso',
      text: '아라라라',
      createdAt: '10분 전',
    },
    {
      userId: 'so',
      text: '아라라',
      createdAt: '1분 전',
    },
    {
      userId: 'sw234o',
      text: '아dsklfnl',
      createdAt: '12분 전',
    },
    {
      userId: '090o',
      text: '아kadsjhjk라',
      createdAt: '6분 전',
    },
  ];

  const [liveData, setLiveData] = useState(dummyData);
  const [newCommentData, setnewCommentData] = useState(commentData);

  return (
    <div>
      <section className="container-main">
        <section className="main-wrap">
          <section className="feeds">
            <article className="article">
              <div className="writer-section">
                <div className="writer-profile">
                  <img
                    alt="profile-img"
                    src="images/jonghyeoklim/lotso.jpeg"
                    className="profile-img"
                  />
                  <span className="writer-id">canon_mj</span>
                </div>
                <div>
                  <img alt="" className="moreOpt-icon" src="icon/more.svg" />
                </div>
              </div>
              <div className="img-section">
                <img
                  alt="feedImg"
                  src="images/jonghyeoklim/feedImg.jpg"
                  className="feedImg"
                />
              </div>
              <div className="icon-section">
                <div>
                  <i className="fa-regular fa-heart contents-heart" />
                  <i className="fa-regular fa-comment" />
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </div>
                <div>
                  <i className="fa-regular fa-bookmark" />
                </div>
              </div>
              <div className="likeCounting-section">
                <img
                  alt="likeProfileImg"
                  src="images/jonghyeoklim/lotso.jpeg"
                  className="like-profile"
                />
                <p className="likeContent">
                  <span>누구누구</span>님 외 <span>10명</span>이 좋아합니다.
                </p>
              </div>
              <div className="contents-section">
                <div className="comment">
                  <span className="userId">canon_mj</span>
                  <span>위워크에서 진행한 베이킹 클래스~</span>
                </div>
              </div>
              {newCommentData.map((value, i) => (
                <Comment key={i} commentInfo={value} />
              ))}
              <div className="writing-section">
                <input
                  className="writing-input"
                  type="text"
                  placeholder="댓글 달기..."
                  onKeyUp="onKeyUp(event)"
                />
                <button className="writing-btn">게시</button>
              </div>
            </article>
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
