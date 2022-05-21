import "./VideoThumbnail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VideoThumbnailModal } from "../VideoThumbnailModal/VideoThumbnailModal";
import { useHistoryContext } from "../../context/history-context";
import { useLikeContext } from "../../context/like-context";
import { useWatchLaterContext } from "../../context/watch-later-context";
import { useAuthContext } from "../../context/auth-context";

const VideoThumbnail = ({ video }) => {
  const { addToHistory } = useHistoryContext();

  const { watchLater, addToWatchLater, removeFromWatchLater } =
    useWatchLaterContext();

  const { like, addToLike, removeFromLike } = useLikeContext();

  const { auth } = useAuthContext();

  const [showOnClick, setShowOnClick] = useState({
    modal: false,
    modalPlaylist: false,
  });

  const navigate = useNavigate();

  return (
    <>
      <div
        className="video-thumbnail-box"
        onClick={() => {
          navigate(`/video/${video._id}`);
          if (auth.loginStatus) addToHistory(video);
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
              {watchLater.find((item) => item._id === video._id) ? (
                <div
                  className="hover-Effect delete-red-color"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWatchLater(video._id);
                  }}
                >
                  <i className="fa-solid fa-trash add"></i>
                  Remove from Watch Later
                </div>
              ) : (
                <div
                  className="hover-Effect"
                  onClick={(e) => {
                    e.stopPropagation();
                    auth.loginStatus
                      ? addToWatchLater(video)
                      : navigate("/login");
                  }}
                >
                  <i className="fa-solid fa-clock add"></i>
                  Add to Watch Later
                </div>
              )}

              <div
                className="hover-Effect"
                onClick={(e) => {
                  e.stopPropagation();
                  auth.loginStatus
                    ? setShowOnClick((item) => ({
                        ...item,
                        modal: !item.modal,
                        modalPlaylist: !item.modalPlaylist,
                      }))
                    : navigate("/login");
                }}
              >
                <i className="fa-solid fa-circle-plus add"></i>Add to Playlist
              </div>

              {like.find((item) => item._id === video._id) ? (
                <div
                  className="hover-Effect remove-like-color"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromLike(video._id);
                  }}
                >
                  <i className="fa-solid fa-heart add"></i>Remove from Like
                </div>
              ) : (
                <div
                  className="hover-Effect"
                  onClick={(e) => {
                    e.stopPropagation();
                    auth.loginStatus ? addToLike(video) : navigate("/login");
                  }}
                >
                  <i className="fa-solid fa-heart add"></i>Like
                </div>
              )}
            </div>
          )}
          {showOnClick.modalPlaylist && (
            <VideoThumbnailModal status={setShowOnClick} data={video} />
          )}
        </div>
      </div>
    </>
  );
};

export { VideoThumbnail };
