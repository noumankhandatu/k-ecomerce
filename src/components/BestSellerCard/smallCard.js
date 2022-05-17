import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
const SmallCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.grid}>
      <div className={classes.RealBox}>
        <img className={classes.imag} src="https://picsum.photos/300/220" />
        <div>
          <Typography variant="h6">
            Lorem ipsum dolor, sit amet ispum lrejkldjd jksd
          </Typography>
          <Box
            mt={2}
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">A3051 051</Typography>
            <FavoriteIcon style={{ cursor: "pointer" }} fontSize="large" />
          </Box>
          <Box mb={2}>
            <small>Lorem is text</small>
          </Box>

          <div>
            <Box display="flex">
              <Button variant="contained" color="default">
                Free
              </Button>
              <Box ml={2}>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SmallCard;
const useStyles = makeStyles((theme) => ({
  RealBox: {
    borderRadius: "10px",
    padding: "20px",
    gridGap: "20px",
    display: "flex",
    width: "550px",
    boxShadow: "2px 4px 8px grey",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      display: "block",
    },
  },
  imag: {
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
}));
