import "./LikePage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { useGlobalFilterContext } from "../../context/globle-filters-context";

const LikePage = () => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();
  return (
    <>
      <Sidebar />
      <div className="filter-margins">
        <div className="like-counter">
          <div className="liked-text">Liked</div>
          <div className="liked-video-num">
            {globalFilterState.like.length}{" "}
            {globalFilterState.like.length <= 1 ? "video" : "videos"}
          </div>
        </div>
        <div className="video-outer-grid">
          {globalFilterState.like.map((item) => (
            <VideoThumbnail key={item._id} video={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export { LikePage };
