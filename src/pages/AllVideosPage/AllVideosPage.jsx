import "./AllVideosPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { useVideoContext } from "../../context/video-context";
import { useState } from "react";

const AllVideosPage = () => {
  const { video } = useVideoContext();

  const [videoState, setVideoState] = useState("");

  const filterByCategory = (video, videoState) => {
    return videoState === ""
      ? video
      : video.filter((item) => item.category === videoState);
  };

  const filteredData = filterByCategory(video, videoState);

  return (
    <>
      <Sidebar />
      <section className="main-video-pagebox">
        <div className="category-filter-box">
          <button
            className={`btn-by-filter ${videoState === "" ? "onselect" : null}`}
            onClick={() => {
              setVideoState("");
            }}
          >
            All
          </button>
          <button
            className={`btn-by-filter ${
              videoState === "communication" ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("communication");
            }}
          >
            Communication
          </button>
          <button
            className={`btn-by-filter ${
              videoState === "video editing" ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("video editing");
            }}
          >
            Video Editing
          </button>
          <button
            className={`btn-by-filter ${
              videoState === "photography" ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("photography");
            }}
          >
            Photography
          </button>
          <button
            className={`btn-by-filter ${
              videoState === "graphic design" ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("graphic design");
            }}
          >
            Graphic Design
          </button>
          <button
            className={`btn-by-filter ${
              videoState === "sales" ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("sales");
            }}
          >
            Sales
          </button>
        </div>
        <div className="video-outer-grid">
          {filteredData
            .sort(() => Math.random() - Math.random())
            .map((item) => {
              return <VideoThumbnail key={item._id} video={item} />;
            })}
        </div>
      </section>
    </>
  );
};

export { AllVideosPage };
