import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSungYong.scss';

const Login = () => {
  return (
    <div className="login-container">
      <header className="login-header">Westagram</header>
      <article className="login-main">
        <input
          id="loginId"
          className="login-input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <br />
        <input
          id="loginPw"
          className="login-input"
          type="password"
          placeholder="비밀번호"
        />
        <br />
        <button id="loginBtn" className="login-btn" type="button" disabled>
          로그인
        </button>
      </article>
      <footer className="login-footer">
        <a className="forgot-id" href="/">
          비밀번호를 잊으셨나요?
        </a>
        <Link to="/main-sungyong">메인</Link>
      </footer>
    </div>
  );
};

export default Login;
