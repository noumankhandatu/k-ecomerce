import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";
import Footer from "../components/footer";
const Routers = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" exact element={<div>404 error</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
