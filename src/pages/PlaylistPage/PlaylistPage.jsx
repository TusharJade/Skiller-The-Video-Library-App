import "../LikePage/LikePage.css";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistPage = () => {
  const { playlist } = usePlaylistContext();
  return (
    <>
      <Sidebar />
      <section className="filter-margins">
        <div className="like-counter">
          <div className="liked-text">Playlists</div>
          <div className="liked-video-num">
            {playlist.length} {playlist.length <= 1 ? "playlist" : "playlists"}
          </div>
        </div>
        <div className="video-outer-grid">
          {playlist.map((item) => (
            <PlaylistCard key={item._id} video={item} />
          ))}
        </div>
        {playlist.length === 0 ? (
          <div className="empty-box-outer">
            <img src="./assets/empty.png" alt="error" className="empty-box" />
            <div className="empty-box-text">There is nothing in playlist</div>
            <Link to="/" className="empty-box-btn">
              Watch videos
            </Link>
          </div>
        ) : null}
      </section>
    </>
  );
};

export { PlaylistPage };
