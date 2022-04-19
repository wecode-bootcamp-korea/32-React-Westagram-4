import React from 'react';
import './CommentJaeWon.scss';

function CommentJaeWon({ commentList, key }) {
  return (
    <>
      <ul className="Comment">
        {commentList.map(e => (
          <li className="footer__comment" key={key}>
            <span className="comment__account">{e.account}</span>
            <span className="comment__text">{e.text}</span>
            <button className="comment__heart">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentJaeWon;
