import React, { useState } from 'react';
import './MainJaeWon.scss';
import AsideJaeWon from './Aside/AsideJaeWon';

function MainJaeWon() {
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleCommentInput = event => {
    setCommentInput(event.target.value);
  };

  const onClick = event => {
    event.preventDefault();
    if (commentInput !== '') {
      let newArr = [...commentList];
      newArr.push({ account: 'Lily', text: commentInput });
      setCommentList(newArr);
    }
    setCommentInput('');
  };

  return (
    <body className="body">
      <div className="Main">
        <div className="MainJaeWon">
          <header class="main__left__header">
            <img
              alt="profile"
              className="header__profile"
              src="../images/jaewonyang/profile.jpg"
            />
            <span className="header__account">happy_lily</span>
            <i className="fa-solid fa-ellipsis"></i>
          </header>
          <article className="main__left__article">
            <img
              alt="post image"
              src="../images/jaewonyang/main.jpeg"
              className="article__image"
            />
            <div className="article__icons">
              <button>
                <i clclassNameass="fa-solid fa-heart"></i>
              </button>
              <button>
                <i className="fa-solid fa-comment"></i>
              </button>
              <button>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </button>
              <button className="bookmark">
                <i className="fa-solid fa-bookmark"></i>
              </button>
            </div>
            <div className="article__like">
              <img
                alt="progile image"
                src="../images/jaewonyang/profile.jpg"
                className="like__profile"
              />
              <span className="like__account">
                <span>wecode_official</span>님 <span>외 10명</span>이 좋아합니다
              </span>
            </div>
            <div className="article__content">
              <span className="content__account">happy_lily</span>
              <span className="content__text">
                위워크에서 진행한 베이킹 클래스... <span>더 보기</span>
              </span>
            </div>
          </article>
          <footer className="main__left__footer">
            <ul className="footer__comment__results">
              <li className="footer__comment__result">
                <span className="comment__account">wecode_official</span>
                <span className="comment__text">거봐 좋았잖아~~~🌼</span>
                <button className="comment__heart">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                </button>
              </li>
              {commentList.map(e => (
                <li className="footer__comment__result">
                  <span className="comment__account">{e.account}</span>
                  <span className="comment__text">{e.text}</span>
                  <button className="comment__heart">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                  </button>
                </li>
              ))}
            </ul>
            <span className="footer__time">42분 전</span>
            <form className="footer__comment__ipnut">
              <input
                type="text"
                placeholder="댓글 달기..."
                className="comment__input"
                onChange={handleCommentInput}
                value={commentInput}
              />
              <button
                className={
                  commentInput !== ''
                    ? 'comment__button active'
                    : 'comment__button'
                }
                onClick={onClick}
              >
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

// 사용자가 댓글 입력 후 enter 를 누르거나 왼쪽의 버튼 클릭 시 댓글이 추가되도록 구현해주세요.
// 댓글 기능을 구현하기 위해서는 배열 데이터 타입을 활용해야 합니다.
// Array.map 참고해서 시도해주세요.
// 위 순서대로 완료 후 Add : Mission 3 - 댓글 기능 구현 commit message를 남긴 후 push 해주세요.
