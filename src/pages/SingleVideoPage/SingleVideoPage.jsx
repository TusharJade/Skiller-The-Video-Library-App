import "./SingleVideoPage.css";
import { useParams } from "react-router-dom";
import { useVideoContext } from "../../context/video-context";

const SingleVideoPage = () => {
  const { video } = useVideoContext();
  const { videoId } = useParams();

  const singleVideoFunc = (videoData, id) => {
    return videoData.find((item) => item._id === id);
  };

  const singleVideoData = singleVideoFunc(video, videoId);

  console.log(singleVideoData);

  return <section className="single-video-outerbox"></section>;
};

export { SingleVideoPage };
