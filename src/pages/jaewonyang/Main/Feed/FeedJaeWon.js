import React, { useState, useEffect } from 'react';
import CommentsJaeWon from '../Comments/CommentsJaeWon';
import './FeedJaeWon.scss';

function FeedJaeWon() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <>
      {feedList.map(e => (
        <div className="FeedJaeWon" key={e.id}>
          <header class="main__left__header">
            <img
              alt="profile"
              className="header__profile"
              src="../images/jaewonyang/profile.jpg"
            />
            <span className="header__account">{e.userName}</span>
            <i className="fa-solid fa-ellipsis"></i>
          </header>
          <article className="main__left__article">
            <img alt="post image" src={e.img} className="article__image" />
            <div className="article__icons">
              <button>
                <i classsName="fa-solid fa-heart"></i>
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
                alt="profile image"
                src="../images/jaewonyang/profile.jpg"
                className="like__profile"
              />
              <span className="like__account">
                <span>wecode_official</span>님 <span>외 10명</span>이 좋아합니다
              </span>
            </div>
            <div className="article__content">
              <span className="content__account">{e.userName}</span>
              <span className="content__text">
                {e.content} <span>더 보기</span>
              </span>
            </div>
          </article>
          <CommentsJaeWon />
        </div>
      ))}
    </>
  );
}

export default FeedJaeWon;
