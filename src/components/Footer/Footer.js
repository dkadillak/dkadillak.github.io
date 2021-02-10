import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
//import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles({
  root: {
      background: "none",
     position: "fixed",
      bottom: "0",
//      flexGrow: "2"
  },
  youtube: {
      fontSize: "large",
  },
  github: {
      fontSize: "large",
  },
  bandcamp: {
      fontSize: "large",
  },
  linkedin: {
      fontSize: "large",
  },
});


const Footer = (props) => {
  const classes = useStyles();

  return (
          <Grid container className={classes.root}>
              <Grid item>
                <IconButton>
                    <a href="https://github.com/dkadillak">
                        <GitHubIcon classname={classes.github}/>
                    </a>
                </IconButton>
              </Grid>
                {
/*               <Grid item xs={3}>
                <IconButton>
                    <a href="https://google.com">
                    <YouTubeIcon classname={classes.youtube}/>
                    </a>
                </IconButton>
                  </Grid> */    
                }
              <Grid item >
                <IconButton>
                    <a href="https://www.linkedin.com/in/devin-kadillak-74250a178/">
                    <LinkedInIcon classname={classes.linkedin}/>
                    </a>
                </IconButton>
              </Grid>

              <Grid item >
              <IconButton>
                  <a href="https://bandcamp.com/devinkadillak">
                    <MusicNoteIcon classname={classes.bandcamp}/>
                  </a>
              </IconButton>
              </Grid>
          </Grid>
  );
};


export default Footer;