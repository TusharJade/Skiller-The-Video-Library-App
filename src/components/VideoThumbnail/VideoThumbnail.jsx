import { useState } from "react";
import "./VideoThumbnail.css";

const VideoThumbnail = ({ video }) => {
  const [showOnClick, setShowOnClick] = useState(false);
  return (
    <div className="video-thumbnail-box">
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
          <div className="short-description">{video.miniDescription}</div>
          <div className="creater-name">
            {video.creator}{" "}
            <i class="fa-solid fa-circle-check premium-creator"></i>
          </div>
          <div className="last-line-thumbnail">
            <div className="views">{video.views} views</div>
            <i class="fa-solid fa-circle dot views"></i>
            <div className="views">{video.time}</div>
          </div>
        </div>
        <div
          className="three-dot"
          onClick={() => {
            setShowOnClick(!showOnClick);
          }}
        >
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>
  );
};

export { VideoThumbnail };
