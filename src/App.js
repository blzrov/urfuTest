import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Sidebar />
        <div>
          <Header />
          <div className={styles.wrapper}>
            <Routes>
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
