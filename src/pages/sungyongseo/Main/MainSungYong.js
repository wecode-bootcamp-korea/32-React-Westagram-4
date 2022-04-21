import React, { useEffect, useState } from 'react';
import Feed from './components/FeedSungyong.js';
import './MainSungYong.scss';

const Main = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <div className="main-container">
      <Feed commentList={commentList} />

      <aside className="aside-container">
        <div className="test">
          <div className="aside-header">
            <div className="profile-container">
              <div className="img-box">
                <img
                  alt="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LvwP02ccuh3DYQ09rPUtntU07QHlemntVcgjb4Tb8w&s"
                  className="img"
                />
              </div>
              <div className="name-box">
                <span className="name">wecode_bootcamp</span>
                <span className="name-sub">Wecode | 위코드</span>
              </div>
            </div>
          </div>
          <div className="aside-center">
            <div className="user-box">
              <div className="title">
                <span>스토리</span>
                <span>모두보기</span>
              </div>
              <div className="profile-container">
                <div className="img-box">
                  <img
                    alt="img"
                    src="https://cdn.pixabay.com/photo/2022/04/02/13/43/music-7107045__340.jpg"
                    className="img"
                  />
                </div>
                <div className="name-box">
                  <span className="name">_yum_s</span>
                  <span className="name-sub">16분 전</span>
                </div>
              </div>
              <div className="profile-container">
                <div className="img-box">
                  <img
                    alt="img"
                    src="https://cdn.pixabay.com/photo/2022/04/04/18/03/bird-7111988__340.jpg"
                    className="img"
                  />
                </div>
                <div className="name-box">
                  <span className="name">drink_eat_drinks</span>
                  <span className="name-sub">3시간 전</span>
                </div>
              </div>
              <div className="profile-container">
                <div className="img-box">
                  <img
                    alt="img"
                    src="https://cdn.pixabay.com/photo/2022/03/25/19/24/waterfall-7091641__340.jpg"
                    className="img"
                  />
                </div>
                <div className="name-box">
                  <span className="name">hyukyc</span>
                  <span className="name-sub">20시간 전</span>
                </div>
              </div>
            </div>
            <div className="user-box">
              <div className="title">
                <span>회원님을 위한 추천</span>
                <span>모두보기</span>
              </div>
              <div className="profile-container">
                <div className="img-box">
                  <img
                    alt="img"
                    src="https://cdn.pixabay.com/photo/2018/10/01/13/53/droplet-3716288__340.jpg"
                    className="img"
                  />
                </div>
                <div className="name-box">
                  <span className="name">joaaaaaaahye</span>
                  <span className="name-sub">_legend_a님 외 2명이...</span>
                  <button className="follow-btn" type="button" disabled>
                    팔로우
                  </button>
                </div>
              </div>
              <div className="profile-container">
                <div className="img-box">
                  <img
                    alt="img"
                    src="https://cdn.pixabay.com/photo/2021/02/24/15/21/cook-6046729__340.jpg"
                    className="img"
                  />
                </div>
                <div className="name-box">
                  <span className="name">rampart81</span>
                  <span className="name-sub">ringo.in.seoul님 외 12...</span>
                  <button className="follow-btn" type="button" disabled>
                    팔로우
                  </button>
                </div>
              </div>
              <div className="profile-container">
                <div className="img-box">
                  <img
                    alt="img"
                    src="https://cdn.pixabay.com/photo/2022/04/03/04/46/temple-7108054__340.jpg"
                    className="img"
                  />
                </div>
                <div className="name-box">
                  <span className="name">shawnj</span>
                  <span className="name-sub">joojimmylee1220님 외1...</span>
                  <button className="follow-btn" type="button" disabled>
                    팔로우
                  </button>
                </div>
              </div>
            </div>

            <div className="aside-footer">
              <span>
                Westagram 정보 · 지원 · 홍보 센터 · API ·<br />
                채용 정보 · 개인정보처리방침 · 약관 ·<br />
                디렉터리 · 프로필 · 해시태그 · 언어
              </span>
              <p>ⓒ 2019 WESTAGRAM</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Main;
