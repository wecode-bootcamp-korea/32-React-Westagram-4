import React from 'react';
import './MainSungYong.scss';

const Main = () => {
  return (
    <div className="main-container">
      <section className="section-container">
        <div className="section-header">
          <div className="profile-container">
            <div className="img-box">
              <img
                alt="profile"
                src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg"
                className="img"
              />
            </div>
            <span className="name">canon_mj</span>
          </div>
          <span className="section-menu">···</span>
        </div>

        <article className="section-center">
          <img
            alt="feed img"
            className="img"
            src="images/sungyongseo/feed_img.png"
          />
        </article>

        <div className="comment-container">
          <div className="comment-header">
            <div className="header-left">
              <i className="fa-regular fa-heart" />
              <i className="fa-regular fa-comment" />
              <i className="fa-solid fa-arrow-up-from-bracket" />
            </div>
            <div className="header-right">
              <i className="fa-regular fa-bookmark" />
            </div>
          </div>

          <div className="comment-center">
            <div className="profile-container">
              <div className="img-box">
                <img
                  alt="zz"
                  className="img"
                  src="https://cdn.pixabay.com/photo/2022/04/01/22/55/submarine-7105870__340.png"
                />
              </div>
              <span className="name">aineworld</span>
              <span className="like">님 외 10명이 좋아합니다.</span>
            </div>

            <div className="history">
              <div className="name-box">
                <span className="name">canon_mj</span>
              </div>
              <span className="content">
                위워크에서 진행한 베이킹 클래스...
              </span>
              <span className="content-time">42분전</span>
            </div>

            <div className="history">
              <div className="name-box">
                <span className="name">neceosecius</span>
              </div>
              <span className="content">거봐 좋았잖아~~~~~ &#x1F981;</span>
              <span className="content-time">42분전</span>
            </div>
          </div>

          <div className="comment-footer">
            <input className="comment" type="text" placeholder="댓글 달기..." />
            <button className="push" type="button">
              게시
            </button>
          </div>
        </div>
      </section>

      <aside className="aside-container">
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
            <div className="profile-container">
              <div className="img-box">
                <img
                  alt="img"
                  src="https://cdn.pixabay.com/photo/2022/02/03/17/16/sunset-6990822__340.jpg"
                  className="img"
                />
              </div>
              <div className="name-box">
                <span className="name">jminkeek</span>
                <span className="name-sub">22분 전</span>
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
                <button className="right-box-btn" type="button" disabled>
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
                <button className="right-box-btn" type="button" disabled>
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
        </div>

        <div className="aside-footer">
          <span>
            Westagram 정보 · 지원 · 홍보 센터 · API ·<br />
            채용 정보 · 개인정보처리방침 · 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
          </span>
          <p>ⓒ 2019 WESTAGRAM</p>
        </div>
      </aside>

      <footer className="footer-container" />
    </div>
  );
};

export default Main;
