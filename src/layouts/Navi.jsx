import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import WorkIcon from '@material-ui/icons/Work';
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import QuestionMarkIcon from "@material-ui/icons/HelpOutline"
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    "root": {
        "position": "sticky",
        "top": 0,
        "transition": "top 0.3s",
    },

    "menuButton": {
        "marginRight": ".2rem",
    },

    "marginForRightButtons": {
        "marginLeft": ".75rem",
    },

    "marginForIcons": {
        "marginRight": ".5rem",
    },

    "input": {
        "marginLeft": ".5rem",
        "flex": "1px",
        "color": "#c4c4c4",
    },

    "iconButton": {
        "padding": "10px",
    },

    "divider": {
        "height": "28px",
        // "margin": "4px",
        "backgroundColor": "#14163d"
    },

    "root2": {
        "background-color": "#272a6b",
        "padding": "2px 4px",
        "display": "flex",
        "width": "550px",
        "height": "30px",
        // "marginLeft": "0.5rem",
    },

    "clickable": {
        "cursor": "pointer",
    },

    "marginHeader": {
        "paddingLeft": "12px",
        "paddingRight": "12px",
        "marginLeft": "-1.5rem"
    },

    buttonGroupCss:{
        "paddingLeft": "12px",
        "paddingRight": "12px",
        "marginRight": "-1.5rem"
    },
}));

export default function Navi() {
    const classes = useStyles();
    const [navbarCurrentBackground, setNavbarCurrentBackground] = useState("transparent")

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";

            if (currentScrollPos === 0) {
                document.getElementById("navbar").style.transition = "0.75s";
                setNavbarCurrentBackground("transparent")
            } else {
                setNavbarCurrentBackground("secondary")
            }
        } else {
            document.getElementById("navbar").style.transition = "0.3s";
            document.getElementById("navbar").style.top = "-75px";

            if (currentScrollPos > 66) {
                document.getElementById("navbar").style.transition = "0.3s";
                setNavbarCurrentBackground("secondary")
            }
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <Box component="div" className={classes.root}>
            <AppBar className={classes.appBar} color={navbarCurrentBackground} id="navbar" elevation={3} position="absolute">
                <Toolbar>
                    <Toolbar className={classes.marginHeader}>

                    <Box component="span" className={classes.marginForIcons}><WorkIcon color="primary" /></Box>
                    <Typography variant="h6">
                        HRMS
                    </Typography>

                    </Toolbar>

                    <Paper component="form" className={classes.root2} elevation={0} variant="outlined">
                        <InputBase
                            className={classes.input}
                            placeholder="Search for a Job"
                        />
                        <IconButton
                            color="primary"
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton
                            color="primary"
                            className={classes.iconButton}
                            aria-label="directions"
                        >
                            <QuestionMarkIcon />
                        </IconButton>
                    </Paper>

                    <Toolbar className={classes.buttonGroupCss}>
                        <Button color="primary"><Box component="span" className={classes.marginForIcons}><FontAwesomeIcon icon={faSignInAlt} /></Box>Sign In</Button>
                        <Box component="span" className={classes.marginForRightButtons}></Box>
                        <Button color="primary"><Box component="span" className={classes.marginForIcons}><FontAwesomeIcon icon={faUserPlus} /></Box>Sign Up</Button>
                    </Toolbar>

                </Toolbar>


            </AppBar>
        </Box>

    );
}
