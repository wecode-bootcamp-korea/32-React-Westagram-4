import React from 'react';
import './AsideByoungGyu.scss';

function Aside() {
  return (
    <div className="feedRight">
      <div className="myProfile">
        <div className="profile">
          <span className="username">
            <img
              alt="나의 프로필 사진"
              src="images/byounggyukim/logo.jpeg"
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
              src="images/byounggyukim/logo.jpeg"
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
              src="images/byounggyukim/logo.jpeg"
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
              src="images/byounggyukim/logo.jpeg"
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
              src="images/byounggyukim/logo.jpeg"
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
              src="images/byounggyukim/logo.jpeg"
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
              src="images/byounggyukim/logo.jpeg"
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
              src="images/byounggyukim/logo.jpeg"
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
  );
}

export default Aside;
