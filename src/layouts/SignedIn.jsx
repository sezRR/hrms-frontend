import React from 'react'
import { makeStyles } from '@material-ui/core';
import AvatarWithClickablePopper from '../components/AvatarWithClickablePopper';
import UserNavigation from '../components/UserNavigation';

const useStyles = makeStyles(() => ({
    "root": {
        display: "flex",
        justifyContent: "flex-start"
    }
}));

export default function SignedIn({ signOut }) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <UserNavigation/>
            <AvatarWithClickablePopper signOut={signOut} />
        </div>
    )
}
