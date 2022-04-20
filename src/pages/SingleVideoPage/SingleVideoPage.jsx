import "./SingleVideoPage.css";
import { SingleVideo } from "../../components/SingleVideo/SingleVideo";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { Sidebar } from "../../components/Sidebar/Sidebar";
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
        {<SingleVideo item={singleVideoData} />}

        {/* {filterOutSingleVideo.map((item) => {
          return <VideoThumbnail video={item} />;
        })} */}
      </section>
    </div>
  );
};

export { SingleVideoPage };
