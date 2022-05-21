import "./VideoThumbnailModal.css";
import { useState } from "react";
import { usePlaylistContext } from "../../context/playlist-context";

const VideoThumbnailModal = ({ status, data }) => {
  const { playlist, createCustomPlaylist, addToPlaylist, removeFromPlaylist } =
    usePlaylistContext();

  const [createPlaylist, setCreatePlaylist] = useState({
    playlistName: "",
    createPlaylistStatus: false,
  });

  return (
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
              status((item) => ({
                ...item,
                modalPlaylist: !item.modalPlaylist,
              }))
            }
          ></i>
        </div>
        <div className="created-playlist-checkbox">
          {playlist.map((item) => {
            return (
              <div className="single-playlist-checkbox" key={item._id}>
                <input
                  type="checkbox"
                  checked={
                    item.videos.find((myVideo) => myVideo._id === data._id)
                      ? true
                      : false
                  }
                  onChange={(e) =>
                    e.target.checked
                      ? addToPlaylist(item._id, data)
                      : removeFromPlaylist(item._id, data._id)
                  }
                />
                <label className="created-playlist-name">
                  {item.playlistName}
                </label>
              </div>
            );
          })}
        </div>
        {createPlaylist.createPlaylistStatus ? (
          <div className="playlist-creation-box">
            <div className="playlist-creating-name">Name</div>
            <input
              className="playlist-input-name"
              placeholder="Playlist Name"
              onChange={(e) =>
                setCreatePlaylist((item) => ({
                  ...item,
                  playlistName: e.target.value,
                }))
              }
            />
            <button
              className="playlist-create-btn"
              disabled={createPlaylist.playlistName === "" ? true : false}
              onClick={() => {
                setCreatePlaylist({
                  playlistName: "",
                  createPlaylistStatus: false,
                });
                createCustomPlaylist(createPlaylist.playlistName);
              }}
            >
              Create
            </button>
          </div>
        ) : (
          <div
            className="modal-playlist-bottomline"
            onClick={() => {
              setCreatePlaylist((item) => ({
                ...item,
                createPlaylistStatus: true,
              }));
            }}
          >
            <i className="fa-solid fa-plus"></i>
            <div className="create-playlist">Create a new playlist</div>
          </div>
        )}
      </div>
    </div>
  );
};

export { VideoThumbnailModal };
