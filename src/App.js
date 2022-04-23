import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AllVideosPage } from "./pages/AllVideosPage/AllVideosPage";
import { SingleVideoPage } from "./pages/SingleVideoPage/SingleVideoPage";
import { LikePage } from "./pages/LikePage/LikePage";
import { WatchLaterPage } from "./pages/WatchLaterPage/WatchLaterPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { Route, Routes } from "react-router-dom";
import MockmanEs from "mockman-js";
import { PlaylistPage } from "./pages/PlaylistPage/PlaylistPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllVideosPage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/watch-later" element={<WatchLaterPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mockman" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
