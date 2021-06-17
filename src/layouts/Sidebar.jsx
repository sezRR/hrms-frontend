import React from 'react'
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "position": "sticky",
        "top": "4rem",
    },

    paper: {
        width: "100%",
        "borderRadius": "0px 0px 25px 25px"
    },

    menuItem: {
        "borderRadius": "0px 0px 25px 25px"
    },

    marginForIcons: {
        marginTop: "0.25rem",
        marginRight: ".75rem"
    },

    addButton: {
        "&:hover": {
            "backgroundColor": "#17a62c",
          }
    },

    updateButton: {
        "&:hover": {
            "backgroundColor": "#e38f19",
          }
    },

    deleteButton: {
        "&:hover": {
            "borderRadius": "0px 0px 15px 15px",
            "backgroundColor": "#e31919",
        }
    }
}));

export default function Sidebar() {
    const classes = useStyles();
    
    return (
        <div className={classes.root} id="sidebar">
            <Paper variant="elevation" className={classes.paper} elevation={5}>
                <MenuList className={classes.menuItem}>
                    <MenuItem className={classes.addButton}><span className={classes.marginForIcons}><AddCircleIcon /></span>Add</MenuItem>
                    <MenuItem className={classes.updateButton}><span className={classes.marginForIcons}><EditIcon /></span>Update</MenuItem>
                    <MenuItem className={classes.deleteButton}><span className={classes.marginForIcons}><DeleteIcon /></span>Delete</MenuItem>
                </MenuList>
            </Paper>
        </div>
    )
}
