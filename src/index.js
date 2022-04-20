import React from "react";
import createRoot from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { VideoContextProvider } from "./context/video-context";

// Call make Server
makeServer();

createRoot.render(
  <React.StrictMode>
    <VideoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VideoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
