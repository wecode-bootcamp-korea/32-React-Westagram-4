import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Feed from './components/Feed/Feed';
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
  const [feedList, setFeedList] = useState([Feed]);
  const [commentsList, setCommentsList] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [mainLike, setMainLike] = useState(false);

  const handleComment = e => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
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

  return (
    <div>
      <section className="container-main">
        <section className="main-wrap">
          <section>
            {feedList.map((value, e) => (
              <Feed
                key={e}
                mainLike={mainLike}
                handleMainLike={handleMainLike}
                commentsList={commentsList}
                Comment={Comment}
                handleDelete={handleDelete}
                handleLike={handleLike}
                newComment={newComment}
                handleComment={handleComment}
                handleCommentEnter={handleCommentEnter}
                addComment={addComment}
              />
            ))}
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
