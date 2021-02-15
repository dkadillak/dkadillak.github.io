import React from 'react';

//Material UI imports
import { Typography } from '@material-ui/core';
import {
  createMuiTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Landing from './assets/images/background/annie-spratt.jpg';

// custom component imports
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${Landing})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundColor: '#464646',
  },
}));

const theme = createMuiTheme({});

const Projects = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container direction='column'>
          <Grid item xs={12}>
            <NavBar name='projects' />
          </Grid>
          <Grid item container>
            <Grid item xs={1} sm={2} />
            <Grid item xs={10} sm={8}>
              <Typography variant='h2'> projects!</Typography>
            </Grid>
            <Grid item xs={1} sm={2} />
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Projects;
