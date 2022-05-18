import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const VideoContext = createContext(null);

const VideoContextProvider = ({ children }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const response = await axios.get("/api/videos");

        setVideo(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    };
    getAllVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideoContext = () => useContext(VideoContext);

export { useVideoContext, VideoContextProvider };
