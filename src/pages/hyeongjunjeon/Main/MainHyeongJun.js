import React, { useState } from 'react';
import './MainHyeongJun.scss';
import Comment from '../Components/Comment';

function Main() {
  const [comment1, setComment1] = useState('');
  const handleOnChange = event => {
    setComment1(event.target.value);
  };

  const [commentContainer, setCommentContainer] = useState([]);
  const handleOnSubmit = event => {
    event.preventDefault();
    if (comment1 === '') {
      return;
    }
    setCommentContainer(commentValueList => [...commentValueList, comment1]);
    setComment1('');
  };
  return (
    <div>
      <main>
        <div className="feeds">
          <article className="article">
            <div className="master">
              <div>
                <img
                  alt="masterProfileImg"
                  src="images/hyeongjunjeon/person2.jpg"
                  className="masterProfile"
                />
              </div>
              <span className="masterName"> canon_mj </span>
              <div>...</div>
            </div>

            <img
              alt="baking"
              src="images/hyeongjunjeon/baking.jpg"
              className="bakingImg"
            />

            <figure>
              <div className="iconBox">
                <div className="iconBox1st">
                  <i className="fa-solid fa-heart" />
                  <i className="fa-regular fa-comment" />
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </div>
                <div className="iconBox2nd">
                  <i className="fa-regular fa-bookmark" />
                </div>
              </div>

              <div>
                <div className="likeText">
                  <img
                    alt="likePersonProfile"
                    src="images/hyeongjunjeon/person.jpg"
                    className="likePerson"
                  />
                  <span className="aine">
                    <span className="boldText">aineworld</span>님{' '}
                    <span className="boldText">외 10명</span>이 좋아합니다
                  </span>
                </div>
                <div className="comment">
                  <div className="mj">
                    <span className="boldText">canon_mj</span> 위워크에서 진행한
                    베이킹 클래스..
                    <span className="more">더 보기</span>
                  </div>
                  <div>
                    <span className="boldText">neceosecius</span> 거봐
                    좋았잖아~~~~~😁
                  </div>
                </div>
                <Comment container={commentContainer} />
                <div className="beforeFourtyTwo">42분 전</div>
              </div>
            </figure>

            <form className="commentBox" onSubmit={handleOnSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="inputComment"
                  value={comment1}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <button className="commentBtn">게시</button>
              </div>
            </form>
          </article>
        </div>

        <div className="mainRight">
          <div className="rightInfo">
            <img
              alt="myProfileImg"
              src="images/hyeongjunjeon/person2.jpg"
              className="rightProfile"
            />
            <div className="myName">
              gud_jun_
              <br />
              <u>전형준</u>
            </div>
          </div>

          <div className="story">
            <div className="storyTextFlex">
              <div className="storyText">스토리</div>
              <div className="allStory">
                <strong>모두보기</strong>
              </div>
            </div>
            <div className="storyInfo">
              <img
                alt="storyProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>전형준</u>
              </div>
            </div>
            <div className="storyInfo">
              <img
                alt="storyProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>전형준</u>
              </div>
            </div>
            <div className="storyInfo">
              <img
                alt="storyProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>전형준</u>
              </div>
            </div>
            <div className="storyInfo">
              <img
                alt="storyProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>전형준</u>
              </div>
            </div>
            <div className="storyInfo">
              <img
                alt="storyProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>전형준</u>
              </div>
            </div>
            <div className="storyInfo">
              <img
                alt="storyProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>전형준</u>
              </div>
            </div>
            <div className="storyInfo">
              <img
                alt="storyProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>전형준</u>
              </div>
            </div>
          </div>

          <div className="recommend">
            <div className="textRecommend">
              <div className="recommend1st">회원님을 위한 추천</div>
              <div className="recommend2nd">
                <strong>모두보기</strong>
              </div>
            </div>
            <div className="storyInfo">
              <img
                alt="recommendProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>아이디 외 2명이 팔로우</u>
              </div>
              <div className="follow">팔로우</div>
            </div>
            <div className="storyInfo">
              <img
                alt="recommendProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>아이디 외 2명이 팔로우</u>
              </div>
              <div className="follow">팔로우</div>
            </div>
            <div className="storyInfo">
              <img
                alt="recommendProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="storyProfile"
              />
              <div className="storyName">
                gud_jun_
                <br />
                <u>아이디 외 2명이 팔로우</u>
              </div>
              <div className="follow">팔로우</div>
            </div>
          </div>

          <div className="etc">
            소개·도움말·홍보 센터·API·채용 정보·
            <br />
            개인정보처리방침·약관·위치·인기 계정·해시태그·언어
          </div>

          <div className="copy">© 2022 INSTAGRAM FROM META</div>
        </div>
      </main>
    </div>
  );
}

export default Main;
