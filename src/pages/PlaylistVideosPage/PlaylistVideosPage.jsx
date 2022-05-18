import "../LikePage/LikePage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useGlobalFilterContext } from "../../context/globle-filters-context";
import { useParams } from "react-router-dom";
import { InnerPlaylistCard } from "../PlaylistVideosPage/InnerPlaylistCard";

const PlaylistVideosPage = () => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();

  const { playlistID } = useParams();

  const filterByIdFun = (playlist, id) => {
    return playlist.find((videoId) => videoId.playlistId === id);
  };

  const readyPlaylistVideo = filterByIdFun(
    globalFilterState.playlist,
    playlistID
  );

  return (
    <>
      <Sidebar />
      <div className="filter-margins">
        <div className="like-counter">
          <div className="liked-text">Available videos</div>
          <div className="liked-video-num">
            {readyPlaylistVideo.playlistVideos.length}{" "}
            {readyPlaylistVideo.playlistVideos.length <= 1 ? "video" : "videos"}
          </div>
        </div>
        <div className="video-outer-grid">
          {readyPlaylistVideo.playlistVideos.map((item) => {
            return <InnerPlaylistCard key={item._id} video={item} />;
          })}
        </div>
      </div>
      ;
    </>
  );
};

export { PlaylistVideosPage };
