import "../../components/VideoThumbnail/VideoThumbnail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHistoryContext } from "../../context/history-context";
import { useParams } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlist-context";

const InnerPlaylistCard = ({ video }) => {
  const { addToHistory } = useHistoryContext();
  const { removeFromPlaylist } = usePlaylistContext();

  const [showOnClick, setShowOnClick] = useState({
    modal: false,
  });

  const navigate = useNavigate();
  const { playlistID } = useParams();

  return (
    <div>
      <div
        className="video-thumbnail-box"
        onClick={() => {
          navigate(`/video/${video._id}`);
          addToHistory(video);
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
              setShowOnClick((item) => ({ ...item, modal: !item.modal }));
              e.stopPropagation();
            }}
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          {showOnClick.modal && (
            <div className="toggle-menu">
              <div
                className="hover-Effect remove-from-history"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromPlaylist(playlistID, video._id);
                }}
              >
                <i className="fa-solid fa-trash add"></i>Remove from Playlist
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { InnerPlaylistCard };
