import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
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
import { useHistory } from 'react-router'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

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
        "zIndex": 1
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
    },

    "buttonGroupCss": {
        "paddingLeft": "12px",
        "paddingRight": "12px",
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

    const navHeader = () => {
        return (
            <RouterLink to="/" style={{ textDecoration: "none" }}>
                <Toolbar className={classes.marginHeader}>

                    <Box component="span" className={classes.marginForIcons}><WorkIcon color="primary" /></Box>
                    <Typography variant="h6">
                        HRMS
                    </Typography>

                </Toolbar>
            </RouterLink>
        )
    }

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

                {navHeader()}

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

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    const displayDesktop = () => {
        return (
            <Toolbar>

                {navHeader()}

                <Paper component="form" className={classes.root2} elevation={0} variant="outlined">
                    <InputBase
                        className={classes.input}
                        placeholder="Search for a Job"
                    />
                    <IconButton
                        type="submit"
                        className={classes.iconButton}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton
                        className={classes.iconButton}
                        aria-label="directions"
                    >
                        <QuestionMarkIcon />
                    </IconButton>
                </Paper>

                <Toolbar className={classes.buttonGroupCss}>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                </Toolbar>

            </Toolbar>
        );
    };

    return (
        <Box component="div" className={classes.root}>
            <AppBar className={classes.appBar} color={navbarCurrentBackground} id="navbar" elevation={3} position="relative">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </Box>

    );
}
