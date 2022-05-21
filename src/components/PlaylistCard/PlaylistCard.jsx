import "./PlaylistCard.css";
import "../VideoThumbnail/VideoThumbnail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistCard = ({ video }) => {
  const { deleteCustomPlaylist } = usePlaylistContext();

  const [showOnClick, setShowOnClick] = useState({
    modal: false,
  });

  const navigate = useNavigate();

  return (
    <div
      className="video-thumbnail-box"
      onClick={() => {
        navigate(`/playlist-video/${video._id}`);
      }}
    >
      <div className="thumbnail-position-parent">
        {video.videos.length === 0 ? (
          <img
            className="thumbnail-img"
            src="https://i.ytimg.com/vi/5y2GTQ9jLbw/maxresdefault.jpg"
            alt="img-failed"
          />
        ) : (
          <img
            className="thumbnail-img"
            src={video.videos[0].thumbnailImg}
            alt="img-failed"
          />
        )}
        {video.videos.length >= 1 ? (
          <div className="playlist-num">
            <span className="playlist-videos-num">{video.videos.length}</span>
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
                deleteCustomPlaylist(video._id);
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
