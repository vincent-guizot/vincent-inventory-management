import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Banner from './components/Banner'
import MenuBar from "./components/MenuBar"
import MainContent from "./components/MainContent"

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Banner/>
        <MenuBar/>
        <MainContent/>        
      </div>
    </BrowserRouter>
  );
}

export default App;
