import "../LikePage/LikePage.css";
import { VideoThumbnail } from "../../components/VideoThumbnail/VideoThumbnail";
import { useGlobalFilterContext } from "../../context/globle-filters-context";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const WatchLaterPage = () => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();
  return (
    <>
      <Sidebar />
      <div className="filter-margins">
        <div className="like-counter">
          <div className="liked-text">Watch Later</div>
          <div className="liked-video-num">
            {globalFilterState.watchLater.length}{" "}
            {globalFilterState.watchLater.length <= 1 ? "video" : "videos"}
          </div>
        </div>
        <div className="video-outer-grid">
          {globalFilterState.watchLater.map((item) => (
            <VideoThumbnail key={item._id} video={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export { WatchLaterPage };
