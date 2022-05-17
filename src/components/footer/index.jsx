import React from "react";
import { Box, InputBase, makeStyles, Typography } from "@material-ui/core";
import logoGray from "../../assets/logoGray.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.footerLogoContainer}>
        <img src={logoGray} alt="logo" />
        <Box>
          <FacebookIcon className={classes.brandsLogo} />
          <TwitterIcon className={classes.brandsLogo} />
        </Box>
      </Box>
      <Box className={classes.linkContainer}>
        <Typography variant="h5" className={classes.head}>
          useful Links
        </Typography>
        <Box className={classes.linksBox}>
          <Link to="">About us</Link>
          <Link to="">Green Credentials</Link>
          <Link to="">FAQ </Link>
          <Link to="">Item Protection Features</Link>
          <Link to="">Featured Ads</Link>
        </Box>
      </Box>
      <Box className={classes.linkContainer}>
        <Typography variant="h5" className={classes.head}>
          Head Office
        </Typography>
        <Box className={classes.linksBox}>
          <Typography className={classes.typoLogo}>
            <LocationOnIcon /> 30 commercial road, street 1002 dubai,UAE
          </Typography>
          <Typography className={classes.typoLogo}>
            <PhoneIcon /> 1-0080-8945-34
          </Typography>
        </Box>
      </Box>
      <Box className={classes.linkContainer}>
        <Typography variant="h5" className={classes.head}>
          News Letter
        </Typography>
        <Typography className={classes.typoLogo}>
          subscribe our newsletter to get updates & news
        </Typography>
        <Box className={classes.searchBar}>
          <InputBase placeholder="Your Email" />
          <button>Submit</button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    padding: "20px 40px",
    backgroundColor: "#fcfcfc",
    [theme.breakpoints.down("md")]: {
      padding: "20px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  footerLogoContainer: {
    display: "flex",
    gap: "54px",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  brandsLogo: {
    margin: "10px",
    border: "1px solid black",
    borderRadius: "30px",
    padding: "3px",
    color: "#484848",
    fontSize: "16px",
  },
  head: {
    marginBottom: "15px",
    fontWeight: "600",
    color: "#484848",
    [theme.breakpoints.down("md")]: {
      marginTop: "35px",
    },
  },
  typoLogo: {
    display: "flex",
    alignItems: "center",
    color: "#3a3a3a",
    marginBottom: "10px",
    "& svg": {
      color: "crimson",
    },
  },
  linksBox: {
    display: "flex",
    flexDirection: "column",
    "& a": {
      textDecoration: "none",
      color: "#3a3a3a",
      marginBottom: "5px",
    },
  },
  searchBar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#c1c1c1",
    borderRadius: "10px",
    height: "50px",
    paddingLeft: "15px",

    "& button": {
      backgroundColor: "crimson",
      color: "white",
      outline: "none",
      border: "none",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
      width: "100px",
      fontSize: "16px",
      height: "50px",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#ed143d85",
      },
    },
    "& input": {
      fontSize: "17px",
    },
  },
}));
