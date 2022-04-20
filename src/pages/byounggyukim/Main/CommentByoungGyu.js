function Comment(comment) {
  return (
    <div>
      <span className="userid">{comment.name}</span> &nbsp;
      {comment.comment}
    </div>
  );
}

export default Comment;
