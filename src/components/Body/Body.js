import { Grid, Typography } from '@material-ui/core';
import React from 'react';


const Body = (props) => {
    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Typography variant="body1">
                    Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........
                    Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........
                    Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........ Testing.... Testing.... yeah yeah Testing........
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Body;