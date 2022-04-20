import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AllVideosPage } from "./pages/AllVideosPage/AllVideosPage";
import { SingleVideoPage } from "./pages/SingleVideoPage/SingleVideoPage";
import { Route, Routes } from "react-router-dom";
import MockmanEs from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllVideosPage />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="/mockman" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
