import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'none',
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
  }
}));

const MenuBar = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <Typography variant="h4" className={classes.appBarTitle}>Devin.</Typography>
          <IconButton>
            <SortIcon className={classes.icon}/>
          </IconButton>
        </Toolbar>

      </AppBar>
    </div>
  );
};

export default MenuBar;
