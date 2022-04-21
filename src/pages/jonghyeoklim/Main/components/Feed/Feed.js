import { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import './Feed.scss';

function Feed() {
  const [commentsList, setCommentsList] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [mainLike, setMainLike] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentsList(data);
      });
  }, []);

  const handleComment = e => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment === '') {
      return;
    }

    const newCommentData = [
      ...commentsList,
      {
        id: Math.floor(Math.random() * 100),
        userName: 'jonghyeok',
        content: newComment,
        isLiked: false,
        createdAt: '16분전',
      },
    ];
    setCommentsList(newCommentData);
    setNewComment('');
  };

  const handleCommentEnter = e => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  const handleDelete = id => {
    const index = commentsList.findIndex(value => value.id === id);
    const deleteCommentList = [
      ...commentsList.slice(0, index),
      ...commentsList.slice(index + 1),
    ];
    setCommentsList(deleteCommentList);
  };

  const handleMainLike = () => {
    if (mainLike === true) {
      setMainLike(false);
    } else {
      setMainLike(true);
    }
  };

  const handleLike = id => {
    const index = commentsList.findIndex(value => value.id === id);
    const isLikedCommentList = [...commentsList];
    if (isLikedCommentList[index].isLiked === true) {
      isLikedCommentList[index].isLiked = false;
    } else {
      isLikedCommentList[index].isLiked = true;
    }
    setCommentsList(isLikedCommentList);
  };

  return (
    <section className="feeds">
      <article className="article">
        <div className="writer-section">
          <div className="writer-profile">
            <img
              alt="profile-img"
              src="images/jonghyeoklim/lotso.jpeg"
              className="profile-img"
            />
            <span className="writer-id">canon_mj</span>
          </div>
          <div>
            <img alt="" className="moreOpt-icon" src="icon/more.svg" />
          </div>
        </div>
        <div className="img-section">
          <img
            alt="feedImg"
            src="images/jonghyeoklim/feedImg.jpg"
            className="feedImg"
          />
        </div>
        <div className="icon-section">
          <div>
            {mainLike ? (
              <i
                className="fa-solid fa-heart contents-heart isLiked"
                onClick={handleMainLike}
              />
            ) : (
              <i
                className="fa-regular fa-heart contents-heart"
                onClick={handleMainLike}
              />
            )}
            <i className="fa-regular fa-comment" />
            <i className="fa-solid fa-arrow-up-from-bracket" />
          </div>
          <div>
            <i className="fa-regular fa-bookmark" />
          </div>
        </div>
        <div className="likeCounting-section">
          <img
            alt="likeProfileImg"
            src="images/jonghyeoklim/lotso.jpeg"
            className="like-profile"
          />
          <p className="likeContent">
            <span>누구누구</span>님 외 <span>10명</span>이 좋아합니다.
          </p>
        </div>
        <div className="contents-section">
          <div className="comment">
            <span className="userId">canon_mj</span>
            <span>위워크에서 진행한 베이킹 클래스~</span>
          </div>
        </div>
        {commentsList.map(value => (
          <Comment
            key={value.id}
            commentInfo={value}
            handleDelete={handleDelete}
            handleLike={handleLike}
          />
        ))}
        <div className="writing-section">
          <input
            className="writing-input"
            type="text"
            placeholder="댓글 달기..."
            value={newComment}
            onChange={handleComment}
            onKeyUp={e => handleCommentEnter(e)}
          />
          <button className="writing-btn" onClick={addComment}>
            게시
          </button>
        </div>
      </article>
    </section>
  );
}

export default Feed;
