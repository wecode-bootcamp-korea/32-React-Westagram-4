import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSungYong.scss';

const Login = () => {
  let [value, setValue] = useState();
  const buttonRef = useRef();

  function handleIdInput(event) {
    value = event.target.value;
    value.includes('@') && value.length > 3
      ? (buttonRef.current.disabled = false)
      : (buttonRef.current.disabled = true);
  }
  function handlePwInput(event) {
    value = event.target.value;
    value.length > 5
      ? (buttonRef.current.disabled = false)
      : (buttonRef.current.disabled = true);
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
          onChange={handlePwInput}
          id="loginPw"
          className="login-input"
          type="password"
          placeholder="비밀번호"
        />
        <br />
        <button ref={buttonRef} className="login-btn" type="button" disabled>
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
