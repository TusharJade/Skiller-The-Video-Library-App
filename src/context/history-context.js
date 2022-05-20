import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useAuthContext } from "./auth-context";

const HistoryContext = createContext(null);

const HistoryContextProvider = ({ children }) => {
  const { auth } = useAuthContext();

  const [history, setHistory] = useState([]);

  const customHeader = {
    headers: {
      authorization: auth.token,
    },
  };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        const response = await axios.get("/api/user/history", customHeader);
        setHistory(response.data.history);
      })();
    } else setHistory([]);
  }, [auth]);

  const addToHistory = async (video) => {
    const response = await axios.post(
      "/api/user/history",
      {
        video,
      },
      customHeader
    );
    setHistory(response.data.history);
  };

  const removeFromHistory = async (videoId) => {
    const response = await axios.delete(
      `/api/user/history/${videoId}`,
      customHeader
    );
    setHistory(response.data.history);
  };

  const clearHistory = async () => {
    const response = await axios.delete("/api/user/history/all", customHeader);
    setHistory(response.data.history);
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
        addToHistory,
        removeFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistoryContext = () => useContext(HistoryContext);

export { HistoryContextProvider, useHistoryContext };
