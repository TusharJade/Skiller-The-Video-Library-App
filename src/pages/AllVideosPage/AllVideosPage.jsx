import "./AllVideosPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { useVideoContext } from "../../context/video-context";

const AllVideosPage = () => {
  const { video, setVideo } = useVideoContext();
  return (
    <>
      <Sidebar />
      <section className="main-video-pagebox">
        <div className="category-filter-box">
          <button className="btn-by-filter onselect">All</button>
          <button className="btn-by-filter "> Communication</button>
          <button className="btn-by-filter">Painting</button>
          <button className="btn-by-filter">photography</button>
          <button className="btn-by-filter">Sketching</button>
          <button className="btn-by-filter">Selling</button>
        </div>
        <div className="video-outer-grid">
          {video.map((item) => {
            return <VideoThumbnail key={item._id} video={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export { AllVideosPage };
