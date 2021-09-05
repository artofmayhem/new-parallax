//this component is used to build the navigation bar
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
// import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
// import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
// import LocalBarIcon from "@material-ui/icons/LocalBar";
// import LocalDiningIcon from "@material-ui/icons/LocalDining";
// import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
import React, { useState, useEffect, useRef } from "react";
import { TimelineLite } from "gsap";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "50vw",
    backgroundColor: 'black'
  },
});

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = useState({ top: false });
  // set up animation variables
  let nav = useRef(null);
  //set up timeline
  const timeline = new TimelineLite();

  useEffect(() => {
    //set up the animation
    timeline
      .from(nav, 1.75, {
        y: -100,
      })
      .to(nav, 1.75, {
        y: 0,
      });
  }, []); // eslint-disable-line

  const handleDrawerOpen = () => {
    setState({ top: true });
  };
  const handleDrawerClose = () => {
    setState({ top: false });
  };

  return (
    <>
      <AppBar
        color="primary"
        position="fixed"
        className={"filter grayscale-0 ..."}
        style={{
          height: "auto",
          backgroundColor: "transparent",
          width: "100vw",
          boxShadow: "0 0 1rem black",
        }}
        ref={(el) => (nav = el)}
      >
        <div
          className={"flex flex-row flex-wrap justify-between align-center w-screen"}
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className={
              "flex flex-row flex-wrap justify-start my-8 ml-6 text-gray-800 text-4xl w-screen"
            }
          >
            {" "}
            <Button className={"animate-pulse"} onClick={handleDrawerOpen}>
              <MenuIcon className={" mx-10 text-gray-800"} />
            </Button>
            <Link to="/">
              <h1 className={"ml-12 text-gray-400"}>SONVR Design</h1>
              <h2 className={'text-gray-400 ml-80 pl-7 -mt-11 text-lg font-medium'}>By Tony Miller</h2>
            </Link>
          </div>
          {/* <div className={"my-6 -mr-10 text-black text-4xl w-96"}>
            <Button>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://www.facebook.com/Grubspace-174436934701864/"}
              >
                <FacebookIcon className={""} />
              </a>
            </Button>
            <Button>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://www.instagram.com/amalgamatrix_nation/"}
              >
                <InstagramIcon />
              </a>
            </Button>
            <Button>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://twitter.com/tmillhawaii"}
              >
                <TwitterIcon />
              </a>
            </Button>
            <Button>
              <a
                className={"text-black mr-10"}
                style={{ fontSize: "10px" }}
                target="_blank"
                rel="noreferrer"
                href={"https://tonymiller.vercel.app"}
              >
                <AccountCircleIcon className={"mr-2"} />
                Login
              </a>
            </Button>
          </div> */}
        </div>
      </AppBar>
      <Drawer
        color="primary"
        open={state.top}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.fullList,
        }}
      >
        <List className={classes.list}>
          {/* <ListItem button>
            <ListItemIcon>
              <EmojiPeopleIcon />
            </ListItemIcon>
            <Link to={"about"} onClick={handleDrawerClose}>
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <Link to={"chef"} onClick={handleDrawerClose}>
              <ListItemText primary="The Chef Spot" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalDiningIcon />
            </ListItemIcon>
            <Link to={"recipes"} onClick={handleDrawerClose}>
              <ListItemText primary="Recipe Box" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalGroceryStoreIcon />
            </ListItemIcon>
            <Link to={"nutrition"} onClick={handleDrawerClose}>
              <ListItemText primary="Nutrition Corner" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalBarIcon />
            </ListItemIcon>
            <Link to={"cocktails"} onClick={handleDrawerClose}>
              <ListItemText primary="Wine Source" />
            </Link>
          </ListItem> */}
        </List>
      </Drawer>
    </>
  );
}
