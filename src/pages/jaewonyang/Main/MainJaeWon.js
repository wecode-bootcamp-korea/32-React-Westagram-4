import React, { useState } from 'react';
import AsideJaeWon from './Aside/AsideJaeWon';
import Comment from './Comment/CommentJaeWon';
import './MainJaeWon.scss';

function MainJaeWon() {
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleCommentInput = event => {
    setCommentInput(event.target.value);
  };

  const onClick = event => {
    event.preventDefault();
    if (commentInput.trim() !== '') {
      let newArr = [...commentList];
      newArr.push({ id: Date.now(), account: 'Lily', text: commentInput });
      setCommentList(newArr);
    }
    setCommentInput('');
  };

  return (
    <div className="MainJaeWon">
      <div className="main">
        <div className="main__left">
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
            {/* <li className="footer__comment__result">
                <span className="comment__account">wecode_official</span>
                <span className="comment__text">거봐 좋았잖아~~~🌼</span>
                <button className="comment__heart">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                </button>
              </li> */}
            <Comment commentList={commentList} key={commentList.id} />
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
    </div>
  );
}

export default MainJaeWon;
