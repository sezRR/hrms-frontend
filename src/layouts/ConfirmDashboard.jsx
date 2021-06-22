import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Route } from 'react-router-dom';
import WaitingJobAdverts from '../pages/WaitingJobAdverts';

const useStyles = makeStyles({
    root:{
        marginTop: "3rem",
    }
})

export default function ConfirmDashboard() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Route exact path="/confirm-dashboard/waitingjobadverts" component={WaitingJobAdverts}/>
        </div>
    )
}
