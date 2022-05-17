import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import pepsico from "../../assets/pepsico.png";
import airtable from "../../assets/airtable.png";
import dunkin from "../../assets/dunkin.png";
import hubspot from "../../assets/hubspot.png";
import zapier from "../../assets/zapier.png";

const Brands = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box>
        <Typography className={classes.heading} variant="h4">
          Brands with us
        </Typography>
      </Box>
      <Box className={classes.brandsLogo}>
        <img src={pepsico} alt="pepsico logo" className={classes.bandsIcon} />
        <img src={dunkin} alt="pepsico logo" className={classes.bandsIcon} />
        <img src={zapier} alt="pepsico logo" className={classes.bandsIcon} />
        <img src={airtable} alt="pepsico logo" className={classes.bandsIcon} />
        <img src={hubspot} alt="pepsico logo" className={classes.bandsIcon} />
      </Box>
    </Box>
  );
};

export default Brands;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "30px 50px",
    [theme.breakpoints.down("md")]: {
      padding: "30px 20px",
    },
  },
  brandsLogo: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  bandsIcon: {
    border: "1px solid transparent",
    borderRadius: "10px",
    margin: "10px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 8px 10px #80808085",
    },
  },

  heading: {
    fontWeight: "bold",
  },
}));
