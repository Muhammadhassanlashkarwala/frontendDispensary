import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
