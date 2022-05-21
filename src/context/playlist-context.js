import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import { useAuthContext } from "./auth-context";

const PlaylistContext = createContext(null);

const PlaylistContextProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  const { auth } = useAuthContext();

  const customHeader = {
    headers: {
      authorization: auth.token,
    },
  };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        const response = await axios.get("/api/user/playlists", customHeader);
        setPlaylist(response.data.playlists);
      })();
    } else setPlaylist([]);
  }, [auth]);

  const createCustomPlaylist = async (nameOfPlaylist) => {
    const response = await axios.post(
      "/api/user/playlists",
      {
        playlist: {
          playlistName: nameOfPlaylist,
        },
      },
      customHeader
    );

    setPlaylist(response.data.playlists);
  };

  const deleteCustomPlaylist = async (playlistId) => {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}`,
      customHeader
    );

    setPlaylist(response.data.playlists);
  };

  const addToPlaylist = async (playlistId, video) => {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      customHeader
    );

    setPlaylist((item) =>
      item.map((addItem) =>
        addItem._id === response.data.playlist._id
          ? response.data.playlist
          : addItem
      )
    );
  };

  const removeFromPlaylist = async (playlistId, videoId) => {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      customHeader
    );

    setPlaylist((item) =>
      item.map((removeItem) =>
        removeItem._id === response.data.playlist._id
          ? response.data.playlist
          : removeItem
      )
    );
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        setPlaylist,
        createCustomPlaylist,
        deleteCustomPlaylist,
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { usePlaylistContext, PlaylistContextProvider };
