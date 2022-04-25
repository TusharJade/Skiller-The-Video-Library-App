import "./PlaylistCard.css";
import { useState } from "react";

const PlaylistCard = ({ video }) => {
  const [showOnClick, setShowOnClick] = useState({
    modal: false,
    modalPlaylist: false,
  });
  return (
    <div className="video-thumbnail-box">
      <div style={{ position: "relative" }}>
        <img
          className="thumbnail-img"
          src={video.thumbnailImg}
          alt="img-failed"
        />
        <div className="playlist-num">
          <span className="playlist-videos-num">1</span>
          <img
            className="video-playlist-play"
            src="/assets/playlist.png"
            alt="error"
          />
        </div>
      </div>
      <div className="all-thmbnail-content">
        <img
          className="channel-logo"
          src={video.creatorsLogo}
          alt="img-error"
        />
        <div className="thumnail-text-content">
          <div className="short-description">
            {video.description.length > 40
              ? `${video.description.substring(0, 44)}...`
              : video.description}
          </div>
          <div className="creater-name">
            {video.creator}{" "}
            {video.premiumCreator ? (
              <i className="fa-solid fa-circle-check premium-creator"></i>
            ) : null}
          </div>
          <div className="last-line-thumbnail">
            <div className="views">{video.views} views</div>
            <i className="fa-solid fa-circle dot views"></i>
            <div className="views">{video.time} ago</div>
          </div>
        </div>
        <div
          className="three-dot"
          onClick={(e) => {
            setShowOnClick((item) => ({ ...item, modal: !item.modal }));
            e.stopPropagation();
          }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        {showOnClick.modal && (
          <div className="toggle-menu">
            <div
              className="hover-Effect trash-playlist-text"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <i className="fa-solid fa-trash add"></i>Delete Playlist
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { PlaylistCard };
