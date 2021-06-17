import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CityService from '../services/cityService';

const useStyles = makeStyles({
    tableContainer: {
        marginLeft:"auto",
        marginRight:"0",
        overflowX: "unset",
        width: "90%",
    }
});

export default function CityList() {
    const [cities, setCities] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))
    }, [])

    const classes = useStyles();
    return (
        <div>
            <TableContainer className={classes.tableContainer} component={Paper} variant="outlined">
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
