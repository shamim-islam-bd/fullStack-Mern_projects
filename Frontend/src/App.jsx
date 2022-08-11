// APP.js Setup.........
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HeaderMain } from "./common/Header/HeaderMain";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Register/Login";
import { Register } from "./components/Register/Register";
// import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
