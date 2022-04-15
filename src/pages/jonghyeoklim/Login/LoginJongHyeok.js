import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginJongHyeok.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-jonghyeok');
  };

  const [Id, setId] = useState('');
  const handleIdInput = event => {
    setId(event.target.value);
  };

  const [PassWord, setPassWord] = useState('');
  const handlePwInput = event => {
    setPassWord(event.target.value);
  };

  return (
    <div className="container">
      <header className="logo_name">
        <span className="name">westargram</span>
      </header>
      <div>
        <div className="login">
          <input
            className="input-login"
            onChange={handleIdInput}
            type="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="input-pw"
            onChange={handlePwInput}
            type="password"
            placeholder="비밀번호"
          />
          <button
            onClick={goToMain}
            className="button"
            disabled={!(Id.search('@') && PassWord.length >= 5)}
          >
            로그인
          </button>
        </div>
        <div className="password_search">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
