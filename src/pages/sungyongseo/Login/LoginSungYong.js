import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSungYong.scss';
const Login = () => {
  let [a, b] = useState('');

  function handleIdInput(event) {
    a = event.target.value;
    console.log(a);
    return a;
  }
  return (
    <div className="login-container">
      <header className="login-header">Westagram</header>
      <main className="login-main">
        <input
          onChange={handleIdInput}
          id="loginId"
          className="login-input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <br />
        <input
          onChange={handleIdInput}
          id="loginPw"
          className="login-input"
          type="password"
          placeholder="비밀번호"
        />
        <br />
        <button id="loginBtn" className="login-btn" type="button" disabled>
          로그인
        </button>
      </main>
      <footer className="login-footer">
        <Link to="/main-sungyong">비밀번호를 잊으셨나요?</Link>
      </footer>
    </div>
  );
};

export default Login;
