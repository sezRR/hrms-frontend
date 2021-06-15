import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navi from '../layouts/Navi';

const useStyles = makeStyles((theme) => ({
    svg: {
        textAlign: "center",
    },

    inSvg: {
        width: "92%",
        margin: "auto"
    },

    root: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 575,
    },

    header: {
        marginTop: "7.5rem",
    },

    headerEmphasis: {
        color: "#4997fc",
    },

    exploreButton: {
        width: "7.5rem",
        height: "2.5rem",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 0
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch"
            }
        },
    },
    headerParagraph:{
        fontSize:"18px",
        textAlign: "left",
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Navi/> */}
            <Grid container>
                <Grid item xs={6}>
                    <div className={classes.header}>
                        <Typography variant="h1">FIND YOUR DREAM <span className={classes.headerEmphasis}>JOB</span></Typography>
                    </div>
                        <Typography className={classes.headerParagraph} color="primary">
                            Millions of jobless had a job with employer users of HRMS! Begin your job carrier with HRMS.
                        </Typography>
                    <br />
                    <br />
                    {/* <div className={classes.noMarginLeft}>
                    <Toolbar>
                    <div classes={{test:classes.search,test2:classes.noMarginLeft}}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                margin: classes.noMarginLeft
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    </Toolbar>
                    </div> */}


                    <br />
                    <Button className={classes.exploreButton} variant="outlined" color="primary">
                        EXPLORE
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.svg}>
                        <img className={classes.inSvg} src={process.env.PUBLIC_URL + '/assets/job.svg'} alt="Solidarity" />
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}
