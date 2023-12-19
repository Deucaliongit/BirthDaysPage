import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Message from "./components/Message";
import Gallery from "./components/Gallery";
import { MusicProvider } from "./components/MusicContext";

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/memories" element={<Gallery />} />
        </Routes>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
