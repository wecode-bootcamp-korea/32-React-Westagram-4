import './Comment.scss';

function Comment({ commentInfo }) {
  return (
    <div className="comments-section">
      <div className="comment">
        <div className="comment-box">
          <div>
            <span className="userId">{commentInfo.userId} </span>
            <span> {commentInfo.text}</span>
          </div>
          <i className="fa-regular fa-heart" />
        </div>
        <div className="comment-time">{commentInfo.createdAt}</div>
      </div>
    </div>
  );
}

export default Comment;
