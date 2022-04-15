import React, { useState } from 'react';

import './LoginHyeongJun.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-hyeongjun');
  };

  const handleIdInput = e => {
    setId(e.target.value);
    console.log('id:', e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
    console.log('pw:', e.target.value);
  };

  return (
    <div>
      <div className="Login">
        <div className="container">
          <header>westagram</header>

          <article>
            <div>
              <input
                type="text"
                className="idBox"
                placeholder="전화번호,사용자 이름 또는 이메일"
                onChange={handleIdInput}
              />
            </div>
            <div className="password">
              <input
                type="password"
                class="pwBox"
                placeholder="비밀번호"
                onChange={handlePwInput}
              />
            </div>
            <div className="loginButton">
              <button className="button" onClick={goToMain}>
                로그인
              </button>
            </div>

            <p className="forgetPw">비밀번호를 잊으셨나요?</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Login;
