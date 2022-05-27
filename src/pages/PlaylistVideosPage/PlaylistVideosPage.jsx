import "../LikePage/LikePage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useParams, Link } from "react-router-dom";
import { InnerPlaylistCard } from "../PlaylistVideosPage/InnerPlaylistCard";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistVideosPage = () => {
  const { playlist } = usePlaylistContext();

  const { playlistID } = useParams();

  const filterByIdFun = (playlist, id) => {
    return playlist.find((videoId) => videoId._id === id);
  };

  const readyPlaylistVideo = filterByIdFun(playlist, playlistID);
  console.log(playlist);

  return (
    <>
      <Sidebar />
      <div className="filter-margins">
        {playlist.length > 0 ? (
          <>
            <div className="like-counter">
              <div className="liked-text">
                Playlist name - {readyPlaylistVideo.playlistName}
              </div>
              <div className="liked-video-num">
                {readyPlaylistVideo.videos.length}{" "}
                {readyPlaylistVideo.videos.length <= 1 ? "video" : "videos"}
              </div>
            </div>
            <div className="video-outer-grid">
              {readyPlaylistVideo.videos.map((item) => {
                return <InnerPlaylistCard key={item._id} video={item} />;
              })}
            </div>
          </>
        ) : null}
        {playlist.length === 0 ? (
          <div className="empty-box-outer">
            <img src="../assets/empty.png" alt="error" className="empty-box" />
            <div className="empty-box-text">Playlist is empty watch videos</div>
            <Link to="/" className="empty-box-btn">
              Watch videos
            </Link>
          </div>
        ) : null}
      </div>
      ;
    </>
  );
};

export { PlaylistVideosPage };
