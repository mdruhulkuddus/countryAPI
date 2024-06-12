
// import './App.css';
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
