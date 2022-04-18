import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AllVideosPage } from "./pages/AllVideosPage/AllVideosPage";
import { Route, Routes } from "react-router-dom";
import MockmanEs from "mockman-js";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videos" element={<AllVideosPage />} />
        <Route path="/mockman" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
