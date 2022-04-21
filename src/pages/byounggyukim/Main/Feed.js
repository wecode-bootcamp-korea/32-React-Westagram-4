import React, { useEffect, useState } from 'react';
import Comment from './CommentByoungGyu';

function Feed() {
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [feed, setFeed] = useState([]);

  const addingComment = () => {
    let copyComment = [...comment];
    if (inputValue.length) {
      copyComment.push({
        id: Date.now(),
        userName: 'wecode_bootcamp',
        content: inputValue,
      });
      setComment(copyComment);
      setInputValue('');
    }
  };

  const submitComment = event => {
    if (event.key === 'Enter') {
      addingComment();
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setComment(data);
      });
  }, []);

  return (
    <div className="main">
      {feed.map((feed, index) => {
        return (
          <main key={index}>
            <div className="feeds">
              <article>
                <div className="nicknameImage">
                  <img
                    alt="canon_mj님의 프로필 사진"
                    src="images/byounggyukim/instagram icon.png"
                    className="profileName"
                  />
                  <span className="userid">{feed.feedPost}</span>
                </div>
                <img
                  alt="canon_mj님의 피드사진"
                  src={feed.feedImg}
                  className="feedImage"
                />
                <div className="likeCommentShare">
                  <i className="fa-solid fa-heart" id="heart" />
                  <i className="fa-regular fa-comment" />
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                  <i className="fa-regular fa-bookmark" />
                </div>
                <div className="commentSection">
                  <img
                    alt="aineWorld님의 프로필 사진"
                    src="images/byounggyukim/instagram icon.png"
                    className="profileName"
                  />
                  <span className="userid">aineWorld</span>님 외 10명이
                  좋아합니다
                  <div className="comment">
                    <div>
                      <span className="userid">{feed.feedPost}</span>
                      {feed.feedContent}
                      <span className="changeColor">더 보기</span>
                    </div>
                    <div>
                      <span className="userid">neceosecius</span> 거봐
                      좋았잖아~~~~~🙆🏻‍♀️
                    </div>
                    <div className="positionOfComment">
                      <div className="comments">
                        {/* <Comment comment={comment} /> */}
                        <ul>
                          {comment.map(comment => {
                            return (
                              <Comment
                                key={comment.id}
                                name={comment.userName}
                                comment={comment.content}
                              />
                            );
                          })}
                        </ul>
                      </div>
                      <div className="changeColor">42분 전</div>
                    </div>
                  </div>
                </div>
                <div className="form">
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    className="addComment"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyUp={submitComment}
                  />
                  <input
                    type="button"
                    value="게시"
                    id="btn"
                    onClick={addingComment}
                  />
                </div>
              </article>
            </div>
          </main>
        );
      })}
    </div>
  );
}
export default Feed;
