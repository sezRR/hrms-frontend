import React, { useState,useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import CandidateUserService from '../services/candidateUserService';

export default function CandidateUserList() {
    const [candidateUsers, setCandidateUsers] = useState([])

    useEffect(() => {
        let candidateUserService = new CandidateUserService()
        candidateUserService.getCandidateUsers().then(result => setCandidateUsers(result.data.data))
    }, [])

    return (
        <div>
            <TableContainer component={Paper} variant="outlined">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head" align="center">Id</TableCell>
                            <TableCell variant="head" align="center">Email</TableCell>
                            <TableCell variant="head" align="center">Password</TableCell>
                            <TableCell variant="head" align="center">First Name</TableCell>
                            <TableCell variant="head" align="center">Last Name</TableCell>
                            <TableCell variant="head" align="center">Identity Number</TableCell>
                            <TableCell variant="head" align="center">Date Of Birth</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {candidateUsers.map((candidateUser) => (
                            <TableRow key={candidateUser.id}>
                                <TableCell align="center">{candidateUser.id}</TableCell>
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
