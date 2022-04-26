import "./VideoThumbnailModal.css";
import { useGlobalFilterContext } from "../../context/globle-filters-context";
import { useState } from "react";

const VideoThumbnailModal = ({ status, data }) => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();

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
          {globalFilterState.playlist.map((item) => {
            return (
              <div className="single-playlist-checkbox">
                <input
                  type="checkbox"
                  checked={item.playlistVideos.includes(data)}
                  onChange={(e) =>
                    e.target.checked === true
                      ? globalFilterDispach({
                          type: "Add to Playlist",
                          payload: { playlistObj: item, video: data },
                        })
                      : globalFilterDispach({
                          type: "Remove From Playlist",
                          payload: { playlistObj: item, video: data },
                        })
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
                setCreatePlaylist((item) => ({
                  ...item,
                  createPlaylistStatus: !item.createPlaylistStatus,
                }));
                globalFilterDispach({
                  type: "Create Playlist",
                  payload: createPlaylist.playlistName,
                });
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
                createPlaylistStatus: !item.createPlaylistStatus,
              }));
            }}
          >
            <i class="fa-solid fa-plus"></i>
            <div className="create-playlist">Create a new playlist</div>
          </div>
        )}
      </div>
    </div>
  );
};

export { VideoThumbnailModal };
