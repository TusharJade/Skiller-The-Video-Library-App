import "./AllVideosPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { useVideoContext } from "../../context/video-context";
import { useState } from "react";

const AllVideosPage = () => {
  const { video, search, setSearch } = useVideoContext();

  const [videoState, setVideoState] = useState("");

  const filterByCategory = (video, videoState) => {
    return videoState === ""
      ? video
      : video.filter((item) => item.category === videoState);
  };

  const searchFunc = (allVideo, searchObj) => {
    return searchObj.searchStatus === true
      ? allVideo.filter((item) =>
          item.description
            .toLowerCase()
            .includes(searchObj.searchName.toLowerCase())
        )
      : allVideo;
  };

  const filteredData = filterByCategory(searchFunc(video, search), videoState);

  return (
    <>
      <Sidebar />
      <section className="main-video-pagebox">
        <div className="category-filter-box">
          <button
            className={`btn-by-filter ${videoState === "" ? "onselect" : null}`}
            onClick={() => {
              setVideoState("");
              setSearch((item) => ({ ...item, searchStatus: false }));
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
              setSearch((item) => ({ ...item, searchStatus: false }));
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
              setSearch((item) => ({ ...item, searchStatus: false }));
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
              setSearch((item) => ({ ...item, searchStatus: false }));
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
              setSearch((item) => ({ ...item, searchStatus: false }));
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
              setSearch((item) => ({ ...item, searchStatus: false }));
            }}
          >
            Sales
          </button>
        </div>
        <div className="video-outer-grid">
          {filteredData.map((item) => {
            return <VideoThumbnail key={item._id} video={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export { AllVideosPage };
