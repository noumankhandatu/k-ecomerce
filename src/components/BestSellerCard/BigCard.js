import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
const BigCard = () => {
  const classes = useStyles();
  return (
    <Box mt={3} className={classes.EntireBox}>
      <Box
        className={classes.inerBox}
        display="flex"
        justifyContent="space-between"
      >
        <Typography variant="h5">
          Hello world <br /> 300
        </Typography>
        <AcUnitIcon fontSize="large" />
      </Box>
      <Box display="flex" mt={3} mb={1} justifyContent="space-between">
        <Button variant="contained" size="large" color="primary">
          Type here{" "}
        </Button>
        <GitHubIcon fontSize="large" />
      </Box>
      <Box mt={5} mb={2}>
        <img className={classes.imag} src="https://picsum.photos/400/400" />
      </Box>
    </Box>
  );
};

export default BigCard;
const useStyles = makeStyles((theme) => ({
  EntireBox: {
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "400px",
    borderRadius: "10px",
    boxShadow: "2px 4px 8px grey",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  imag: {
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
}));
