import "./LikePage.css";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { useLikeContext } from "../../context/like-context";

const LikePage = () => {
  const { like } = useLikeContext();
  return (
    <>
      <Sidebar />
      <div className="filter-margins">
        <div className="like-counter">
          <div className="liked-text">Liked</div>
          <div className="liked-video-num">
            {like.length} {like.length <= 1 ? "video" : "videos"}
          </div>
        </div>
        <div className="video-outer-grid">
          {like.map((item) => (
            <VideoThumbnail key={item._id} video={item} />
          ))}
        </div>
        {like.length === 0 ? (
          <div className="empty-box-outer">
            <img src="./assets/empty.png" alt="error" className="empty-box" />
            <div className="empty-box-text">
              Looks like you didn't like any video
            </div>
            <Link to="/" className="empty-box-btn">
              Watch videos
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export { LikePage };
