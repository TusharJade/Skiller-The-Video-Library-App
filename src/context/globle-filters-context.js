import { useContext, useReducer, createContext } from "react";
import { v4 as uuid } from "uuid";

const GlobalFilterContext = createContext(null);

const globalFilterFun = (globalFilterDispach, action) => {
  switch (action.type) {
    case "Add to Like":
      return {
        ...globalFilterDispach,
        like: [...globalFilterDispach.like, action.payload],
      };
    case "Remove From Like":
      return {
        ...globalFilterDispach,
        like: globalFilterDispach.like.filter(
          (video) => video._id !== action.payload
        ),
      };
    case "Add to Watch Later":
      return {
        ...globalFilterDispach,
        watchLater: [...globalFilterDispach.watchLater, action.payload],
      };

    case "Remove From Watch Later":
      return {
        ...globalFilterDispach,
        watchLater: globalFilterDispach.watchLater.filter(
          (video) => video._id !== action.payload
        ),
      };
    case "Add to History":
      return {
        ...globalFilterDispach,
        history: globalFilterDispach.history.find(
          (video) => video._id === action.payload._id
        )
          ? [...globalFilterDispach.history]
          : [...globalFilterDispach.history, action.payload],
      };
    case "Remove from History":
      return {
        ...globalFilterDispach,
        history: globalFilterDispach.history.filter(
          (video) => video._id !== action.payload
        ),
      };
    case "Clear History":
      return { ...globalFilterDispach, history: [] };

    case "Create Playlist":
      return {
        ...globalFilterDispach,
        playlist: [
          ...globalFilterDispach.playlist,
          {
            playlistId: uuid(),
            playlistName: action.payload,
            playlistVideos: [],
          },
        ],
      };

    case "Delete Playlist":
      return {
        ...globalFilterDispach,
        playlist: globalFilterDispach.playlist.filter(
          (video) => video.playlistId !== action.payload
        ),
      };
    case "Add to Playlist":
      return {
        ...globalFilterDispach,
        playlist: globalFilterDispach.playlist.map((video) =>
          video.playlistId === action.payload.playlistObj.playlistId
            ? {
                ...video,
                playlistVideos: [...video.playlistVideos, action.payload.video],
              }
            : video
        ),
      };
    case "Remove From Playlist":
      return {
        ...globalFilterDispach,
        playlist: globalFilterDispach.playlist.map((video) =>
          video.playlistId === action.payload.playlistObj.playlistId
            ? {
                ...video,
                playlistVideos: video.playlistVideos.filter(
                  (removeVideo) => removeVideo !== action.payload.video
                ),
              }
            : video
        ),
      };

    case "Remove From Playlist InnerCard":
      return {
        ...globalFilterDispach,
        playlist: globalFilterDispach.playlist.map((video) =>
          video.playlistId === action.payload.payloadID
            ? {
                ...video,
                playlistVideos: video.playlistVideos.filter(
                  (removeVideo) => removeVideo !== action.payload.video
                ),
              }
            : video
        ),
      };

    default:
      return globalFilterDispach;
  }
};

const GlobalFilterContextProvider = ({ children }) => {
  const [globalFilterState, globalFilterDispach] = useReducer(globalFilterFun, {
    history: [],
    like: [],
    watchLater: [],
    playlist: [],
  });

  return (
    <GlobalFilterContext.Provider
      value={{ globalFilterState, globalFilterDispach }}
    >
      {children}
    </GlobalFilterContext.Provider>
  );
};

const useGlobalFilterContext = () => useContext(GlobalFilterContext);

export { useGlobalFilterContext, GlobalFilterContextProvider };
