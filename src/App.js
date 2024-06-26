import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:countryName" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
