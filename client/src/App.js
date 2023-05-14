import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Banner from "./components/Banner";
import MenuBar from "./components/MenuBar";
import MainContent from "./components/MainContent";

import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <div className="container-fluid">
          <Banner />
          <MenuBar />
          <MainContent />
        </div>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}

export default App;
