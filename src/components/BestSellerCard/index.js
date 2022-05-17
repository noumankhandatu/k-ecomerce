import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import Hr from "../hr";
import SmallCard from "./smallCard";
import BigCard from "./BigCard";
const BestCardSeller = () => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Typography variant="h4">
        <b>Best Seller</b>
      </Typography>
      <Hr />
      <div className={classes.bigGrid}>
        <Box className={classes.bigCardd}>
          <BigCard />
        </Box>
        <Box mt={3} className={classes.smallone}>
          <Box mb={8}>
            <SmallCard />
          </Box>
          <SmallCard />
        </Box>
        <Box mt={3} className={classes.smallone}>
          <Box mb={8}>
            <SmallCard />
          </Box>
          <SmallCard />
        </Box>
      </div>
    </div>
  );
};

export default BestCardSeller;
const useStyles = makeStyles((theme) => ({
  box: {
    padding: "50px",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
  },
  bigGrid: {
    display: "grid",
    gridGap: "40px",
    gridTemplateColumns: "1fr 1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridGap: "20px ",
      gridTemplateColumns: "1fr",
    },
  },
}));
