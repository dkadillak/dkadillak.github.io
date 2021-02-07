import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';

/*

      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Grid container>
            <Grid item xs={0} sm={1}/>
            <Grid item xs={4} sm={2}>
              <Typography variant="h3" className={classes.title}>
                Devin.
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} />
            <Grid item xs={4} sm={2}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={0} sm={1}/>
          </Grid>
        </Toolbar>
      </AppBar>

*/


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
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <h1 className={classes.appBarTitle}>Devin.</h1>
          <IconButton>
            <SortIcon/>
          </IconButton>
        </Toolbar>

      </AppBar>
    </div>
  );
};

export default MenuBar;
