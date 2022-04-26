import "./PlaylistPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard";
import { useGlobalFilterContext } from "../../context/globle-filters-context";

const PlaylistPage = () => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();
  return (
    <>
      <Sidebar />
      <section className="filter-margins">
        <div className="like-counter">
          <div className="liked-text">Playlists</div>
          <div className="liked-video-num">
            {globalFilterState.playlist.length}{" "}
            {globalFilterState.playlist.length <= 1 ? "playlist" : "playlists"}
          </div>
        </div>
        <div className="video-outer-grid">
          {globalFilterState.playlist.map((item) => (
            <PlaylistCard key={item.playlistId} video={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export { PlaylistPage };
