import React, { useState, useEffect } from 'react';
import CommentJaeWon from '../Comment/CommentJaeWon';
import './CommentsJaeWon.scss';

function Comments() {
  const [commentInput, setCommentInput] = useState('');
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

  const handleCommentInput = event => {
    setCommentInput(event.target.value);
  };

  const onClick = event => {
    event.preventDefault();
    if (commentInput.trim() !== '') {
      let newArr = [...commentList];
      newArr.push({ id: Date.now(), userName: 'Lily', content: commentInput });
      setCommentList(newArr);
    }
    setCommentInput('');
  };

  return (
    <footer className="CommentsJaeWon">
      <CommentJaeWon commentList={commentList} key={commentList.id} />
      <span className="footer__time">42분 전</span>
      <form className="footer__comment__input">
        <input
          type="text"
          placeholder="댓글 달기..."
          className="comment__input"
          onChange={handleCommentInput}
          value={commentInput}
        />
        <button
          className={
            commentInput !== '' ? 'comment__button active' : 'comment__button'
          }
          onClick={onClick}
        >
          게시
        </button>
      </form>
    </footer>
  );
}

export default Comments;
