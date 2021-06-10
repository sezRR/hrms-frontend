import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CandidateUserService from '../services/candidateUserService';

const useStyles = makeStyles({
    tableContainer: {
        marginLeft:"auto",
        marginRight:"0",
        overflowX: "unset",
        width: "90%",
    },

    tableHeader: {
        backgroundColor: "#ebebeb",
        color: "black",
        fontWeight:"bold"
    },

    tableBody: {
        backgroundColor: "#f9f7f7",
        color: "white",
    }
});

export default function CandidateUserList() {
    const [candidateUsers, setCandidateUsers] = useState([])

    useEffect(() => {
        let candidateUserService = new CandidateUserService()
        candidateUserService.getCandidateUsers().then(result => setCandidateUsers(result.data.data))
    }, [])

    const classes = useStyles();
    return (
        <div>
            <TableContainer className={classes.tableContainer} component={Paper} variant="outlined">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className={classes.tableHeader}>
                            <TableCell className={classes.tableHeader} align="center">Id</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Email</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Password</TableCell>
                            <TableCell className={classes.tableHeader} align="center">First Name</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Last Name</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Identity Number</TableCell>
                            <TableCell className={classes.tableHeader} align="center">Date Of Birth</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody className={classes.tableBody}>
                        {candidateUsers.map((candidateUser) => (
                            <TableRow key={candidateUser.id}>
                                <TableCell component="th" scope="row" align="center">{candidateUser.id}</TableCell>
                                <TableCell align="center">{candidateUser.email}</TableCell>
                                <TableCell align="center">{candidateUser.password}</TableCell>
                                <TableCell align="center">{candidateUser.firstName}</TableCell>
                                <TableCell align="center">{candidateUser.lastName}</TableCell>
                                <TableCell align="center">{candidateUser.identityNumber}</TableCell>
                                <TableCell align="center">{candidateUser.dateOfBirth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
