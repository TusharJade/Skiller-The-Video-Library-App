import { useGlobalFilterContext } from "../../context/globle-filters-context";
import { VideoThumbnailModal } from "../../components/VideoThumbnailModal/VideoThumbnailModal";
import "./SingleVideo.css";
import { useState } from "react";

const SingleVideo = ({ item }) => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();

  const [showOnClick, setShowOnClick] = useState({
    modalPlaylist: false,
  });
  return (
    <div className="single-video-playbox-final">
      <div className="video-iframe">
        <iframe
          src={item.videoLink}
          frameBorder="0"
          title="YouTube video player"
          allowFullScreen
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
            <i className="fa-solid fa-heart single-video-heart colorful-heart"></i>
            <span>&nbsp; Like</span>
          </div>
        ) : (
          <div
            className="single-video-parent-btn"
            onClick={() =>
              globalFilterDispach({ type: "Add to Like", payload: item })
            }
          >
            <i className="fa-solid fa-heart single-video-heart"></i>
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
            <i className="fa-solid fa-clock add colorful-watch"></i>
            <span> Watch Later</span>
          </div>
        ) : (
          <div
            className="single-video-parent-btn"
            onClick={() =>
              globalFilterDispach({ type: "Add to Watch Later", payload: item })
            }
          >
            <i className="fa-solid fa-clock add"></i>
            <span> Watch Later</span>
          </div>
        )}

        <div
          className="single-video-parent-btn"
          onClick={() =>
            setShowOnClick((item) => ({ ...item, modalPlaylist: true }))
          }
        >
          <i className="fa-solid fa-folder-plus"></i>
          <span> &nbsp;Save</span>
        </div>
        <div
          onClick={() => navigator.clipboard.writeText(`${item.videoLink}`)}
          className="single-video-parent-btn"
        >
          <i className="fa-solid fa-clipboard"></i>
          <span> &nbsp;Copy Link</span>
        </div>
      </div>
      {showOnClick.modalPlaylist && (
        <VideoThumbnailModal status={setShowOnClick} data={item} />
      )}
    </div>
  );
};

export { SingleVideo };
