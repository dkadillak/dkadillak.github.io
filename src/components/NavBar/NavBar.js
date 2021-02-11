import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import { Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'black',
    top: "0",
    position: "fixed",
  },
  appBarWrapper: {
    width: '90%',
    margin: '0 auto',
  },
  appBarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  spacer: {
    offset: theme.mixins.toolbar,
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
    style: trigger ? {backdropFilter:"contrast(0.8)"} : {backdropFilter:"blur(0px)"},
  });
}



const NavBar = (props) => {
  const classes = useStyles();

  return (
    <div>
      <ElevationScroll {...props}>
        <AppBar position="fixed" className={classes.appBar} >
          <Toolbar className={classes.appBarWrapper}>
            <Typography variant="h4" className={classes.appBarTitle}>Devin.</Typography>
            <IconButton>
              <SortIcon className={classes.icon}/>
            </IconButton>
          </Toolbar>
        </AppBar>
    </ElevationScroll>
    <Toolbar />
    <div className={classes.spacer}/>
  </div>
  );
};

export default NavBar;
