import React, { useState, useEffect } from 'react';
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
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, MenuItem, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'

const headersData = [
    {
        label: "Listings",
        href: "/listings",
    },
    {
        label: "Mentors",
        href: "/mentors",
    },
    {
        label: "My Account",
        href: "/account",
    },
    {
        label: "Log Out",
        href: "/logout",
    },
];

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
    },

    "iconButton": {
        "padding": "10px",
    },

    "divider": {
        "height": "28px",
    },

    "root2": {
        "padding": "2px 4px",
        "display": "flex",
        "width": "550px",
        "height": "30px",
        "@media (max-width: 1200px)": {
            "width": "450px",
        },
        "@media (max-width: 990px)": {
            "width": "350px",
        },
        "@media (max-width: 899px)": {
            "marginLeft": "auto",
            "width": "190px",
        },
    },

    "clickable": {
        "cursor": "pointer",
    },

    "marginHeader": {
        "paddingLeft": "12px",
        "paddingRight": "12px",
        "marginLeft": "-1.5rem"
    },

    "buttonGroupCss": {
        "paddingLeft": "12px",
        "paddingRight": "12px",
        "marginRight": "-1.5rem"
    },

    "menuIconMobile": {
        "marginRight": 0,
        "marginLeft": "auto"
    },

    "drawerContainer": {
        "padding": "20px 30px",
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

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));

        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <Box component="span" className={classes.marginForIcons}><WorkIcon color="primary" /></Box>
                <Typography variant="h6">
                    HRMS
                </Typography>
                <Paper component="form" className={classes.root2} elevation={0} variant="outlined">
                    <InputBase
                        className={classes.input}
                        color="primary"
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
                </Paper>
                <IconButton
                    {...{
                        className: classes.menuIconMobile,
                        color: "secondary",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "right",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "textPrimary",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const displayDesktop = () => {
        return (
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
                        color="primary"
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
        );
    };

    return (
        <Box component="div" className={classes.root}>
            <AppBar className={classes.appBar} color={navbarCurrentBackground} id="navbar" elevation={3} position="absolute">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </Box>

    );
}
