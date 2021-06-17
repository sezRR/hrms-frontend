import { Grid, makeStyles } from '@material-ui/core'
import React from 'react';
import Sidebar from './Sidebar';
import CityList from '../pages/CityList';
import CandidateUserList from '../pages/CandidateUserList';
import EmployerUserList from '../pages/EmployerUserList';
import JobPositionList from '../pages/JobPositionList';
import { Route } from 'react-router-dom';

const useStyles = makeStyles({
    root:{
        marginTop: "3rem",
    }
})

export default function Dashboard() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Route exact path="/dashboard/citylist" component={CityList}/>
                    <Route exact path="/dashboard/candidateuserlist" component={CandidateUserList}/>
                    <Route exact path="/dashboard/employeruserlist" component={EmployerUserList}/>
                    <Route exact path="/dashboard/jobpositionlist" component={JobPositionList}/>
                </Grid>
            </Grid>
        </div>
    )
}
