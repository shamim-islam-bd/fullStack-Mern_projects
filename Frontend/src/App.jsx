// APP.js Setup.........
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./common/Cart/Cart";
import { HeaderMain } from "./common/Header/HeaderMain";
import { WishList } from "./common/WishList/WishList";
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";
import { Login } from "./components/Register/Login";
import { Register } from "./components/Register/Register";
import { DashMain } from "./Dashboard/DashMain/DashMain";

function App() {
  // console.log(store);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="dashMain/*" element={<DashMain />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
