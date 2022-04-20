import AddComment from './AddComment';
import '../Main/MainHyeongJun.scss';

export default function FeedMock(props) {
  return props.dComment.map(feedList => {
    return (
      <div key={feedList.id} className="feeds">
        <article className="article">
          <div className="master">
            <div>
              <img
                alt="masterProfileImg"
                src="images/hyeongjunjeon/person2.jpg"
                className="masterProfile"
              />
            </div>
            <span className="masterName"> {feedList.userName} </span>
          </div>

          <img
            alt="baking"
            src="images/hyeongjunjeon/baking.jpg"
            className="bakingImg"
          />

          <figure>
            <div className="iconBox">
              <div className="iconBox1st">
                <i className="fa-solid fa-heart" />
                <i className="fa-regular fa-comment" />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <div className="iconBox2nd">
                <i className="fa-regular fa-bookmark" />
              </div>
            </div>

            <div>
              <div className="likeText">
                <img
                  alt="likePersonProfile"
                  src="images/hyeongjunjeon/person.jpg"
                  className="likePerson"
                />
                <span className="aine">
                  <span className="boldText">aineworld</span>님{' '}
                  <span className="boldText">외 10명</span>이 좋아합니다
                </span>
              </div>
              <div className="comment">
                <div className="mj">
                  <span className="boldText">canon_mj</span> 위워크에서 진행한
                  베이킹 클래스..
                  <span className="more">더 보기</span>
                </div>
              </div>
              <ul>
                {props.dComment.map(comment => {
                  return (
                    <li key={comment.id}>
                      <span className="commentUserId">{comment.userName}</span>
                      &nbsp;{comment.content}
                    </li>
                  );
                })}
              </ul>
              <AddComment container={props.container} />
              <div className="beforeFourtyTwo">42분 전</div>
            </div>
          </figure>

          <form className="commentBox" onSubmit={props.handleOnSubmit}>
            <div>
              <input
                type="text"
                placeholder="댓글 달기..."
                className="inputComment"
                value={props.comment1}
                onChange={props.handleOnChange}
              />
            </div>
            <div>
              <button className="commentBtn">게시</button>
            </div>
          </form>
        </article>
      </div>
    );
  });
}
// }
