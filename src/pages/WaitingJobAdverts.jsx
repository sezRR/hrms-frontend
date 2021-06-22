import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles, Button } from '@material-ui/core';
import JobAdvertStaffVerifyService from '../services/jobAdvertStaffVerifyService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    customConfirm:{
        backgroundColor: "green",
        "&:hover":{
            backgroundColor:"darkgreen"
        }
    },
    customReject:{
        backgroundColor:"#c21010",
        "&:hover":{
            backgroundColor:"#a30f0f"
        }
    }
});

export default function WaitingJobAdverts() {
    const classes = useStyles()

    const [waitingJobAdverts, setWaitingJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertStaffVerifyUserService = new JobAdvertStaffVerifyService()
        jobAdvertStaffVerifyUserService.getByStaffUserIsNull().then(result => setWaitingJobAdverts(result.data.data))
    }, [])

    const submitConfirm = (jobAdvertStaffVerifyId, jobAdvertId) => {               // STAFF USER ID -> LOCAL STORAGE
        let jobAdvertStaffVerifyUserService = new JobAdvertStaffVerifyService()
        jobAdvertStaffVerifyUserService.confirmJobAdvert(jobAdvertStaffVerifyId, jobAdvertId, 28)
    }

    const submitReject = (jobAdvertStaffVerifyId, jobAdvertId) =>{               // STAFF USER ID -> LOCAL STORAGE
        let jobAdvertStaffVerifyUserService = new JobAdvertStaffVerifyService()
        jobAdvertStaffVerifyUserService.rejectJobAdvert(jobAdvertStaffVerifyId, jobAdvertId, 28)
    }

    return (
        <div>
            <TableContainer component={Paper} variant="outlined" className={classes.root}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head" align="center">Id</TableCell>
                            <TableCell variant="head" align="center">Company Name</TableCell>
                            <TableCell variant="head" align="center">Job Advert Description</TableCell>
                            <TableCell variant="head" align="center">Job Advert City</TableCell>
                            <TableCell variant="head" align="center">Open Position</TableCell>
                            <TableCell variant="head" align="center">Created Date</TableCell>
                            <TableCell variant="head" align="center"></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {waitingJobAdverts.map((waitingJobAdvert) => (
                            <TableRow key={waitingJobAdvert.id}>
                                <TableCell align="center">{waitingJobAdvert.id}</TableCell>
                                <TableCell align="center">{waitingJobAdvert.jobAdvert.employer.companyName}</TableCell>
                                <TableCell align="center">{waitingJobAdvert.jobAdvert.advertDescription}</TableCell>
                                <TableCell align="center">{waitingJobAdvert.jobAdvert.city.cityName}</TableCell>
                                <TableCell align="center">{waitingJobAdvert.jobAdvert.openPosition}</TableCell>
                                <TableCell align="center">{waitingJobAdvert.createdDate}</TableCell>
                                <TableCell align="center">
                                    <Button className={classes.customConfirm} onClick={(e) => submitConfirm(waitingJobAdvert.id, waitingJobAdvert.jobAdvert.id)}><FontAwesomeIcon icon={faCheck}/></Button>
                                    <Box component="span" marginLeft=".75rem"></Box>
                                    <Button className={classes.customReject} onClick={(e) => submitReject(waitingJobAdvert.id, waitingJobAdvert.jobAdvert.id)}><FontAwesomeIcon icon={faTimes}/></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
