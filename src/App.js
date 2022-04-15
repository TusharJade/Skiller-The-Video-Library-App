import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AllVideosPage } from "./pages/AllVideosPage/AllVideosPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllVideosPage />
    </div>
  );
}

export default App;
