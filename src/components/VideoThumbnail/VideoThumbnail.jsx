import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoThumbnail.css";

const VideoThumbnail = ({ video }) => {
  const [showOnClick, setShowOnClick] = useState({
    modal: false,
    modalPlaylist: false,
  });

  const navigate = useNavigate();

  return (
    <div
      className="video-thumbnail-box"
      onClick={() => navigate(`/video/${video._id}`)}
    >
      <img
        className="thumbnail-img"
        src={video.thumbnailImg}
        alt="img-failed"
      />
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
          onClick={() => {
            setShowOnClick((item) => ({ ...item, modal: !item.modal }));
          }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        {showOnClick.modal && (
          <div className="toggle-menu">
            <div className="hover-Effect">
              <i class="fa-solid fa-clock add"></i>Add to Watch Later
            </div>
            <div className="hover-Effect">
              <i class="fa-solid fa-circle-plus add"></i>Add to Playlist
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { VideoThumbnail };
