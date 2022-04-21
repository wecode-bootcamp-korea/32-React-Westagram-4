import './Story.scss';

function Story({ storyInfo }) {
  // 부모로 부터 받은 storyInfo는 아래와 같은 데이터임.
  // storyInfo = {
  //   image: "./images/lotso.jpeg",
  //   userId: "_yum_s",
  //   createdAt: "16분전",
  // }

  return (
    <li className="story">
      <img
        alt="storyProfileImg"
        src={storyInfo.image}
        className="story-profile"
      />
      <div className="story-desc">
        <div>{storyInfo.userId}</div>
        <div>{storyInfo.createdAt}</div>
      </div>
    </li>
  );
}

export default Story;
