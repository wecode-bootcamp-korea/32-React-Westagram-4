import React, { useState } from 'react';
import './LoginJaeWon.scss';
import { useNavigate } from 'react-router-dom';

const LoginJaeWon = () => {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-jaewon');
  };
  const handleIdInput = event => {
    setIdInput(event.target.value);
  };
  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  return (
    <body className="LoginJaeWon">
      <article className="login">
        <h1 className="logo">Westagram</h1>
        <form className="login__input">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="input input__id"
            onChange={handleIdInput}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="input input__pw"
            onChange={handlePwInput}
          />
        </form>
        <button className="login__btn" onClick={goToMain}>
          로그인
        </button>
        <a href="https://www.naver.com/" className="notice">
          비밀번호를 잊으셨나요?
        </a>
      </article>
    </body>
  );
};

export default LoginJaeWon;
