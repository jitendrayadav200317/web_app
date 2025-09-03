import React from "react";
// core styles are required for all packages
import '@mantine/core/styles.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
