import "./PlaylistCard.css";
import "../VideoThumbnail/VideoThumbnail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalFilterContext } from "../../context/globle-filters-context";

const PlaylistCard = ({ video }) => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();
  const [showOnClick, setShowOnClick] = useState({
    modal: false,
  });

  const navigate = useNavigate();

  return (
    <div
      className="video-thumbnail-box"
      onClick={() => navigate(`/playlist-video/${video.playlistId}`)}
    >
      <div className="thumbnail-position-parent">
        {video.playlistVideos.length === 0 ? (
          <img
            className="thumbnail-img"
            src="https://i.ytimg.com/vi/5y2GTQ9jLbw/maxresdefault.jpg"
            alt="img-failed"
          />
        ) : (
          <img
            className="thumbnail-img"
            src={video.playlistVideos[0].thumbnailImg}
            alt="img-failed"
          />
        )}
        {video.playlistVideos.length >= 1 ? (
          <div className="playlist-num">
            <span className="playlist-videos-num">
              {video.playlistVideos.length}
            </span>
            <img
              className="video-playlist-play"
              src="/assets/playlist.png"
              alt="error"
            />
          </div>
        ) : null}
      </div>
      <div className="all-thmbnail-content">
        <div className="playlist-final-name">{video.playlistName}</div>
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
                globalFilterDispach({
                  type: "Delete Playlist",
                  payload: video.playlistId,
                });
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
