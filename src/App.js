import React from 'react';

//Material UI imports
import { CssBaseline, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Landing from './assets/images/background/landing.jpg';

// custom component imports
import Body from './components/Body/Body';
import MenuBar from './components/MenuBar/MenuBar';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Landing})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
}));

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
          <Grid item xs={1} sm={2}/>
          <Grid item xs={10} sm={8}>
            <Body></Body>
          </Grid>
          <Grid item xs={1} sm={2}/>
        </Grid>
      </Grid>
    </div>
  );
  }

export default App;