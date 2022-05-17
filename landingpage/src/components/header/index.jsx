import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import logo from "../../assets/logo.png";
import MobileNavbar from "../Drawer/index";
const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.haeder}>
      <Box className={classes.navbar}>
        <Box>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </Box>
        <Box className={classes.navLinkBox}>
          <NavLink to="/rent" className={classes.navLink}>
            Buy
          </NavLink>
          <NavLink to="/buy" className={classes.navLink}>
            Rent
          </NavLink>
        </Box>
        <Box className={classes.iconBox}>
          <FavoriteIcon className={classes.crimsonIcon} />
          <ShoppingCartIcon className={classes.crimsonIcon} />
          <Button className={classes.login}>login / Signup</Button>
        </Box>
        <Box className={classes.mobileNav}>
          <MobileNavbar />
        </Box>
      </Box>
      <Box className={classes.searchBarContainer}>
        <Box className={classes.searchBar}>
          <Box className={classes.SearchBox}>
            <LocalMallOutlinedIcon className={classes.crimsonIcon} />
            <Button
              className={classes.button}
              onClick={handleOpen}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Catagories
            </Button>
            <FormControl>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                id="demo-controlled-open-select"
                className={classes.select}
              >
                <MenuItem>One</MenuItem>
                <MenuItem>Two</MenuItem>
                <MenuItem>Three</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <hr className={classes.lineHori} />
          <Box className={classes.SearchBox}>
            <SearchIcon className={classes.crimsonIcon} />
            <InputBase
              className={classes.inputField}
              placeholder="Search your dream product.."
            />
            <button className={classes.SearchBtn}>
              <ArrowForwardRoundedIcon />
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  select: {
    display: "none",
  },
  mobileNav: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  haeder: {
    backgroundColor: "#343434f4",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 40px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 20px",
    },
  },
  navLink: {
    color: "#c4c4c4",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "16px",
    marginLeft: "15px",
    marginRight: "15px",
  },
  navLinkBox: {
    "& .active": {
      color: "#fff",
      paddingBottom: "5px",
      borderBottom: "3px crimson solid",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  crimsonIcon: {
    color: "crimson",
    margin: "5px",
    fontSize: "25px",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",

    "& button:nth-of-type(2)": {
      color: "#fff",
      borderRadius: "100px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  login: {
    padding: "15px",
    borderRadius: "50px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "crimson",
    margin: "0 10px",
  },
  searchBarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  searchBar: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "100px",
    "& .MuiPopover-paper": {
      position: "absolute",
      backgroundColor: "red",
    },
  },
  SearchBox: {
    display: "flex",
    alignItems: "center",
    padding: "6px",
  },
  SearchBtn: {
    backgroundColor: "crimson",
    color: "white",
    fontSize: "16px",
    borderRadius: "100%",
    height: "48px",
    width: "48px",
    outline: "none",
    border: "none",
    cursor: "pointer",
    "&:active": {
      opacity: 0.7,
    },
  },
  lineHori: {
    transform: " rotateZ(90deg)",
    width: "33px",
    background: "#808080cf",
    borderColor: "#808080cf",
    marginLeft: "20px",
  },
  inputField: {
    width: "300px",
  },
}));
