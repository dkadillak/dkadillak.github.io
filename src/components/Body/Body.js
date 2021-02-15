import React from 'react';

import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homePageBody: {
    //    height: "100vh",
    paddingBottom: '50px',
  },
}));

const Body = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.homePageBody} direction='row'>
      <Grid item xs={12}>
        <Typography variant='h1'>testing element 1 testing</Typography>
      </Grid>
      <Grid item container alignContent='space-between' xs={12}>
        <Grid item xs={12} s={3}>
          <Paper>
            <Typography align='center' variant='h6'>
              This is some text I want to move around
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} s={3}>
          <Paper>
            <Typography align='center' variant='h6'>
              This is some text I want to move around
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} s={3}>
          <Paper>
            <Typography align='center' variant='h6'>
              This is some text I want to move around
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1'>
          Testing.... Testing.... yeah yeah Testing........ Testing....
          Testing.... yeah yeah Testing........ Testing.... Testing.... yeah
          yeah Testing........ Testing.... Testing.... yeah yeah Testing........
          Testing.... Testing.... yeah yeah Testing........ Testing....
          Testing.... yeah yeah Testing........ Testing.... Testing.... yeah
          yeah Testing........ Testing.... Testing.... yeah yeah Testing........
          Testing.... Testing.... yeah yeah Testing........
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1'>testing last element </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1'>testing last element </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1'>testing last element </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1'>testing last element </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1'>testing last element </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1'>testing last element </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1'>testing last element </Typography>
      </Grid>
    </Grid>
  );
};

export default Body;
