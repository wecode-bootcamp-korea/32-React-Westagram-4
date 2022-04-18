import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Recommendation from './components/Recommendation/Recommendation';
import Story from './components/Story/Story';
import Comment from './components/Comment/Comment';
import './MainJongHyeok.scss';

function MainJongHyeok() {
  const dummyData = [
    {
      image: 'images/jonghyeoklim/lotso.jpeg',
      userId: '유림',
      createdAt: '17분전',
    },
    {
      image: 'images/jonghyeoklim/lotso.jpeg',
      userId: '_yum_s',
      createdAt: '100분전',
    },
    {
      image: 'images/jonghyeoklim/lotso.jpeg',
      userId: '덕순',
      createdAt: '15분전',
    },
    {
      image: 'images/jonghyeoklim/lotso.jpeg',
      userId: '덕구',
      createdAt: '16분전',
    },
  ];

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentsList(data);
      });
  }, []);

  const [liveData, setLiveData] = useState(dummyData);
  const [commentsList, setCommentsList] = useState([]);
  const [newComment, setNewComment] = useState(''); //문자열. 새 댓글 '내용'
  const [mainLike, setMainLike] = useState(false);

  const handleComment = e => {
    // console.log(e.target.value);
    setNewComment(e.target.value);
  };

  const addComment = () => {
    //newComment를 commentList배열에다가 담는다~!
    //기존 자바스크립트 코드에서는 commentsList.push
    //리액트에서는 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않으므로--> push 사용 불가!
    //concat을 사용해야 함(or 구조분해할당(...))
    if (newComment === '') {
      return;
    }

    const newCommentData = [
      ...commentsList,
      {
        id: Math.floor(Math.random() * 100),
        userName: 'jonghyeok',
        content: newComment,
        isLiked: false,
        createdAt: '16분전',
      },
    ];
    setCommentsList(newCommentData);
    setNewComment('');
  };

  const handleCommentEnter = e => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  const handleDelete = id => {
    const index = commentsList.findIndex(value => value.id === id);
    const deleteCommentList = [
      ...commentsList.slice(0, index),
      ...commentsList.slice(index + 1),
    ];
    setCommentsList(deleteCommentList);
  };

  const handleMainLike = () => {
    if (mainLike === true) {
      setMainLike(false);
    } else {
      setMainLike(true);
    }
  };

  const handleLike = id => {
    const index = commentsList.findIndex(value => value.id === id);
    const isLikedCommentList = [...commentsList];
    if (isLikedCommentList[index].isLiked === true) {
      isLikedCommentList[index].isLiked = false;
    } else {
      isLikedCommentList[index].isLiked = true;
    }
    setCommentsList(isLikedCommentList);
  };

  // console.log(commentsList);

  return (
    <div>
      <section className="container-main">
        <section className="main-wrap">
          <section className="feeds">
            <article className="article">
              <div className="writer-section">
                <div className="writer-profile">
                  <img
                    alt="profile-img"
                    src="images/jonghyeoklim/lotso.jpeg"
                    className="profile-img"
                  />
                  <span className="writer-id">canon_mj</span>
                </div>
                <div>
                  <img alt="" className="moreOpt-icon" src="icon/more.svg" />
                </div>
              </div>
              <div className="img-section">
                <img
                  alt="feedImg"
                  src="images/jonghyeoklim/feedImg.jpg"
                  className="feedImg"
                />
              </div>
              <div className="icon-section">
                <div>
                  {mainLike ? (
                    <i
                      className="fa-solid fa-heart contents-heart isLiked"
                      onClick={handleMainLike}
                    />
                  ) : (
                    <i
                      className="fa-regular fa-heart contents-heart"
                      onClick={handleMainLike}
                    />
                  )}
                  <i className="fa-regular fa-comment" />
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </div>
                <div>
                  <i className="fa-regular fa-bookmark" />
                </div>
              </div>
              <div className="likeCounting-section">
                <img
                  alt="likeProfileImg"
                  src="images/jonghyeoklim/lotso.jpeg"
                  className="like-profile"
                />
                <p className="likeContent">
                  <span>누구누구</span>님 외 <span>10명</span>이 좋아합니다.
                </p>
              </div>
              <div className="contents-section">
                <div className="comment">
                  <span className="userId">canon_mj</span>
                  <span>위워크에서 진행한 베이킹 클래스~</span>
                </div>
              </div>
              {commentsList.map((value, i) => (
                <Comment
                  key={i}
                  commentInfo={value}
                  handleDelete={handleDelete}
                  handleLike={handleLike}
                />
              ))}
              <div className="writing-section">
                <input
                  className="writing-input"
                  type="text"
                  placeholder="댓글 달기..."
                  value={newComment}
                  onChange={handleComment}
                  onKeyUp={e => handleCommentEnter(e)}
                />
                <button className="writing-btn" onClick={addComment}>
                  게시
                </button>
              </div>
            </article>
          </section>
          <aside className="main-right">
            <div className="wecode-desc">
              <img
                alt="logoImg"
                src="images/jonghyeoklim/wecodeLogo.jpeg"
                className="wecode-logo"
              />
              <div className="wecode-profile">
                <div>Wecode_bootcamp</div>
                <div className="wecode-sub-profile">WeCode | 위코드</div>
              </div>
            </div>
            <section className="story-section">
              <div className="mainSection-header">
                <span>스토리</span>
                <span>모두보기</span>
              </div>
              <ul className="story-list">
                {liveData.map((value, idx) => (
                  <Story key={idx} storyInfo={value} />
                ))}
              </ul>
            </section>
            <section className="recomm-section">
              <div className="mainSection-header">
                <span>회원님을 위한 추천</span>
                <span>모두보기</span>
              </div>
              <ul className="story-list">
                {liveData.map((value, idx) => (
                  <Recommendation key={idx} recommInfo={value} />
                ))}
              </ul>
            </section>
            <div>
              <div className="westa-footer">
                Westagram 정보. 지원. 홍보 센터. API. 채용 정보.
                개인정보처리방침. 양관. 디렉터리. 프로필. 해시태그. 언어
              </div>
              <div>© 2019 WESTAGRAM</div>
            </div>
          </aside>
        </section>
      </section>
    </div>
  );
}

export default MainJongHyeok;
