import React, { useState,useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import JobPositionService from '../services/jobPositionService';

export default function JobPositionList() {
    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
    }, [])

    return (
        <div>
            <TableContainer component={Paper} variant="outlined">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Position</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobPositions.map((jobPosition) => (
                            <TableRow key={jobPosition.id}>
                                <TableCell align="center">{jobPosition.id}</TableCell>
                                <TableCell align="center">{jobPosition.position}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
