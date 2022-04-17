import './Comment.scss';

function Comment({ commentInfo, handleDelete, handleLike }) {
  // {
  //   id: 89,
  //   userId: 'lotso',
  //   text: '아라라라',
  //   isLiked: true,
  //   createdAt: '10분 전',
  // }

  return (
    <div className="comments-section">
      <div className="comment">
        <div className="comment-box">
          <div>
            <span className="userId">{commentInfo.userId} </span>
            <span> {commentInfo.text}</span>
          </div>
          <div>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => handleDelete(commentInfo.id)}
            />
            {commentInfo.isLiked ? (
              <i
                className="fa-solid fa-heart isLiked"
                onClick={() => handleLike(commentInfo.id)}
              />
            ) : (
              <i
                className="fa-regular fa-heart"
                onClick={() => handleLike(commentInfo.id)}
              />
            )}
          </div>
        </div>
        <div className="comment-time">{commentInfo.createdAt}</div>
      </div>
    </div>
  );
}

export default Comment;
