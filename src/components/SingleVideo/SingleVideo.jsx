import "./SingleVideo.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VideoThumbnailModal } from "../../components/VideoThumbnailModal/VideoThumbnailModal";
import { useWatchLaterContext } from "../../context/watch-later-context";
import { useLikeContext } from "../../context/like-context";
import { useAuthContext } from "../../context/auth-context";

const SingleVideo = ({ video }) => {
  const { watchLater, addToWatchLater, removeFromWatchLater } =
    useWatchLaterContext();

  const { like, addToLike, removeFromLike } = useLikeContext();

  const { auth } = useAuthContext();

  const navigate = useNavigate();

  const [showOnClick, setShowOnClick] = useState({
    modalPlaylist: false,
  });

  return (
    <div className="single-video-playbox-final">
      <div className="video-iframe">
        <iframe
          src={video.videoLink}
          frameBorder="0"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <div className="single-page-category"># {video.category}</div>
      <div className="single-video-description">{video.description}</div>
      <div className="single-video-lastline-box">
        {like.find((item) => item._id === video._id) ? (
          <div
            className="single-video-parent-btn"
            onClick={() => removeFromLike(video._id)}
          >
            <i className="fa-solid fa-heart single-video-heart colorful-heart"></i>
            <span>&nbsp; Like</span>
          </div>
        ) : (
          <div
            className="single-video-parent-btn"
            onClick={() =>
              auth.loginStatus ? addToLike(video) : navigate("/login")
            }
          >
            <i className="fa-solid fa-heart single-video-heart"></i>
            <span>&nbsp; Like</span>
          </div>
        )}

        {watchLater.find((item) => item._id === video._id) ? (
          <div
            className="single-video-parent-btn"
            onClick={() => removeFromWatchLater(video._id)}
          >
            <i className="fa-solid fa-clock add colorful-watch"></i>
            <span> Watch Later</span>
          </div>
        ) : (
          <div
            className="single-video-parent-btn"
            onClick={() =>
              auth.loginStatus ? addToWatchLater(video) : navigate("/login")
            }
          >
            <i className="fa-solid fa-clock add"></i>
            <span> Watch Later</span>
          </div>
        )}

        <div
          className="single-video-parent-btn"
          onClick={() =>
            auth.loginStatus
              ? setShowOnClick((item) => ({ ...item, modalPlaylist: true }))
              : navigate("/login")
          }
        >
          <i className="fa-solid fa-folder-plus"></i>
          <span> &nbsp;Save</span>
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(`${video.videoLink}`);
            alert("Video link is copied");
          }}
          className="single-video-parent-btn"
        >
          <i className="fa-solid fa-clipboard"></i>
          <span> &nbsp;Copy Link</span>
        </div>
      </div>
      {showOnClick.modalPlaylist && (
        <VideoThumbnailModal status={setShowOnClick} data={video} />
      )}
    </div>
  );
};

export { SingleVideo };
