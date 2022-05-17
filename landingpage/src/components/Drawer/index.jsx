import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { NavLink } from "react-router-dom";

import {
  Box,
  Button,
  InputBase,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

export default function MobileNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [menuopen, setMennuOpen] = useState(false);

  const handleClose = () => {
    setMennuOpen(false);
  };

  const handleOpen = () => {
    setMennuOpen(true);
  };
  return (
    <div className={classes.root}>
      <Toolbar className={classes.menuBtn}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={handleDrawerClose}
      >
        <button className={classes.SearchBtn} onClick={handleDrawerClose}>
          <ArrowForwardRoundedIcon />
        </button>
        <div className={classes.drawerHeader}>
          <Box className={classes.navLinkBox}>
            <NavLink
              to="/rent"
              className={classes.navLink}
              onClick={handleDrawerClose}
            >
              Buy
            </NavLink>
            <NavLink
              to="/buy"
              className={classes.navLink}
              onClick={handleDrawerClose}
            >
              Rent
            </NavLink>
          </Box>
          <Box className={classes.iconBox}>
            <FavoriteIcon className={classes.crimsonIcon} />
            <ShoppingCartIcon className={classes.crimsonIcon} />
            <Button className={classes.login}>login / Signup</Button>
          </Box>
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
                  open={menuopen}
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
          </Box>
          <br />
          <Box className={classes.searchBar}>
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
        </div>
      </Drawer>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    backgroundColor: "#343434f4",
    padding: "10px",
    Width: "300px",
  },
  hide: {
    display: "none",
  },
  menuBtn: {
    color: "white",
  },
  navLink: {
    color: "#c4c4c4",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "16px",
    marginTop: "20px",
  },
  navLinkBox: {
    display: "flex",
    flexDirection: "column",
    "& .active": {
      color: "#fff",
      paddingLeft: "5px",

      borderLeft: "3px crimson solid",
    },
  },
  iconBox: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    margin: "20px 0",
    "& button:nth-of-type(2)": {
      color: "#fff",
      borderRadius: "100px",
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
  crimsonIcon: {
    color: "crimson",
    margin: "5px",
    fontSize: "25px",
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
  select: {
    display: "none",
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

  inputField: {
    width: "204px",
  },
}));
