import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div>
          <Header />
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
