import React, { useState, useEffect } from 'react'
import { Event as EventIcon } from '@material-ui/icons';
import { Grid, Card, CardActions, CardContent, makeStyles, Button, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import JobAdvertService from '../services/jobAdvertService'

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
        height: "1.4rem",
        marginBottom: ".02rem",
    },
    customIcon3: {
        marginTop: "-.15rem",
        marginRight: ".5rem",
    },
    rootDiv: {
        marginTop: "3rem",
    },
    header: {
        marginBottom: "6rem"
    }
});

export default function ProminentJobAdverts() {

    const [prominentJobAdverts, setProminentJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getProminentJobAdverts(3).then(result => setProminentJobAdverts(result.data.data))
    }, [])

    const classes = useStyles()

    return (
        <div className={classes.rootDiv}>
            <Typography variant="h2" align="center" color="secondary" className={classes.header}>PROMINENT JOB ADVERTS</Typography>
            <Grid container spacing={5}>
                {prominentJobAdverts.map((jobAdvert) => (
                    <Grid key={jobAdvert.id} item xs={4}>
                        <Card key={jobAdvert.id} className={classes.root} variant="elevation" elevation={10}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    JOB ADVERT ( <EventIcon className={classes.customIcon} /> Created At: {jobAdvert.createdDate})
                                </Typography>
                                <br />
                                <Typography variant="h5" component="h2">
                                    <FontAwesomeIcon icon={faBriefcase} className={classes.customIcon2} /> {jobAdvert.employer.companyName}
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
                                <Button size="medium"><FontAwesomeIcon icon={faHandPointRight} className={classes.customIcon3} /> Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
