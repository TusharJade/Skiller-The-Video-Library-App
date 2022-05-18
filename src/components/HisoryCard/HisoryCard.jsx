import "../VideoThumbnail/VideoThumbnail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalFilterContext } from "../../context/globle-filters-context";

const HisoryCard = ({ video }) => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();

  const [showOnClick, setShowOnClick] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="video-thumbnail-box"
      onClick={() => {
        navigate(`/video/${video._id}`);
        globalFilterDispach({ type: "Add to History", payload: video });
      }}
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
          onClick={(e) => {
            setShowOnClick((item) => !item);
            e.stopPropagation();
          }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        {showOnClick && (
          <div className="toggle-menu">
            {globalFilterState.history.find(
              (item) => item._id === video._id
            ) ? (
              <div
                className="hover-Effect remove-from-history"
                onClick={(e) => {
                  e.stopPropagation();
                  globalFilterDispach({
                    type: "Remove from History",
                    payload: video._id,
                  });
                }}
              >
                <i className="fa-solid fa-trash add"></i>Remove from History
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export { HisoryCard };
