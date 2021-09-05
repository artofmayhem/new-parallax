//this component is used to build the navigation bar
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { useState, useEffect, useRef } from "react";
import { TimelineLite } from "gsap";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
    color: "black",
  },
  fullList: {
    width: "50vw",
    backgroundColor: "black",
  },
  listItemText: {
    color: "white",
    fontSize: "1.5rem",
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
          className={
            "flex flex-row flex-wrap justify-between align-center w-screen"
          }
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
              <h2
                className={
                  "text-gray-400 ml-80 pl-7 -mt-11 text-lg font-medium"
                }
              >
                By Tony Miller
              </h2>
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
        anchor="left"
        color="primary"
        open={state.top}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.fullList,
        }}
      >
        <List className={classes.list}>
          <ListItem>
            <h1 className={classes.listItemText}>Projects</h1>
          </ListItem>
          <hr style={{ color: "#444", width: "30vw", minWidth: 375 }} />
          <ListItem button>
            <a
              href={"https://grubspace.netlify.app"}
              target="_blank"
              rel="noreferrer"
              className={"mt-6"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Grubspace</h3>
            </a>
          </ListItem>
          <ListItem button>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://apple-site-clone.netlify.app"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Apple Clone</h3>
            </a>
          </ListItem>
          <ListItem button>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://anywhere-fitness-club.vercel.app"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Anywhere Fitness Club</h3>
            </a>
          </ListItem>
          <ListItem button>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://streetartmagazine.netlify.app"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Street Art Magazine</h3>
            </a>
          </ListItem>
          <ListItem button>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://adidasproductportal.vercel.app"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Adidas Product Portal</h3>
            </a>
          </ListItem>{" "}
          <ListItem>
            <h1 className={classes.listItemText} style={{ marginTop: "3rem" }}>
              Three.js Animations
            </h1>
          </ListItem>
          <hr style={{ color: "#444", width: "30vw", minWidth: 375 }} />
          <ListItem button>
            <a
              target="_blank"
              rel="noreferrer"
              className={"mt-6"}
              href={"https://jarvisportal.netlify.app"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Marvel API </h3>
            </a>
          </ListItem>
          <ListItem button>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://syntech3d.netlify.app"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Syntech 3D Header</h3>
            </a>
          </ListItem>
          <ListItem button>
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://drive.google.com/file/d/17TZBey8iB3NjTFbU3Sc96eVprXbRWdB6/view?usp=sharing"
              }
              className={"mt-24"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Technical Resume - Tony Miller</h3>
            </a>
          </ListItem>
          <ListItem button>
            <a
              href={"mailto:robodevbots@gmail.com"}
              className={"mt-4"}
              onClick={handleDrawerClose}
            >
              <h3 style={{ color: "white" }}>Connect</h3>
            </a>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
