import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginJaeWon.scss';

const LoginJaeWon = () => {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const navigate = useNavigate();
  const goToMain = event => {
    event.preventDefault();
    fetch('http://10.58.5.27:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID_PASSWORD') {
          alert('비밀번호가 틀렸습니다.');
        } else if (result.message === 'SUCCESS') {
          localStorage.setItem('token', result.access_token);
          alert('환영합니다');
          navigate('/main-jaewon');
        }
      });
  };

  const handleIdInput = event => {
    setIdInput(event.target.value);
  };

  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  return (
    <div className="LoginJaeWon">
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
          <button
            className="login__btn"
            onClick={goToMain}
            disabled={
              idInput.includes('@') && pwInput.length >= 5 ? false : true
            }
          >
            로그인
          </button>
        </form>
        <a href="https://www.naver.com/" className="notice">
          비밀번호를 잊으셨나요?
        </a>
      </article>
    </div>
  );
};
export default LoginJaeWon;
