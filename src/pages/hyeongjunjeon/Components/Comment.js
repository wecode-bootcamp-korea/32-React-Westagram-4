import React from 'react';

export default function Comment(props) {
  return (
    <div>
      <ul className="userCommentList">
        {props.container.map((value, index) => (
          <li key={index}>
            <span className="commentUserId">user_Id </span>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
