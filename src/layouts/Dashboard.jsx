import { Grid } from '@material-ui/core'
import React from 'react';
// import Sidebar from './Sidebar';
import { makeStyles } from "@material-ui/core/styles";
// import CityList from '../pages/CityList';
import AddJobAdvert from '../pages/AddJobAdvert';
// import CandidateUserList from '../pages/CandidateUserList';
// import EmployerUserList from '../pages/EmployerUserList';
// import JobPositionList from '../pages/JobPositionList';

const useStyles = makeStyles((theme) => ({
    root: {
        "marginTop": "1.5rem"
    }
  }));

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                {/* <Grid item xs={3}>
                    <Sidebar/>
                </Grid> */}
                <Grid item xs={12}>
                    {/* <CityList /> */}
                    {/* <CandidateUserList/>
                    <EmployerUserList/>
                    <JobPositionList/> */}
                    <AddJobAdvert/>
                </Grid>
            </Grid>
        </div>
    )
}
