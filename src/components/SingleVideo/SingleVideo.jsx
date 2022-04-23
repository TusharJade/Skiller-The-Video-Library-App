import { useGlobalFilterContext } from "../../context/globle-filters-context";
import "./SingleVideo.css";

const SingleVideo = ({ item }) => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();

  return (
    <div className="single-video-playbox-final">
      <div className="video-iframe">
        <iframe
          width="100%"
          height="100%"
          src={item.videoLink}
          frameborder="0"
          title="YouTube video player"
          allowfullscreen
        ></iframe>
      </div>
      <div className="single-page-category"># {item.category}</div>
      <div className="single-video-description">{item.description}</div>
      <div className="single-video-lastline-box">
        {globalFilterState.like.find((video) => video._id === item._id) ? (
          <div
            className="single-video-parent-btn"
            onClick={() =>
              globalFilterDispach({
                type: "Remove From Like",
                payload: item._id,
              })
            }
          >
            <i class="fa-solid fa-heart single-video-heart colorful-heart"></i>
            <span>&nbsp; Liked</span>
          </div>
        ) : (
          <div
            className="single-video-parent-btn"
            onClick={() =>
              globalFilterDispach({ type: "Add to Like", payload: item })
            }
          >
            <i class="fa-solid fa-heart single-video-heart"></i>
            <span>&nbsp; Like</span>
          </div>
        )}

        {globalFilterState.watchLater.find(
          (video) => video._id === item._id
        ) ? (
          <div
            className="single-video-parent-btn"
            onClick={() =>
              globalFilterDispach({
                type: "Remove From Watch Later",
                payload: item._id,
              })
            }
          >
            <i class="fa-solid fa-clock add colorful-watch"></i>
            <span> Watch Later</span>
          </div>
        ) : (
          <div
            className="single-video-parent-btn"
            onClick={() =>
              globalFilterDispach({ type: "Add to Watch Later", payload: item })
            }
          >
            <i class="fa-solid fa-clock add"></i>
            <span> Watch Later</span>
          </div>
        )}

        <div className="single-video-parent-btn">
          <i class="fa-solid fa-folder-plus"></i>
          <span> &nbsp;Save</span>
        </div>
        <div
          onClick={() => navigator.clipboard.writeText(`${item.videoLink}`)}
          className="single-video-parent-btn"
        >
          <i class="fa-solid fa-clipboard"></i>
          <span> &nbsp;Copy Link</span>
        </div>
      </div>
    </div>
  );
};

export { SingleVideo };
