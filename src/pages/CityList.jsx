import React, { useState,useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import CityService from '../services/cityService';

export default function CityList() {
    const [cities, setCities] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))
    }, [])

    return (
        <div>
            <TableContainer component={Paper} variant="outlined">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head" align="center">Id</TableCell>
                            <TableCell variant="head" align="center">City Name</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {cities.map((city) => (
                            <TableRow key={city.id}>
                                <TableCell align="center">{city.id}</TableCell>
                                <TableCell align="center">{city.cityName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
