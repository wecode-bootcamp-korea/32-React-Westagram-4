import './Comment.scss';

function Comment({ commentInfo }) {
  return (
    <div className="comments-section">
      <div class="comment">
        <div class="comment-box">
          <div>
            <span class="userId">{commentInfo.userId}</span>
            <span>{commentInfo.text}</span>
          </div>
          <i class="fa-regular fa-heart" />
        </div>
        <div class="comment-time">{commentInfo.createdAtgit}</div>
      </div>
    </div>
  );
}

export default Comment;
