import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'none',
    top: "0",
    position: "fixed",
  },
  appBarWrapper: {
    width: '90%',
    margin: '0 auto',
  },
  appBarTitle: {
    flexGrow: '1',
    textDecoration: 'none',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  link: {
    textDecoration: 'none',
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
    style: trigger ? {backdropFilter:"contrast(0.8)", background: "black"} : {backdropFilter:"blur(0px)"},
  });
}



const NavBar = (props) => {
  const classes = useStyles();

  const tabs = {"home":-1, "projects":0, "experience":1}

  const activate = tabs[props.name]

  return (
    <div>
      <ElevationScroll {...props}>
        <AppBar position="fixed" className={classes.appBar} >
          <Toolbar className={classes.appBarWrapper}>
            <Link to="/" className={classes.appBarTitle}>
              <Typography variant="h4" >Devin.</Typography>
            </Link>
              <Tabs
                value={activate}
                aria-label="devin's nav bar"
              >
              <Link to="/projects" className={classes.link}>
                <Tab label="projects" />
              </Link>
              <Link to="/experience" className={classes.link}>
                <Tab label="experience" />
              </Link>
              </Tabs>
          </Toolbar>
        </AppBar>
    </ElevationScroll>
    <Toolbar />
  </div>
  );
};

export default NavBar;
