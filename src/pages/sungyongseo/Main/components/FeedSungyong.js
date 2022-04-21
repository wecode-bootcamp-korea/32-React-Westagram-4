import React, { useState } from 'react';
import '../MainSungYong.js';

// const feedList = commentList.comment.map(feedList => {
//   return feedList;
// });
const Feed = props => {
  return props.commentList.map((commentList, i) => {
    return <FeedSon commentList={commentList} key={i} />;
  });
};

const FeedSon = props => {
  const [commentInput, setCommentInput] = useState('');
  const [commentBtn, setCommentBtn] = useState(true);
  const [boolean, setBoolean] = useState(false);
  const { commentList } = props;

  const changeInput = e => {
    setCommentInput(e.target.value);
  };
  const changeBtn = e => {
    setCommentBtn(commentInput === '' || commentInput === null ? true : false);
    if (e.key === 'Enter') {
      console.log(...commentList);
      let copy = [...commentList];
      copy.push({
        id: 4,
        userName: 'wecode',
        content: commentInput,
        mention: 'zz',
        comment: [
          {
            userName: '1댓글 작성자1',
            content: '1댓글 내용1',
            time: true,
            overflow: true,
          },
          {
            userName: '1댓글 작성자1',
            content: '1댓글 내용1',
            time: true,
            overflow: true,
          },
          {
            userName: '1댓글 작성자1',
            content: '1댓글 내용1',
            time: true,
            overflow: true,
          },
        ],
      });
      props.setCommentList(copy);

      // setCommentBtn(true);
      // setCommentInput(null);
    }
  };

  const sendComment = () => {
    return commentBtn === false
      ? e => {
          if (commentInput !== '' && e.key === 'Enter') {
            let copy = [...commentList];
            copy.push({
              userName: 'wecode',
              content: commentInput,
              // time: '방금 전',
              // overflow: '더 보기',
            });
            props.setCommentList(copy);
            setCommentBtn(true);
            setCommentInput('');
          }
        }
      : null;
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
          <span className="name">{commentList.userName}</span>
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
            <span className="name">aineworld</span>
            <span className="like">님 외 10명이 좋아합니다.</span>
          </div>
          <div className="history">
            <div className="name-box">
              <span className="name">{commentList.id}</span>
            </div>
            <span className="content">{commentList.content}...</span>
          </div>
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
