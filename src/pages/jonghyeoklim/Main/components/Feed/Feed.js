import './Feed.scss';

function Feed({
  mainLike,
  handleMainLike,
  commentsList,
  Comment,
  handleDelete,
  handleLike,
  newComment,
  handleComment,
  handleCommentEnter,
  addComment,
}) {
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
        {commentsList.map((value, i) => (
          <Comment
            key={i}
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
