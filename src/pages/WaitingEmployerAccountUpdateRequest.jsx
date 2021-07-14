import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@material-ui/core';
import EmployerStaffVerifyAccountUpdateService from '../services/employerStaffVerifyAccountUpdateService';

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
export default function WaitingEmployerAccountUpdateRequest() {
    const classes = useStyles()

    const [waitingRequests, setWaitingRequests] = useState([])

    useEffect(() => {
        let employerStaffVerifyAccountUpdateService = new EmployerStaffVerifyAccountUpdateService()
        employerStaffVerifyAccountUpdateService.getWaitingRequests().then(result => setWaitingRequests(result.data.data))
    }, [])

    const submitConfirm = (employerStaffVerifyAccountUpdateId, employerId) => {               // STAFF USER ID -> LOCAL STORAGE
        let employerStaffVerifyAccountUpdateService = new EmployerStaffVerifyAccountUpdateService()
        employerStaffVerifyAccountUpdateService.confirmEmployerAccountUpdateRequest(employerStaffVerifyAccountUpdateId, employerId, 28)
    }

    const submitReject = (employerStaffVerifyAccountUpdateId) =>{               // STAFF USER ID -> LOCAL STORAGE
        let employerStaffVerifyAccountUpdateService = new EmployerStaffVerifyAccountUpdateService()
        employerStaffVerifyAccountUpdateService.rejectEmployerAccountUpdateRequest(employerStaffVerifyAccountUpdateId, 28)
    }

    return (
        <div>
            <TableContainer component={Paper} variant="outlined" className={classes.root}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head" align="center">Id</TableCell>
                            <TableCell variant="head" align="center">Email (Old to New)</TableCell>
                            <TableCell variant="head" align="center">Company Name (Old to New)</TableCell>
                            <TableCell variant="head" align="center">Web Address (Old to New)</TableCell>
                            <TableCell variant="head" align="center">Phone Number (Old to New)</TableCell>
                            <TableCell variant="head" ></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {waitingRequests.map((waitingRequest) => (
                            <TableRow key={waitingRequest.id}>
                                <TableCell align="center">{waitingRequest.id}</TableCell>
                                <TableCell align="center">{waitingRequest.employer.email} to {waitingRequest.tempAccountInformation.email}</TableCell>
                                <TableCell align="center">{waitingRequest.employer.companyName} to {waitingRequest.tempAccountInformation.companyName}</TableCell>
                                <TableCell align="center">{waitingRequest.employer.webAddress} to {waitingRequest.tempAccountInformation.webAddress}</TableCell>
                                <TableCell align="center">{waitingRequest.employer.phoneNumber} to {waitingRequest.tempAccountInformation.phoneNumber}</TableCell>
                                <TableCell >
                                    <Button className={classes.customConfirm} onClick={(e) => submitConfirm(waitingRequest.id, waitingRequest.employer.id)}><FontAwesomeIcon icon={faCheck}/></Button>
                                    <Box component="span" marginLeft=".5rem"></Box>
                                    <Button className={classes.customReject} onClick={(e) => submitReject(waitingRequest.id, waitingRequest.employer.id)}><FontAwesomeIcon icon={faTimes}/></Button>
                                    <Box component="span" marginLeft="1rem"></Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
