import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Message from "./components/Message";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/message" element={<Message />}></Route>
          <Route path="/memories" element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
