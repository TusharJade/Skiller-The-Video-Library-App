import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AllVideosPage } from "./pages/AllVideosPage/AllVideosPage";
import { Route, Routes } from "react-router-dom";
import MockmanEs from "mockman-js";
import { useVideoContext } from "./context/video-context";

function App() {
  // const { video, setVideo } = useVideoContext();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllVideosPage />} />
        <Route path="/mockman" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
