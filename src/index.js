import React from "react";
import createRoot from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { VideoContextProvider } from "./context/video-context";
import { AuthContextProvider } from "./context/auth-context";
import { HistoryContextProvider } from "./context/history-context";
import { WatchLaterContextProvider } from "./context/watch-later-context";
import { LikeContextProvider } from "./context/like-context";
import { PlaylistContextProvider } from "./context/playlist-context";

// Call make Server
makeServer();

createRoot.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlaylistContextProvider>
        <LikeContextProvider>
          <WatchLaterContextProvider>
            <HistoryContextProvider>
              <VideoContextProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </VideoContextProvider>
            </HistoryContextProvider>
          </WatchLaterContextProvider>
        </LikeContextProvider>
      </PlaylistContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
