import React, { useState, useEffect } from 'react'
import { Event as EventIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import { Grid, Card, CardActions, CardContent, makeStyles, Button, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import JobAdvertService from '../services/jobAdvertService';

const useStyles = makeStyles({
    root: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    customIcon: {
        verticalAlign: "middle",
        width: "5.5%",
        height: "5.5%"
    },
    customIcon2: {
        verticalAlign: "-2px",
    },
    customIcon3: {
        marginTop: "-.15rem",
        marginRight: ".5rem",
    },
    rootDiv: {
        marginTop: "3rem"
    }
});


export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])
    const classes = useStyles();

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
    }, [])

    return (
        <div className={classes.rootDiv}>
            <Grid container spacing={9}>
                {jobAdverts.map((jobAdvert) => (
                    <Grid key={jobAdvert.id} item xs={4}>
                        <Card key={jobAdvert.id} className={classes.root} variant="elevation" elevation={5}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    JOB ADVERT ( <EventIcon className={classes.customIcon} /> Created At: {jobAdvert.createdDate})
                                </Typography>
                                <br />
                                <Typography variant="h5" component="h2">
                                    <AccountCircleIcon className={classes.customIcon2} /> {jobAdvert.employer.companyName}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {jobAdvert.position.position}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {jobAdvert.advertDescription}
                                    <br />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium"><FontAwesomeIcon icon={faInfoCircle} className={classes.customIcon3} /> Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
