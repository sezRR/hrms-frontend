import React, { useState, useEffect } from 'react'
import { Event as EventIcon } from '@material-ui/icons';
import { Grid, Card, CardActions, CardContent, makeStyles, Button, Typography, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import JobAdvertService from '../services/jobAdvertService';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteJobAdvertService from '../services/favoriteJobAdvertService';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../store/actions/favoriteJobAdvertActions';

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
        marginTop: "3rem"
    },
    cardFooter:{
        display:"flex",
        justifyContent: "space-between"
    }
});

export default function JobAdvertList() {

    const dispatch = useDispatch()
    const [jobAdverts, setJobAdverts] = useState([])
    const classes = useStyles();

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))

        let favoriteJobAdvertService = new FavoriteJobAdvertService()
        favoriteJobAdvertService.getByCandidateId(1).then(result => dispatch(addToFavorites(result.data.data)))

        // document.getElementById("rootdiv").style.height = `${window.innerHeight}px`;
        document.getElementById("rootdiv").style.height = "1350px";

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { favoriteJobAdverts } = useSelector(state => state.favorites)

    function addToFavorite(candidateUserId, jobAdvert) {
        let favoriteJobAdvertService = new FavoriteJobAdvertService()
        favoriteJobAdvertService.addFavorite(candidateUserId, jobAdvert).then(result => (result.data.success === true) ? dispatch(addToFavorites(result.data.data)) : null)
    }    

    return (
        <div id="jobAdvertListDiv" className={classes.rootDiv}>
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
                            <CardActions className={classes.cardFooter}>
                                <Button size="medium"><FontAwesomeIcon icon={faHandPointRight} className={classes.customIcon3} /> Learn More</Button>
                                {/* <IconButton onClick={() => addToFavorite(1, jobAdvert.id)}>{clicked ? <FavoriteIcon/> : <FavoriteBorderIcon/> }</IconButton> */}
                                {/* <IconButton onClick={() => addToFavorite(1, jobAdvert)}>{ favoriteJobAdverts.includes(jobAdvert) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}</IconButton> */}
                                <IconButton onClick={() => addToFavorite(1, jobAdvert)}>{ favoriteJobAdverts.filter(j => j.jobAdvert.id === jobAdvert.id).length > 0 ? <FavoriteIcon/> : <FavoriteBorderIcon/>}</IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
