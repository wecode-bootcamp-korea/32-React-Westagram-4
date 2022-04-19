import React from 'react';
import { Link } from 'react-router-dom';

import './Linker.scss';

function Linker() {
  return (
    <div className="total">
      <div className="intro">Wecode 32기 Front-End Westagram Team 4</div>
      <div className="frontLine">
        <div className="nemobox">
          <h1 className="name">김병규님의 위스타그램 링크</h1>
          <h2>
            <Link to="/login-byounggyu">
              <span className="login">Login</span>
            </Link>
          </h2>
          <h2 className="main">
            <Link to="/main-byounggyu">
              <span className="main">Main</span>
            </Link>
          </h2>
        </div>
        <div className="nemobox">
          <h1 className="name">서성용님의 위스타그램 링크</h1>
          <h2>
            <Link to="/login-sungyong">
              <span className="login">Login</span>
            </Link>
          </h2>
          <h2 className="main">
            <Link to="/main-sungyong">
              <span className="main">Main</span>
            </Link>
          </h2>
        </div>
        <div className="nemobox">
          <h1 className="name">양재원님의 위스타그램 링크</h1>
          <h2>
            <Link to="/login-jaewon">
              <span className="login">Login</span>
            </Link>
          </h2>
          <h2 className="main">
            <Link to="/main-jaewon">
              <span className="main">Main</span>
            </Link>
          </h2>
        </div>
      </div>
      <div className="backLine">
        <div className="nemobox">
          <h1 className="name">임종혁님의 위스타그램 링크</h1>
          <h2>
            <Link to="/login-jonghyeok">
              <span className="login">Login</span>
            </Link>
          </h2>
          <h2 className="main">
            <Link to="/main-jonghyeok">
              <span className="main">Main</span>
            </Link>
          </h2>
        </div>
        <div className="nemobox">
          <h1 className="name">전형준님의 위스타그램 링크</h1>
          <h2>
            <Link to="/login-hyeongjun">
              <span className="login">Login</span>
            </Link>
          </h2>
          <h2 className="main">
            <Link to="/main-hyeongjun">
              <span className="main">Main</span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Linker;
