import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const Hr = () => {
  const classes = useStyles();
  return (
    <Box pt={2} pb={2}>
      <div className={classes.hr}></div>
    </Box>
  );
};

export default Hr;
const useStyles = makeStyles((theme) => ({
  hr: {
    width: "120px",
    height: "3px",
    backgroundColor: "red",
    color: "purple",
  },
}));
