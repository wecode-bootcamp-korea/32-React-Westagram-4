import './Recommendation.scss';

function Recommendation({ recommInfo }) {
  return (
    <li className="story">
      <img
        alt="storyProfileImg"
        src={recommInfo.image}
        className="story-profile2"
      />
      <div className="story-desc2">
        <div>{recommInfo.userId}</div>
        <div>{recommInfo.createdAt}</div>
      </div>
      <span>팔로우</span>
    </li>
  );
}

export default Recommendation;
