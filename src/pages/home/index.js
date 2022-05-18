import React from "react";
import BestCardSeller from "../../components/BestSellerCard";
import Brands from "../../components/brands";
import CategoryCard from "../../components/CatogreyCard";
import { makeStyles } from "@material-ui/core";

const Home = () => {
    const classes = useStyles();
  return (
    <div>
      <div className={classes.image}></div>
      <Brands />
      <CategoryCard />
      <BestCardSeller />
    </div>
  );
};

export default Home;
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
