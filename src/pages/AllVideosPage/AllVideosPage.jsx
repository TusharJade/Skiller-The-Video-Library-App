import "./AllVideosPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const AllVideosPage = () => {
  return (
    <>
      <Sidebar />
      <section className="main-video-pagebox">
        <div className="category-filter-box"></div>
      </section>
    </>
  );
};

export { AllVideosPage };
