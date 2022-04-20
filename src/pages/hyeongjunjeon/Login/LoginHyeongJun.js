import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginHyeongJun.scss';

function LoginHyeongJun() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };

  const goToMain = () => {
    navigate('/main-hyeongjun');
  };
  const [active, setAcvtive] = useState(true);

  const PassedLogin = () => {
    return id.includes('@') && pw.length > 4
      ? setAcvtive(false)
      : setAcvtive(true);
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
                onKeyUp={PassedLogin}
              />
            </div>
            <div className="password">
              <input
                type="password"
                class="pwBox"
                placeholder="비밀번호"
                onChange={handlePwInput}
                onKeyUp={PassedLogin}
              />
            </div>
            <div className="loginButton">
              <button
                className={!active ? 'activeBt' : 'unActiveBt'}
                onClick={goToMain}
                disabled={active}
              >
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

export default LoginHyeongJun;
