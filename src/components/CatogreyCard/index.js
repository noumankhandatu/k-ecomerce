import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Hr from "../hr";
const CategoryCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.Cata}>
      <Typography variant="h4">
        <b>Categories</b>
        <Hr />
      </Typography>

      <Box mt={3} className={classes.grd}>
        <div className={classes.img}>
          <img
            className={classes.readlImg}
            src="https://picsum.photos/500/300"
          />
          <Box textAlign="center" mt={2} mb={2}>
            <Typography variant="h5">
              <b>Fashion</b>
            </Typography>
          </Box>
        </div>
        <div className={classes.img}>
          <img
            className={classes.readlImg}
            src="https://picsum.photos/500/300"
          />
          <Box textAlign="center" mt={2} mb={2}>
            <Typography variant="h5">
              <b>Lorem Ispum</b>
            </Typography>
          </Box>
        </div>
        <div className={classes.img}>
          <img
            className={classes.readlImg}
            src="https://picsum.photos/500/300"
          />
          <Box mt={2} textAlign="center" mb={2}>
            <Typography variant="h5">
              <b>Hello Aka 50</b>
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default CategoryCard;
const useStyles = makeStyles((theme) => ({
  Cata: {
    padding: "50px",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
  },
  grd: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr ",
      gridGap: "30px",
    },
  },
  img: {
    width: "500px",
    borderRadius: "10px",
    boxShadow: "2px 4px 8px grey",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  readlImg: {
    width: "500px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
}));
