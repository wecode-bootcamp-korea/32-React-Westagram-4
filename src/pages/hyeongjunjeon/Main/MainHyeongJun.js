import React from 'react';
import Feed from '../Components/Feed';
import './MainHyeongJun.scss';

function MainHyeongJun() {
  return (
    <div>
      <main>
        <div className="feed">
          <Feed />
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

export default MainHyeongJun;
