import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home/home.js";
import About from "./pages/About/about.js";
import Error from "./pages/Error/error.js";
import Logement from "./pages/Logement/logement.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/logements/:id" element={<Logement/>} />
      <Route path="*" element={<Error />} /> 
    </Routes>
  );
}

export default App;
