import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./auth-context";

const WatchLaterContext = createContext(null);

const WatchLaterContextProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);

  const { auth } = useAuthContext();

  const customHeader = {
    headers: {
      authorization: auth.token,
    },
  };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        const response = await axios.get("/api/user/watchlater", customHeader);
        setWatchLater(response.data.watchlater);
      })();
    } else setWatchLater([]);
  }, [auth]);

  const addToWatchLater = async (video) => {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      customHeader
    );

    setWatchLater(response.data.watchlater);
  };

  const removeFromWatchLater = async (videoId) => {
    const response = await axios.delete(
      `/api/user/watchlater/${videoId}`,
      customHeader
    );
    setWatchLater(response.data.watchlater);
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLater,
        setWatchLater,
        addToWatchLater,
        removeFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLaterContext = () => useContext(WatchLaterContext);

export { useWatchLaterContext, WatchLaterContextProvider };
