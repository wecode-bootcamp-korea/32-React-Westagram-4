import React from 'react';
import './AsideJaeWon.scss';

function AsideJaeWon() {
  return (
    <div className="AsideJaeWon">
      <div className="main__right__header">
        <img
          alt="profile image"
          src="../images/jaewonyang/profile.jpg"
          className="header__profile"
        />
        <div className="header__account">
          <p className="account">wecode_bootcamp</p>
          <p className="description">WeCode | 위코드</p>
        </div>
      </div>
      <div className="main__right__articles">
        <div className="article article__story">
          <div className="article__title">
            <span className="story">스토리</span>
            <span className="all">모두 보기</span>
          </div>
          <div className="article__items">
            <div className="items__item">
              <img
                alt="profile image"
                src="../images/jaewonyang/profile.jpg"
                className="item__profile"
              />
              <div className="item__account">
                <div className="account">_yum_S</div>
                <div className="info">16분 전</div>
              </div>
            </div>
            <div className="items__item">
              <img
                alt="profile image"
                src="../images/jaewonyang/profile.jpg"
                className="item__profile"
              />
              <div className="item__account">
                <div className="account">drink_eat_drink</div>
                <div className="info">3시간 전</div>
              </div>
            </div>
            <div className="items__item">
              <img
                alt="profile image"
                src="../images/jaewonyang/profile.jpg"
                className="item__profile"
              />
              <div className="item__account">
                <div className="account">hyukyc</div>
                <div className="info">20시간 전</div>
              </div>
            </div>
            <div className="items__item">
              <img
                alt="profile image"
                src="../images/jaewonyang/profile.jpg"
                className="item__profile"
              />
              <div className="item__account">
                <div className="account">lalala</div>
                <div className="info">21시간 전</div>
              </div>
            </div>
          </div>
        </div>
        <div className="article article__member ">
          <div className="article__title">
            <span className="story">회원님을 위한 추천</span>
            <span className="all">모두 보기</span>
          </div>
          <div className="article__items">
            <div className="items__item">
              <img
                alt="profile image"
                src="../images/jaewonyang/profile.jpg"
                className="item__profile"
              />
              <div className="item__account">
                <div className="account">joaaaahye</div>
                <div className="info">nuganuga님 외 2명이...</div>
              </div>
              <div className="item__followBtn">팔로우</div>
            </div>
            <div className="items__item">
              <img
                alt="profile image"
                src="../images/jaewonyang/profile.jpg"
                className="item__profile"
              />
              <div className="item__account">
                <div className="account">ramper21</div>
                <div className="info">2ourcodffe님 외 12명...</div>
              </div>
              <div className="item__followBtn">팔로우</div>
            </div>
            <div className="items__item">
              <img
                alt="profile image"
                src="../images/jaewonyang/profile.jpg"
                className="item__profile"
              />
              <div className="item__account">
                <div className="account">helloWorld</div>
                <div className="info">jjdsadsfdsfs님 외 3명...</div>
              </div>
              <div className="item__followBtn">팔로우</div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__right__footer">
        <p>
          Instagram 정보·지원·홍보 센터·API·채용
          정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
        </p>
        <p> © 2019 INSTAGRAM</p>
      </div>
    </div>
  );
}

export default AsideJaeWon;
