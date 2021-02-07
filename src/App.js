import React from 'react';
import { CssBaseline, Grid} from '@material-ui/core';
import MenuBar from './components/MenuBar/MenuBar';
import { makeStyles } from '@material-ui/core/styles';
import Landing from './assets/images/background/landing.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Landing})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
}));

/*

      <CssBaseline/>
      <Grid container direction="column">
        <Grid item xs={12}>
          <MenuBar></MenuBar>
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2}/>
          <Grid item xs={12} sm={8}>
            This is my content! This is my content!This is my content!This is my content!This is my content!This is my content!This is my content!This is my content!This is my content!This is my content!
          </Grid>
          <Grid item xs={0} sm={2}/>
        </Grid>
      </Grid>
    </div>


*/
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Grid container direction="column">
        <Grid item xs={12}>
          <MenuBar></MenuBar>
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2}/>
          <Grid item xs={12} sm={8}>
            This is my content! This is my content!This is my content!This is my content!This is my content!This is my content!This is my content!This is my content!This is my content!This is my content!
          </Grid>
          <Grid item xs={0} sm={2}/>
        </Grid>
      </Grid>
    </div>
  );
  }

export default App;
