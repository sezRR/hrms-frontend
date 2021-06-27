import { IconButton } from '@material-ui/core'
import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root:{
        display:"flex",
        alignItems: "center"
    }
}));

export default function UserNavigation() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <IconButton color="secondary"><NotificationsIcon/></IconButton>
            <Link to="/favorites"><IconButton color="secondary"><FavoriteIcon/></IconButton></Link>
        </div>
    )
}
