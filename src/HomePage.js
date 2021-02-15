import React from 'react';

//Material UI imports
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Landing from './assets/images/background/annie-spratt.jpg';

// custom component imports
import Body from './components/Body/Body.js';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${Landing})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundColor: '#464646',
    backgroundSize: 'cover',
  },
  grid: {
    minHeight: '100vh',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid
        container
        direction='column'
        alignContent='space-between'
        className={classes.grid}
      >
        <Grid item xs={12}>
          <NavBar name='home' />
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Body />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
