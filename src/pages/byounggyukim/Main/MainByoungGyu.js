import React, { useEffect, useState } from 'react';
// import '../../Styles/reset.scss';
import './MainByoungGyu.scss';
import '../../../styles/common.scss';
import Comment from './CommentByoungGyu';
function Main() {
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [active, setActive] = useState(false);

  const addingComment = () => {
    let copyComment = [...comment];
    // let copyNumber = number;
    if (inputValue.length) {
      copyComment.push({
        id: Date.now(),
        userName: 'wecode_bootcamp',
        content: inputValue,
      });
      setComment(copyComment);
      setInputValue('');
    }
    // }
  };

  const submitComment = event => {
    if (event.key === 'Enter') {
      addingComment();
    }
  };

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
      {/* <nav>
        <div className="navigation">
          <span className="title">
            <img
              alt="위스타그램 아이콘"
              src="/images/instagram icon.png"
              className="icon"
            />
            <span className="westa">westagram</span>
          </span>
          <span className="search">
            <input type="text" placeholder="검색" className="inside" />
          </span>
          <span className="pic">
            <i className="fa-regular fa-compass" />
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-user" />
          </span>
        </div>
      </nav> */}
      <main>
        <div className="feeds">
          <article>
            <div className="nicknameImage">
              <img
                alt="canon_mj님의 프로필 사진"
                src="../../../.././images/byounggyukim/instagram icon.png"
                className="profileName"
              />
              <span className="userid">canon_mj</span>
            </div>
            <img
              alt="canon_mj님의 피드사진"
              src="../../../.././images/byounggyukim/feedimage.webp"
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
                src="../../../.././images/byounggyukim/instagram icon.png"
                className="profileName"
              />
              <span className="userid">aineWorld</span>님 외 10명이 좋아합니다
              <div className="comment">
                <div>
                  <span className="userid">canon_mj</span> 위워크에서 진행한
                  베이킹 클래스...<span className="changeColor">더 보기</span>
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
                // disabled={active}
              />
            </div>
          </article>
        </div>
        <div className="feedRight">
          <div className="myProfile">
            <div className="profile">
              <span className="username">
                <img
                  alt="나의 프로필 사진"
                  src="../../../.././images/byounggyukim/logo.jpeg"
                  className="wecode"
                />
                <span className="userid">
                  wecode_bootcamp <br />
                  <span className="changeColor">WeCode | 위코드</span>
                </span>
              </span>
            </div>
          </div>
          <div className="story">
            <div className="split">
              <span className="changeColor">스토리</span>
              <span id="seeall">모두 보기</span>
            </div>
            <div className="profile">
              <span className="username">
                <img
                  alt="_yum_s님의 프로필 사진"
                  src="../../../.././images/byounggyukim/logo.jpeg"
                  className="wecode"
                />
                <span className="userid">
                  _yum_s <br />
                  <span className="changeColor">16분 전</span>
                </span>
              </span>
            </div>
            <div className="profile">
              <span className="username">
                <img
                  alt="drink_eat_drink님의 프로필 사진"
                  src="../../../.././images/byounggyukim/logo.jpeg"
                  className="wecode"
                />
                <span className="userid">
                  drink_eat_drink <br />
                  <span className="changeColor">3시간 전</span>
                </span>
              </span>
            </div>
            <div className="profile">
              <span className="username">
                <img
                  alt="hyukyc님의 프로필 사진"
                  src="../../../.././images/byounggyukim/logo.jpeg"
                  className="wecode"
                />
                <span className="userid">
                  hyukyc <br />
                  <span className="changeColor">20시간 전</span>
                </span>
              </span>
            </div>
            <div className="profile">
              <span className="username">
                <img
                  alt="hyukyc님의 프로필 사진"
                  src="../../../.././images/byounggyukim/logo.jpeg"
                  className="wecode"
                />
                <span className="username">
                  <span className="userid">
                    jminkeek <br />
                    <span className="changeColor">1일 전</span>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="recommend">
            <div className="split">
              <span className="changeColor">회원님을 위한 추천</span>
              <span id="seeall">모두 보기</span>
            </div>
            <div className="split">
              <span className="withoutFollow">
                <img
                  alt="joaaaaaahye님의 프로필 사진"
                  src="../../../.././images/byounggyukim/logo.jpeg"
                  className="wecode"
                />
                <span className="userid">
                  joaaaaaahye <br />
                  <span className="changeColor">_legend_a님 외 2명이 ...</span>
                </span>
              </span>
              <span className="follow">팔로우</span>
            </div>
            <div className="split">
              <span className="withoutFollow">
                <img
                  alt="rampart81님의 프로필 사진"
                  src="../../../.././images/byounggyukim/logo.jpeg"
                  className="wecode"
                />
                <span className="userid">
                  rampart81 <br />
                  <span className="changeColor">ringo.in.seoul님 외 12...</span>
                </span>
              </span>
              <span className="follow">팔로우</span>
            </div>
            <div className="split">
              <span className="withoutFollow">
                <img
                  alt="shawnjjoo님의 프로필 사진"
                  src="../../../.././images/byounggyukim/logo.jpeg"
                  className="wecode"
                />
                <span className="userid">
                  shawnjjoo <br />
                  <span className="changeColor">jimmylee1220님 외 1...</span>
                </span>
              </span>
              <span className="follow">팔로우</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
