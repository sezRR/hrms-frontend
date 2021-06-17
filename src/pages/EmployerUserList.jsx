import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EmployerUserService from '../services/employerUserService';

const useStyles = makeStyles({
    tableContainer: {
        marginLeft:"auto",
        marginRight:"0",
        overflowX: "unset",
        width: "90%",
    }
});

export default function EmployerUserList() {
    const [employerUsers, setEmployerUsers] = useState([])

    useEffect(() => {
        let employerUserService = new EmployerUserService()
        employerUserService.getEmployerUsers().then(result => setEmployerUsers(result.data.data))
    }, [])

    const classes = useStyles();
    return (
        <div>
            <TableContainer className={classes.tableContainer} component={Paper} variant="outlined">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Password</TableCell>
                            <TableCell align="center">Company Name</TableCell>
                            <TableCell align="center">Web Address</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody className={classes.tableBody}>
                        {employerUsers.map((employerUser) => (
                            <TableRow key={employerUser.id}>
                                <TableCell align="center">{employerUser.id}</TableCell>
                                <TableCell align="center">{employerUser.email}</TableCell>
                                <TableCell align="center">{employerUser.password}</TableCell>
                                <TableCell align="center">{employerUser.companyName}</TableCell>
                                <TableCell align="center">{employerUser.webAddress}</TableCell>
                                <TableCell align="center">{employerUser.phoneNumber}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
