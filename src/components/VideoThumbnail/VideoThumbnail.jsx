import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalFilterContext } from "../../context/globle-filters-context";
import "./VideoThumbnail.css";

const VideoThumbnail = ({ video }) => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();

  const [showOnClick, setShowOnClick] = useState({
    modal: false,
    modalPlaylist: false,
    createPlaylist: false,
    playlistName: "",
  });

  const navigate = useNavigate();

  return (
    <>
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
              setShowOnClick((item) => ({ ...item, modal: !item.modal }));
              e.stopPropagation();
            }}
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          {showOnClick.modal && (
            <div className="toggle-menu">
              {globalFilterState.watchLater.find(
                (item) => item._id === video._id
              ) ? (
                <div
                  className="hover-Effect delete-red-color"
                  onClick={(e) => {
                    globalFilterDispach({
                      type: "Remove From Watch Later",
                      payload: video._id,
                    });
                    e.stopPropagation();
                  }}
                >
                  <i className="fa-solid fa-trash add"></i>
                  Remove from Watch Later
                </div>
              ) : (
                <div
                  className="hover-Effect"
                  onClick={(e) => {
                    globalFilterDispach({
                      type: "Add to Watch Later",
                      payload: video,
                    });
                    e.stopPropagation();
                  }}
                >
                  <i class="fa-solid fa-clock add"></i>
                  Add to Watch Later
                </div>
              )}

              <div
                className="hover-Effect"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowOnClick((item) => ({
                    ...item,
                    modal: !item.modal,
                    modalPlaylist: !item.modalPlaylist,
                  }));
                }}
              >
                <i class="fa-solid fa-circle-plus add"></i>Add to Playlist
              </div>

              {globalFilterState.like.find((item) => item._id === video._id) ? (
                <div
                  className="hover-Effect remove-like-color"
                  onClick={(e) => {
                    globalFilterDispach({
                      type: "Remove From Like",
                      payload: video._id,
                    });
                    e.stopPropagation();
                  }}
                >
                  <i class="fa-solid fa-heart add"></i>Remove from Like
                </div>
              ) : (
                <div
                  className="hover-Effect"
                  onClick={(e) => {
                    globalFilterDispach({
                      type: "Add to Like",
                      payload: video,
                    });
                    e.stopPropagation();
                  }}
                >
                  <i class="fa-solid fa-heart add"></i>Like
                </div>
              )}
            </div>
          )}
        </div>
        {showOnClick.modalPlaylist && (
          <div
            className="video-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="video-modal-content">
              <div className="modal-playlist-topline">
                <div className="save-to-text">Save to...</div>
                <i
                  className="fa-solid fa-xmark video-modal-close"
                  onClick={() =>
                    setShowOnClick((item) => ({
                      ...item,
                      modalPlaylist: !item.modalPlaylist,
                    }))
                  }
                ></i>
              </div>
              <div className="created-playlist-checkbox">
                {globalFilterState.playlist.map((item) => {
                  return (
                    <div className="single-playlist-checkbox">
                      <input type="checkbox" />
                      <label className="created-playlist-name">{item}</label>
                    </div>
                  );
                })}
              </div>
              {showOnClick.createPlaylist ? (
                <div className="playlist-creation-box">
                  <div className="playlist-creating-name">Name</div>
                  <input
                    className="playlist-input-name"
                    placeholder="Playlist Name"
                    onChange={(e) =>
                      setShowOnClick((item) => ({
                        ...item,
                        playlistName: e.target.value,
                      }))
                    }
                  />
                  <button
                    className="playlist-create-btn"
                    onClick={() =>
                      setShowOnClick((item) => ({
                        ...item,
                        createPlaylist: !item.createPlaylist,
                      }))
                    }
                  >
                    Create
                  </button>
                </div>
              ) : (
                <div
                  className="modal-playlist-bottomline"
                  onClick={() => {
                    setShowOnClick((item) => ({
                      ...item,
                      createPlaylist: !item.createPlaylist,
                    }));
                    globalFilterDispach({
                      type: "Add to Playlist",
                      payload: showOnClick.playlistName,
                    });
                  }}
                >
                  <i class="fa-solid fa-plus"></i>
                  <div className="create-playlist">Create a new playlist</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { VideoThumbnail };
