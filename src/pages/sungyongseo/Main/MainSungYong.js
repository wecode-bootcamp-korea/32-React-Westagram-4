import React from 'react';
import './MainSungYong.scss';

const Main = () => {
  return (
    <div className="main-container">
      <section className="section-container">
        <div className="section-header">
          <div className="profile-container">
            <div className="profile-img-box">
              <img
                alt="profile"
                src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg"
                className="profile-img"
              />
            </div>
            <span className="profile-name">canon_mj</span>
          </div>
          <a className="section-menu" href="">
            ···
          </a>
        </div>

        <article className="section-main">
          <img className="article-img" src="images/sungyongseo/feed_img.png" />
        </article>

        <div className="section-footer">
          <div className="header">
            <div className="header-left">
              <img
                className="icon"
                src="images/sungyongseo/heart_red_icon.png"
              />
              <img className="icon" src="images/sungyongseo/chat_icon.png" />
              <img className="icon" src="images/sungyongseo/export_icon.png" />
            </div>
            <div className="header-right">
              <img
                className="icon"
                src="images/sungyongseo/bookmark_icon.png"
              />
            </div>
          </div>

          <div className="comment-main">
            <div className="profile-container">
              <div className="img-box">
                <img
                  className="img"
                  src="https://cdn.pixabay.com/photo/2022/04/01/22/55/submarine-7105870__340.png"
                />
              </div>
              <strong className="name">aineworld</strong>
              <span className="like">님 외 10명이 좋아합니다</span>
            </div>
            <div className="content-container">
              <strong className="name">canon_mj</strong>
              <span className="content">
                위워크에서 진행한 베이킹 클래스...
              </span>
              <a className="content-sub" href="">
                더 보기
              </a>
            </div>
            <div className="content-container">
              <strong className="name">neceosecius</strong>
              <span className="content">거봐 좋았잖아~~~~~&#x1F981;</span>
              <div className="content-time">42분전</div>
            </div>
          </div>

          <div className="comment-footer">
            <input
              id="comment"
              className="comment-input"
              type="text"
              placeholder="댓글 달기..."
            />
            <button id="commentBtn" className="comment-btn" type="button">
              게시
            </button>
          </div>
        </div>
      </section>

      <aside className="aside-container">
        <div className="feed-header">
          <div className="profile-box">
            <img
              className="profile-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LvwP02ccuh3DYQ09rPUtntU07QHlemntVcgjb4Tb8w&s"
            />
          </div>
          <div className="profile-box2">
            <a className="comment-profile-name" href="">
              wecode_bootcamp
            </a>
            <sub>Wecode | 위코드</sub>
          </div>
        </div>
        <div className="right-box">
          <div className="right-box-header">
            <sub>스토리</sub>
            <a href="">모두보기</a>
          </div>
          <div className="feed-header">
            <div className="comment-profile-box-story">
              <div className="profile-box">
                <img
                  className="profile-img"
                  src="https://cdn.pixabay.com/photo/2022/04/02/13/43/music-7107045__340.jpg"
                />
              </div>
            </div>
            <div className="profile-box2">
              <a className="comment-profile-name" href="">
                _yum_s
              </a>
              <sub>16분 전</sub>
            </div>
          </div>
          <div className="feed-header">
            <div className="comment-profile-box-story">
              <div className="profile-box">
                <img
                  className="profile-img"
                  src="https://cdn.pixabay.com/photo/2022/04/04/18/03/bird-7111988__340.jpg"
                />
              </div>
            </div>
            <div className="profile-box2">
              <a className="comment-profile-name" href="">
                drink_eat_drink
              </a>
              <sub>3시간 전</sub>
            </div>
          </div>
          <div className="feed-header">
            <div className="comment-profile-box-story">
              <div className="profile-box">
                <img
                  className="profile-img"
                  src="https://cdn.pixabay.com/photo/2022/03/25/19/24/waterfall-7091641__340.jpg"
                />
              </div>
            </div>
            <div className="profile-box2">
              <a className="comment-profile-name" href="">
                hyukyc
              </a>
              <sub>20시간 전</sub>
            </div>
          </div>
          <div className="feed-header">
            <div className="comment-profile-box-story">
              <div className="profile-box">
                <img
                  className="profile-img"
                  src="https://cdn.pixabay.com/photo/2022/02/03/17/16/sunset-6990822__340.jpg"
                />
              </div>
            </div>
            <div className="profile-box2">
              <a className="comment-profile-name" href="">
                jminkeek
              </a>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="right-box-header">
            <sub>회원님을 위한 추천</sub>
            <a href="">모두보기</a>
          </div>
          <div className="feed-header">
            <div className="profile-box">
              <img
                className="profile-img"
                src="https://cdn.pixabay.com/photo/2018/10/01/13/53/droplet-3716288__340.jpg"
              />
            </div>
            <div className="profile-box2">
              <a className="comment-profile-name" href="">
                joaaaaaaahye
              </a>
              <sub>_legend_a님 외 2명이...</sub>
            </div>
            <button className="right-box-btn" type="button" disabled>
              팔로우
            </button>
          </div>
          <div className="feed-header">
            <div className="profile-box">
              <img
                className="profile-img"
                src="https://cdn.pixabay.com/photo/2021/02/24/15/21/cook-6046729__340.jpg"
              />
            </div>
            <div className="profile-box2">
              <a className="comment-profile-name" href="">
                rampart81
              </a>
              <sub>ringo.in.seoul님 외 12...</sub>
            </div>
            <button className="right-box-btn" type="button" disabled>
              팔로우
            </button>
          </div>
          <div className="feed-header">
            <div className="profile-box">
              <img
                className="profile-img"
                src="https://cdn.pixabay.com/photo/2022/04/03/04/46/temple-7108054__340.jpg"
              />
            </div>
            <div className="profile-box2">
              <a className="comment-profile-name" href="">
                shawnjjoo
              </a>
              <sub>jimmylee1220님 외1...</sub>
            </div>
            <button className="right-box-btn" type="button" disabled>
              팔로우
            </button>
          </div>
        </div>
        <div className="right-footer">
          <span>
            Westagram 정보 · 지원 · 홍보 센터 · API ·<br />
            채용 정보 · 개인정보처리방침 · 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
          </span>
          <p>ⓒ 2019 WESTAGRAM</p>
        </div>
      </aside>
    </div>
  );
};

export default Main;
