import React from "react";
import "./App.scss";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Main from "./pages/Page";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Header />
        <div className="wrapper">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
