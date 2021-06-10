import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    svg: {
        textAlign: "right",
    },

    inSvg:{
        width: "90%",
        height: "90%"
    },

    root: {
        // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/home-background.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:1080
    },

    header:{
        marginTop: "5rem",
        textAlign: "left",
        fontFamily: "Fredoka One",
        fontSize: 20,
        color:"#2e2e2e"
    },

    headerEmphasis:{
        color:"#4997fc"
    },

    exploreButton:{
        width: "7.5rem",
        height: "2.5rem"
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <div className={classes.header}>
                    <h1>FIND YOUR DREAM <span className={classes.headerEmphasis}>JOB</span></h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus, ipsum eget mollis consequat, odio elit gravida diam, vitae semper lorem erat in ipsum. Mauris eget sodales magna, nec rutrum ante. Aliquam ultrices ex in ex tempor varius. Pellentesque imperdiet eros lacus, et elementum ipsum feugiat eu. Quisque facilisis eleifend mi sit amet rutrum. Donec condimentum erat vel finibus aliquet. Phasellus fermentum viverra vestibulum. Morbi quis molestie odio, non aliquam sapien. Curabitur sit amet felis at arcu fringilla volutpat a in turpis.</p>
                    <br/>
                    <br/>
                    <br/>
                    <Button className={classes.exploreButton} variant="outlined" color="primary">
                        EXPLORE
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.svg}>
                        <img className={classes.inSvg} src={process.env.PUBLIC_URL + '/assets/job.svg'} alt="Solidarity" />
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}
