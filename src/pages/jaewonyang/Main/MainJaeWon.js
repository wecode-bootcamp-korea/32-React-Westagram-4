import React from 'react';
import './MainJaeWon.scss';
import AsideJaeWon from './Aside/AsideJaeWon';

function MainJaeWon() {
  return (
    <body className="body">
      <div className="Main">
        <div className="MainJaeWon">
          <header class="main__left__header">
            <img
              alt="profile"
              class="header__profile"
              src="../images/jaewonyang/profile.jpg"
            />
            <span class="header__account">happy_lily</span>
            <i class="fa-solid fa-ellipsis"></i>
          </header>
          <article class="main__left__article">
            <img
              alt="post image"
              src="../images/jaewonyang/main.jpeg"
              class="article__image"
            />
            <div class="article__icons">
              <button>
                <i class="fa-solid fa-heart"></i>
              </button>
              <button>
                <i class="fa-solid fa-comment"></i>
              </button>
              <button>
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
              </button>
              <button class="bookmark">
                <i class="fa-solid fa-bookmark"></i>
              </button>
            </div>
            <div class="article__like">
              <img
                alt="progile image"
                src="../images/jaewonyang/profile.jpg"
                class="like__profile"
              />
              <span class="like__account">
                <span>wecode_official</span>님 <span>외 10명</span>이 좋아합니다
              </span>
            </div>
            <div class="article__content">
              <span class="content__account">happy_lily</span>
              <span class="content__text">
                위워크에서 진행한 베이킹 클래스... <span>더 보기</span>
              </span>
            </div>
          </article>
          <footer class="main__left__footer">
            <ul class="footer__comment__results">
              <li class="footer__comment__result">
                <span class="comment__account">wecode_official</span>
                <span class="comment__text">거봐 좋았잖아~~~🌼</span>
                <button class="comment__heart">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                </button>
              </li>
            </ul>
            <span class="footer__time">42분 전</span>
            <form class="footer__comment__ipnut">
              <input
                type="text"
                placeholder="댓글 달기..."
                class="comment__input"
              />
              <button class="comment__button" disabled>
                게시
              </button>
            </form>
          </footer>
        </div>
        <AsideJaeWon />
      </div>
    </body>
  );
}

export default MainJaeWon;
