import "./SingleVideoPage.css";
import { SingleVideo } from "../../components/SingleVideo/SingleVideo";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { HorizontalVideo } from "../../components/HorizontalVideo/HorizontalVideo";
import { useParams } from "react-router-dom";
import { useVideoContext } from "../../context/video-context";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleVideoPage = () => {
  const { video } = useVideoContext();

  const { videoId } = useParams();

  const [singleVideo, setSingleVideo] = useState({});

  const withoutShowedVideoFunc = (videoData, id) => {
    return videoData.filter((item) => item._id !== id);
  };

  const filterOutSingleVideo = withoutShowedVideoFunc(video, videoId);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setSingleVideo(response.data.video);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div>
      <Sidebar />
      <section className="single-video-outerbox">
        <div className="single-video-premiumbox">
          <SingleVideo video={singleVideo} />
        </div>
        <div className="horizon-cards-box">
          <div className="suggested-video-text">Suggested videos</div>
          {filterOutSingleVideo
            .sort(() => Math.random() - Math.random())
            .map((item) => {
              return <HorizontalVideo key={item._id} video={item} />;
            })}
        </div>
      </section>
    </div>
  );
};

export { SingleVideoPage };
