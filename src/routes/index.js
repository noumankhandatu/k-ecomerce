import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../components/home";
// remove
import BestCardSeller from "../components/BestSellerCard";
import CategoryCard from "../components/CatogreyCard";
const Routers = () => {
  return (
    <Router>
      <Header />
      <CategoryCard />
      <BestCardSeller />
      <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="/rent" exact component={<div>Rent</div>} />
        <Route path="/buy" exact component={<div>Buy</div>} />
      </Routes>
    </Router>
  );
};

export default Routers;
