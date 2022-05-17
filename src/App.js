import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/index";
import Routers from "./routes";

const App = () => {
  return (
    <div>
      <Routers />
    </div>
  );
};

export default App;
