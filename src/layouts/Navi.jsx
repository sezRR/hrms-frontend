import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    "root": {
        "flex-grow": 1,
        "marginLeft": "auto",
        "marginRight": "auto",
        "position": "sticky",
        "top": 0,
    },
    
    "appBar": {
        "backgroundColor": "#f9f7f7",
    },
    
    "title": {
        "fontFamily": "Nunito",
        "color":"#1e2022"
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
    
    "menus": {
        "marginLeft": "auto",
        "marginRight": "auto",
    },
    
    "input": {
        "marginLeft": ".1rem",
        "flex": "1px",
        "backgroundColor": "#f9f7f7",
        "color": "#112d4e",
    },
    
    "iconButton": {
        "padding": "10px",
        color:"#52616b"
    },
    
    "divider": {
        "height": "28px",
        "margin": "4px",
        backgroundColor:"#c9d6df"
    },
    
    "root2": {
        "background-color": "transparent",
        "padding": "2px 4px",
        "display": "flex",
        "align-items": "center",
        "width": "550px",
        "height": "30px",
    },
    
    "clickable": {
        "cursor": "pointer",
    },

    "buttonFont":{
        "fontFamily": "Roboto",
        color: "#1e2022"
    }
}));


export default function Navi() {
    const classes = useStyles();

    const multipleClassForWorkIconSpan = `${classes.marginForIcons} ${classes.title}`

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0} position="static" variant="outlined">
                
                <Toolbar>
                    <Toolbar className={classes.clickable}>
                        <span className={multipleClassForWorkIconSpan}><WorkIcon /></span> 
                        <Typography variant="h6" className={classes.title}>
                            HRMS
                        </Typography>
                    </Toolbar>

                    <Toolbar className={classes.menus}>
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
                    </Toolbar>
                    <Button color="inherit" className={classes.buttonFont}><span className={classes.marginForIcons}><FontAwesomeIcon icon={faSignInAlt} /></span>Sign In</Button>
                    <span className={classes.marginForRightButtons}></span>
                    <Button color="inherit" className={classes.buttonFont}><span className={classes.marginForIcons}><FontAwesomeIcon icon={faUserPlus} /></span>Sign Up</Button>
                </Toolbar>
            </AppBar>
        </div>

    );
}
