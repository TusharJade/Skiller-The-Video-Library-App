import "./HistoryPage.css";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { HisoryCard } from "../../components/HisoryCard/HisoryCard";
import { useHistoryContext } from "../../context/history-context";

const HistoryPage = () => {
  const { history, clearHistory } = useHistoryContext();
  return (
    <>
      <Sidebar />
      <div className="filter-margins">
        <div className="history-counter">
          <div>
            <div className="liked-text">History</div>
            <div className="liked-video-num">
              {history.length} {history.length <= 1 ? "video" : "videos"}
            </div>
          </div>
          {history.length === 0 ? null : (
            <button className="clear-history" onClick={() => clearHistory()}>
              Clear History
            </button>
          )}
        </div>

        {history.length === 0 ? null : (
          <div className="video-outer-grid">
            {history.map((item) => (
              <HisoryCard key={item._id} video={item} />
            ))}
          </div>
        )}

        {history.length === 0 ? (
          <div className="empty-box-outer">
            <img src="./assets/empty.png" alt="error" className="empty-box" />
            <div className="empty-box-text">You didn't watch anything yet</div>
            <Link to="/" className="empty-box-btn">
              Watch videos
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export { HistoryPage };
