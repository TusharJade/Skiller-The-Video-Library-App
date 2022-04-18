import "./AllVideosPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { useVideoContext } from "../../context/video-context";
import { useState } from "react";

const AllVideosPage = () => {
  const { video } = useVideoContext();

  const [videoState, setVideoState] = useState("");

  const [videoCategoryBg, setVideoCategoryBg] = useState({
    objOne: true,
  });

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
            className={`btn-by-filter ${
              videoCategoryBg.objOne ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("");
              setVideoCategoryBg({
                objOne: true,
              });
            }}
          >
            All
          </button>
          <button
            className={`btn-by-filter ${
              videoCategoryBg.objTwo ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("communication");
              setVideoCategoryBg({
                objTwo: true,
              });
            }}
          >
            Communication
          </button>
          <button
            className={`btn-by-filter ${
              videoCategoryBg.objThree ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("video editing");
              setVideoCategoryBg({
                objThree: true,
              });
            }}
          >
            Video Editing
          </button>
          <button
            className={`btn-by-filter ${
              videoCategoryBg.objFour ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("photography");
              setVideoCategoryBg({
                objFour: true,
              });
            }}
          >
            Photography
          </button>
          <button
            className={`btn-by-filter ${
              videoCategoryBg.objFive ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("graphic design");
              setVideoCategoryBg({
                objFive: true,
              });
            }}
          >
            Graphic Design
          </button>
          <button
            className={`btn-by-filter ${
              videoCategoryBg.objSix ? "onselect" : null
            }`}
            onClick={() => {
              setVideoState("sales");
              setVideoCategoryBg({
                objSix: true,
              });
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
