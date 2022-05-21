import "../LikePage/LikePage.css";
import { Link } from "react-router-dom";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useWatchLaterContext } from "../../context/watch-later-context";

const WatchLaterPage = () => {
  const { watchLater } = useWatchLaterContext();
  return (
    <>
      <Sidebar />
      <div className="filter-margins">
        <div className="like-counter">
          <div className="liked-text">Watch Later</div>
          <div className="liked-video-num">
            {watchLater.length} {watchLater.length <= 1 ? "video" : "videos"}
          </div>
        </div>

        <div className="video-outer-grid">
          {watchLater.map((item) => (
            <VideoThumbnail key={item._id} video={item} />
          ))}
        </div>

        {watchLater.length === 0 ? (
          <div className="empty-box-outer">
            <img src="./assets/empty.png" alt="error" className="empty-box" />
            <div className="empty-box-text">
              There is nothing in Watch Later
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

export { WatchLaterPage };
