import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Distinction from "./components/Distinction";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/distinction" element={<Distinction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
