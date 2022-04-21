import React, { useState } from 'react';

const Comment = props => {
  return (
    <>
      {props.feedList.map(feedList => {
        return (
          <div className="history" key={feedList.id}>
            <div className="name-box">
              <span className="name">{feedList.userName}</span>
            </div>
            <span className="content">{feedList.content}...</span>
          </div>
        );
      })}
    </>
  );
};

export default Comment;
