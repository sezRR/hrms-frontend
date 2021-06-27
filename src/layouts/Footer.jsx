import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        marginTop: "15rem",
        height: 128,
        backgroundColor:"pink"
    },
    copyright:{
        marginLeft:"1rem"
    },
    socials:{
        textAlign:"right",
        marginRight:"1rem"
    },
    menus:{
        textAlign:"center"
    }
})

export default function Footer() {
    const classes = useStyles()
    return (
        <Box component="footer" className={classes.root}>
            <Grid container>
                <Grid item xs={4} className={classes.copyright}>
                    &copy; 2021 HRMS
                </Grid>
                <Grid item xs={4} className={classes.menus}>
                    Terms
                    Privacy
                </Grid>
                <Grid item xs={4} className={classes.socials}>
                    Twitter
                    Facebook
                    Youtube
                    Linkedin
                    Github
                </Grid>
            </Grid>
        </Box>
    )
}
