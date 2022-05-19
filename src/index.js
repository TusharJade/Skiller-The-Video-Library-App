import React from "react";
import createRoot from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { VideoContextProvider } from "./context/video-context";
import { GlobalFilterContextProvider } from "./context/globle-filters-context";
import { AuthContextProvider } from "./context/auth-context";

// Call make Server
makeServer();

createRoot.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalFilterContextProvider>
        <VideoContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </VideoContextProvider>
      </GlobalFilterContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
