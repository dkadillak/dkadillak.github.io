import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
//import { Grid } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
//import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

/*

          <Grid container className={classes.root}>
              <Grid item>
                <IconButton>
                    <a href="https://github.com/dkadillak">
                        <GitHubIcon className={classes.github}/>
                    </a>
                </IconButton>
              </Grid>
                {
               <Grid item xs={3}>
                <IconButton>
                    <a href="https://google.com">
                    <YouTubeIcon className={classes.youtube}/>
                    </a>
                </IconButton>
                  </Grid>   
                }
              <Grid item >
                <IconButton>
                    <a href="https://www.linkedin.com/in/devin-kadillak-74250a178/">
                    <LinkedInIcon className={classes.linkedin}/>
                    </a>
                </IconButton>
              </Grid>

              <Grid item >
              <IconButton>
                  <a href="https://bandcamp.com/devinkadillak">
                    <MusicNoteIcon className={classes.bandcamp}/>
                  </a>
              </IconButton>
              </Grid>
          </Grid>

https://elad.medium.com/css-position-sticky-how-it-really-works-54cd01dc2d46
*/
const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background: 'black',
  },
  youtube: {
    fontSize: 'large',
  },
  github: {
    fontSize: 'large',
  },
  bandcamp: {
    fontSize: 'large',
  },
  linkedin: {
    fontSize: 'large',
  },
});

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 100,
  });

  return (
    <Slide appear={true} direction='up' in={trigger}>
      {children}
    </Slide>
  );
}

const Footer = (props) => {
  const classes = useStyles();

  return (
    <HideOnScroll {...props}>
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction
          label='GitHub'
          icon={
            <a href='https://github.com/dkadillak'>
              <GitHubIcon className={classes.github} />
            </a>
          }
        />
        <BottomNavigationAction
          label='LinkedIn'
          icon={
            <a href='https://www.linkedin.com/in/devin-kadillak-74250a178/'>
              <LinkedInIcon className={classes.linkedin} />
            </a>
          }
        />
        <BottomNavigationAction
          label='BandCamp'
          icon={
            <a href='https://bandcamp.com/devinkadillak'>
              <MusicNoteIcon className={classes.bandcamp} />
            </a>
          }
        />
      </BottomNavigation>
    </HideOnScroll>
  );
};

export default Footer;
