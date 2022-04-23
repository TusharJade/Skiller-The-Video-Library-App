import "./HistoryPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useGlobalFilterContext } from "../../context/globle-filters-context";
import { HisoryCard } from "../../components/HisoryCard/HisoryCard";

const HistoryPage = () => {
  const { globalFilterState, globalFilterDispach } = useGlobalFilterContext();
  return (
    <>
      <Sidebar />
      <div className="filter-margins">
        <div className="history-counter">
          <div>
            <div className="liked-text">History</div>
            <div className="liked-video-num">
              {globalFilterState.history.length}{" "}
              {globalFilterState.history.length <= 1 ? "video" : "videos"}
            </div>
          </div>
          <button
            className="clear-history"
            onClick={() => globalFilterDispach({ type: "Clear History" })}
          >
            Clear History
          </button>
        </div>

        <div className="video-outer-grid">
          {globalFilterState.history.map((item) => (
            <HisoryCard key={item._id} video={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export { HistoryPage };
