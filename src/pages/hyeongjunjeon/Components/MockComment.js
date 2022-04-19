import React from 'react';

export default function MockComment(props) {
  return (
    <ul>
      {props.dComment.map(comment => {
        return (
          <li key={comment.id}>
            <span className="commentUserId">{comment.userName}</span>
            &nbsp;{comment.content}
          </li>
        );
      })}
    </ul>
  );
}
