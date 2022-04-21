import "./SingleVideoPage.css";
import { SingleVideo } from "../../components/SingleVideo/SingleVideo";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { HorizontalVideo } from "../../components/HorizontalVideo/HorizontalVideo";
import { useParams } from "react-router-dom";
import { useVideoContext } from "../../context/video-context";

const SingleVideoPage = () => {
  const { video } = useVideoContext();
  const { videoId } = useParams();

  const singleVideoFunc = (videoData, id) => {
    return videoData.find((item) => item._id === id);
  };

  const withoutShowedVideoFunc = (videoData, id) => {
    return videoData.filter((item) => item._id !== id);
  };

  const singleVideoData = singleVideoFunc(video, videoId);
  const filterOutSingleVideo = withoutShowedVideoFunc(video, videoId);

  return (
    <div>
      <Sidebar />
      <section className="single-video-outerbox">
        <div className="single-video-premiumbox">
          {<SingleVideo item={singleVideoData} />}
        </div>
        <div className="horizon-cards-box">
          <div className="suggested-video-text">Suggested videos</div>
          {filterOutSingleVideo
            .sort(() => Math.random() - Math.random())
            .map((item) => {
              return <HorizontalVideo video={item} />;
            })}
        </div>
      </section>
    </div>
  );
};

export { SingleVideoPage };
