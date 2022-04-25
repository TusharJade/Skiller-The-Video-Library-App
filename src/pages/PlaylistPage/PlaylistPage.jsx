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
            {globalFilterState.like.length}{" "}
            {globalFilterState.like.length <= 1 ? "playlist" : "playlists"}
          </div>
        </div>
        <div className="video-outer-grid">
          {globalFilterState.like.map((item) => (
            <PlaylistCard key={item._id} video={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export { PlaylistPage };
