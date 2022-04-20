import React, { useState } from 'react';
import './LoginByoungGyu.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [loginBtn, setLoginBtn] = useState(true);

  const goToMain = e => {
    // e.preventDefault();
    // fetch('http://10.58.2.16:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: loginId,
    //     password: loginPw,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'SUCCESS') {
    //       alert('환영합니다!');
    navigate('/main-byounggyu');
    // } else {
    //   alert('저리가');
    // }
    // });
  };

  const idInput = event => {
    setLoginId(event.target.value);
  };

  const pwInput = event => {
    setLoginPw(event.target.value);
  };

  function activation() {
    return (loginId.length && loginPw.length) > 5
      ? setLoginBtn(false)
      : setLoginBtn(true);
  }

  return (
    <div className="login">
      <div className="main">
        <div className="loginbox">
          <p>
            <span>westagram</span>
          </p>
          <form onSubmit={goToMain}>
            <input
              className="login-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={idInput}
              onKeyUp={activation}
            />
            <input
              className="login-pass"
              type="password"
              placeholder="비밀번호"
              onChange={pwInput}
              onKeyUp={activation}
            />
            <input
              type="submit"
              className={`button ${loginBtn ? 'loginbtn' : 'activebtn'}`}
              value="로그인"
              onClick={goToMain}
              disabled={loginBtn}
            />
          </form>
          <p className="forgot">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
