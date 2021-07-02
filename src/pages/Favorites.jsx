import React, { useEffect } from 'react'
import { Event as EventIcon } from '@material-ui/icons';
import { Grid, Card, CardActions, CardContent, makeStyles, Button, Typography, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFrown, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteJobAdvertService from '../services/favoriteJobAdvertService';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/actions/favoriteJobAdvertActions';
import { SvgIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    cardFooter: {
        display: "flex",
        justifyContent: "space-between"
    },
    header: {
        marginLeft: "1rem",
        marginTop: "2rem",
        marginBottom: "3rem"
    },
    svgIcon:{
        display:"flex",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"0.5rem",
        width:"20%",
        height:"20%"
    },
    div:{ 
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    exploreButton:{
        marginTop:"1rem",
        fontSize:"18px",
        color: "#a1aced",
        '&:hover':{
            borderColor:"#f5f5f5"
        },
        borderColor:"#a1aced"
    }
});

export default function Favorites() {

    const dispatch = useDispatch()
    const classes = useStyles();

    const { favoriteJobAdverts } = useSelector(state => state.favorites)

    useEffect(() => {
        let favoriteJobAdvertService = new FavoriteJobAdvertService()
        favoriteJobAdvertService.getByCandidateId(1).then(result => dispatch(addToFavorites(result.data.data)))

        document.getElementById("rootdiv").style.height = "100%"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function removeFromFavorite(jobAdvert) {
        dispatch(removeFromFavorites(jobAdvert))
        let favoriteJobAdvertService = new FavoriteJobAdvertService()
        favoriteJobAdvertService.deleteFavorite(jobAdvert.id)
    }

    const displayFavoriteJobAdverts = () => {
        return (
            <>
            <Typography className={classes.header} variant="h2" color="primary">Your Favorite Job Adverts</Typography>
            <Grid container spacing={9}>
                {favoriteJobAdverts.map((favoriteJobAdvert) => (
                    <Grid key={favoriteJobAdvert.id} item xs={4}>
                        <Card key={favoriteJobAdvert.jobAdvert.id} className={classes.root} variant="elevation" elevation={5}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    JOB ADVERT ( <EventIcon className={classes.customIcon} /> Created At: {favoriteJobAdvert.jobAdvert.createdDate})
                                </Typography>
                                <br />
                                <Typography style={{fontSize:24, fontFamily:"roboto"}} variant="h5" component="h2">
                                    <FontAwesomeIcon icon={faBriefcase} className={classes.customIcon2} /> {favoriteJobAdvert.jobAdvert.employer.companyName}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {favoriteJobAdvert.jobAdvert.position.position}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {favoriteJobAdvert.jobAdvert.advertDescription}
                                    <br />
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardFooter}>
                                <Button size="medium"><FontAwesomeIcon icon={faHandPointRight} className={classes.customIcon3} /> Learn More</Button>
                                <IconButton onClick={() => removeFromFavorite(favoriteJobAdvert)}><FavoriteIcon /></IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </>
        )
    }

    const displayNoFavoriteJobAdverts = () => {
        return (
            <div className={classes.div}>
                <SvgIcon className={classes.svgIcon} ><FontAwesomeIcon icon={faFrown} /></SvgIcon>
                <Typography variant="h3">You don't have any favorite job advert</Typography>
                <Button size="medium" className={classes.exploreButton} variant="outlined" component={Link} to="/jobadverts">Explore Job Adverts</Button>
            </div>
        )
    }

    return (
        <div id="jobAdvertListDiv" className={classes.rootDiv}>
            {favoriteJobAdverts.length > 0 ? displayFavoriteJobAdverts() : displayNoFavoriteJobAdverts()}
        </div>
    )
}
