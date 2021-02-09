import React from 'react';

import { Grid, Typography, Paper } from '@material-ui/core';

const Body = (props) => {
    return (
        <Grid container spacing={10} direction="column" >
            <Grid item xs={12}>
                <Typography variant="body1">
                    Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........
                    Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........
                    Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="space-between" alignItems="stretch"> 
                    <Grid item xs={3} >
                        <Paper>
                            <Typography align="center" variant="h6">
                                This is some text I want to move around
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} >
                        <Paper>
                            <Typography align="center" variant="h6">
                                This is some text I want to move around
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} >
                        <Paper>
                            <Typography align="center" variant="h6">
                                This is some text I want to move around
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Body;