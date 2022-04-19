import './Comment.scss';

function Comment({ commentInfo, handleDelete, handleLike }) {
  // {
  //   id: 89,
  //   userId: 'lotso',
  //   text: '아라라라',
  //   isLiked: true,
  //   createdAt: '10분 전',
  // }

  // { mock data
  //   "id": 3,
  //   "userName": "jayPark",
  //   "content": "Hey.",
  //   "isLiked": false
  // }

  return (
    <div className="comments-section">
      <div className="comment">
        <div className="comment-box">
          <div>
            <span className="userId">{commentInfo.userName} </span>
            <span> {commentInfo.content}</span>
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
