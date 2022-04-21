import React, { useState } from 'react';
import Comment from './CommentSungYong.js';

const Feed = props => {
  const [commentInput, setCommentInput] = useState('');
  const [commentBtn, setCommentBtn] = useState(true);
  const [boolean, setBoolean] = useState(false);

  const [test, setTest] = useState([]);

  const changeInput = e => {
    setCommentInput(e.target.value);
    setCommentBtn(
      e.target.value === '' || e.target.value === null ? true : false
    );
  };

  const sendComment = e => {
    let copy = [...props.commentList.comment];
    copy.push({
      id: 4,
      userName: 'wecode',
      content: commentInput,
      time: '방금 전',
      overflow: '더 보기',
    });
    setTest(copy);
    console.log(test);
    setCommentBtn(true);
    setCommentInput('');
  };

  const changeBtn = e => {
    // if (e.key === 'Enter') {
    //   props.setCommentList(
    //   ...props.userName
    //   {
    //     id: 4,
    //     userName: 'wecode',
    //     content: commentInput,
    //     mention: 'zz',
    //     comment: [
    //       {
    //         userName: '1댓글 작성자1',
    //         content: '1댓글 내용1',
    //         time: true,
    //         overflow: true,
    //       },
    //       {
    //         userName: '1댓글 작성자1',
    //         content: '1댓글 내용1',
    //         time: true,
    //         overflow: true,
    //       },
    //       {
    //         userName: '1댓글 작성자1',
    //         content: '1댓글 내용1',
    //         time: true,
    //         overflow: true,
    //       },
    //     ],
    //   });
    //   setCommentBtn(true);
    //   setCommentInput(null);
    //   )}
  };

  return (
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

          <span className="name">{props.commentList.userName}</span>
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
            <i
              onClick={() => {
                setBoolean(!boolean);
              }}
              className={
                boolean === false ? 'fa-regular fa-heart' : 'fa-solid fa-heart'
              }
              style={boolean === false ? { color: 'black' } : { color: 'red' }}
            />
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

            <span className="name">gg</span>
            <span className="like">님 외 10명이 좋아합니다.</span>
          </div>
          <Comment feedList={props.commentList.comment} test={test} />
        </div>

        <div className="comment-footer">
          <input
            className="comment"
            onChange={changeInput}
            onKeyUp={changeBtn}
            value={commentInput}
            type="text"
            placeholder="댓글 달기..."
          />

          <button
            onClick={sendComment}
            disabled={commentBtn === true ? true : false}
            className="push"
            type="button"
          >
            <i className="fa-solid fa-paper-plane" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Feed;
