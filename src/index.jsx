import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">#myAPP</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
