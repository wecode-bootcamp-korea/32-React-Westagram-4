import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginSungYong.scss';

const Login = () => {
  const navigate = useNavigate();

  const [userSignUp, setUserSignUp] = useState({ id: '', pw: '' });

  const [userSignIn, setUserSignIn] = useState({ id: '', pw: '' });
  const [signInBtn, setSingInBtn] = useState(true);

  const check = e => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value,
    });
  };

  const checkSignIn = e => {
    setUserSignIn({
      ...userSignIn,
      [e.target.name]: e.target.value,
    });

    userSignIn.id.includes('@') &&
    userSignIn.id.length >= 5 &&
    userSignIn.pw.length >= 5
      ? setSingInBtn(false)
      : setSingInBtn(true);
  };

  const signUp = () => {
    fetch('http://10.58.7.44:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: userSignUp,
        password: userSignUp,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  const signIn = () => {
    fetch('http://10.58.7.44:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: userSignIn,
        password: userSignIn,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));

    navigate('/main-sungyong');
  };

  return (
    <div className="login-container">
      <header className="login-header">Westagram</header>
      <main className="login-main">
        <div>
          <input name="id" onChange={check} className="join-input" />
          <input name="pw" onChange={check} className="join-input" />
          <button onClick={signUp}>회원가입</button>
        </div>
        <input
          onChange={checkSignIn}
          className="login-input"
          name="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={checkSignIn}
          className="login-input"
          name="pw"
          type="password"
          placeholder="비밀번호"
        />
        <button
          onClick={signIn}
          className="login-btn"
          type="button"
          disabled={signInBtn}
        >
          로그인
        </button>
      </main>
      <footer className="login-footer">
        <Link to="">비밀번호를 잊으셨나요?</Link>
      </footer>
    </div>
  );
};

export default Login;
