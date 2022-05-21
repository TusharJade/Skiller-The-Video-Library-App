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
        try {
          const response = await axios.get("/api/user/playlists", customHeader);
          setPlaylist(response.data.playlists);
        } catch (error) {
          console.log(error);
        }
      })();
    } else setPlaylist([]);
  }, [auth]);

  const createCustomPlaylist = async (nameOfPlaylist) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCustomPlaylist = async (playlistId) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}`,
        customHeader
      );

      setPlaylist(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const addToPlaylist = async (playlistId, video) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromPlaylist = async (playlistId, videoId) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
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
