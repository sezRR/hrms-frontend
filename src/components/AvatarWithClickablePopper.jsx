import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(() => ({
    "root": {
        display: "flex",
        justifyContent: "flex-start"
    },
    "avatar": {
        width: "30px",
        height:"30px",
        marginTop: "auto",
        marginBottom: "auto",
        borderRadius: "90px",
        border: "1px solid",
        zIndex:"-1"
    },
    iconMargin:{
        marginRight: ".5rem"
    }
}));


export default function AvatarWithClickablePopper({signOut}) {
    
    const classes = useStyles()
    
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };


    return (
        <div>
            <IconButton
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Avatar className={classes.avatar} alt="pp" src="https://yt3.ggpht.com/yti/APfAmoHUlQ_paiT84kIx-284s8YNKg7z9BF7-lv1CCChGg=s108-c-k-c0x00ffffff-no-rj" />
            </IconButton>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                        <Paper>
                            <MenuList autoFocusItem={open} id="menu-list-grow">
                                <MenuItem onClick={handleClose}><FontAwesomeIcon className={classes.iconMargin} icon={faUser} />Profile</MenuItem>
                                <MenuItem onClick={handleClose}><FontAwesomeIcon className={classes.iconMargin} icon={faCog} />Settings</MenuItem>
                                <MenuItem onClick={signOut}><FontAwesomeIcon className={classes.iconMargin} icon={faSignOutAlt} /> Logout</MenuItem>
                            </MenuList>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}
