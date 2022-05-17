import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../components/home";
import { makeStyles } from "@material-ui/core";

// remove
import BestCardSeller from "../components/BestSellerCard";
import CategoryCard from "../components/CatogreyCard";
const Routers = () => {
  const classes = useStyles();
  return (
    <Router>
      <Header />
      <div className={classes.image}></div>
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
const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${"https://wallpaperaccess.com/full/1349226.jpg"})`,
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
  },
}));
