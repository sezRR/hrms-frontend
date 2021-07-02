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
import JobAdvertFilter from '../components/JobAdvertFilter';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles({
    root: {
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "3rem",
        maxHeight: "235px"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    customIcon: {
        verticalAlign: "middle",
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
    cardFooter: {
        display: "flex",
        justifyContent: "space-between"
    },
    grid: {
        display: "flex",
        flexWrap: "wrap",
        height: "1%",
        minHeight: "600px",
        bottom: 0
    },
    pagination: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5rem",
        bottom: 0,
        width: 1000
    },
    pageSize:{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"3rem",
        width:"100%",
        display:"flex",
        justifyContent:"center"
    },
    pageSizeButtons:{
        marginLeft:".5rem",
        marginRight:".5rem",
        backgroundColor:"#272a6b",
        '&:hover':{
            backgroundColor:"#1f226b"
        }
    },
    selectedPageSizeButton:{
        marginLeft:".5rem",
        marginRight:".5rem",
        backgroundColor:"#000e5c",
        '&:hover':{
            backgroundColor:"#00093b"
        }
    }
});

export default function JobAdvertList() {

    const dispatch = useDispatch()
    const [jobAdvertResponse, setJobAdvertResponse] = useState([])
    const [selectedPageSize, setSelectedPageSize] = useState(10)
    const [selectedPageNo, setSelectedPageNo] = useState(1)
    const classes = useStyles();

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvertsWithPagination(null, null, null).then(result => setJobAdvertResponse(result.data.data))

        let favoriteJobAdvertService = new FavoriteJobAdvertService()
        favoriteJobAdvertService.getByCandidateId(1).then(result => dispatch(addToFavorites(result.data.data)))

        document.getElementById("rootdiv").style.height = "100%"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { favoriteJobAdverts } = useSelector(state => state.favorites)

    function addToFavorite(candidateUserId, jobAdvert) {
        let favoriteJobAdvertService = new FavoriteJobAdvertService()
        favoriteJobAdvertService.addFavorite(candidateUserId, jobAdvert).then(result => (result.data.success === true) ? dispatch(addToFavorites(result.data.data)) : null)
    }

    function handleJobAdverts(newJobAdverts) {
        setJobAdvertResponse(newJobAdverts)
    }

    const handlePageNoChange = (pageNo) => {
        setSelectedPageNo(pageNo)
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvertsWithPagination(null, null, null, pageNo).then(result => setJobAdvertResponse(result.data.data))
    }

    const handlePageSizeChange = (pageSize) => {
        setSelectedPageSize(pageSize)
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvertsWithPagination(null, null, null, selectedPageNo, pageSize).then(result => setJobAdvertResponse(result.data.data))
    }

    const pageSizes = [
        { pageSize: 10 },
        { pageSize: 20 },
        { pageSize: 50 },
        { pageSize: 100 }
    ]

    return (
        <div id="jobAdvertListDiv" className={classes.rootDiv}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <JobAdvertFilter jobAdverts={handleJobAdverts} />
                </Grid>
                <Grid className={classes.grid} item xs={10}>
                    {jobAdvertResponse.content !== undefined ? jobAdvertResponse.content.map((jobAdvert) => (
                        <Card key={jobAdvert.id} className={classes.root} variant="elevation" elevation={5}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    JOB ADVERT ( <EventIcon className={classes.customIcon} /> Created At: {jobAdvert.createdDate})
                                </Typography>
                                <br />
                                <Typography style={{fontSize:24, fontFamily:"roboto"}} variant="h5" component="h2">
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
                                <IconButton onClick={() => addToFavorite(1, jobAdvert)}>{favoriteJobAdverts.filter(j => j.jobAdvert.id === jobAdvert.id).length > 0 ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
                            </CardActions>
                        </Card>
                    )) : false}
                    <Grid item xs={12}>
                        <Pagination showFirstButton showLastButton onChange={(e, v) => handlePageNoChange(v)} className={classes.pagination} count={jobAdvertResponse.totalPages} size="large" style={{ display: "flex", alignContent: "center", justifyContent: "center" }} color="primary" />
                        
                        <div className={classes.pageSize}>
                            <Typography variant="h5">Show {pageSizes.map((pageSize) => (<Button key={pageSize.pageSize} onClick={(e) => handlePageSizeChange(pageSize.pageSize)} className={selectedPageSize === pageSize.pageSize ? classes.selectedPageSizeButton : classes.pageSizeButtons}>{pageSize.pageSize}</Button>))} results on each page</Typography>
                        </div>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}
