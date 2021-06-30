import React, { useEffect, useState } from 'react'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import WorkingPlaceService from '../services/workingPlaceService';
import WorkingTimeService from '../services/workingTimeService'
import { Form, Formik } from 'formik';
import { MenuList } from '@material-ui/core';
import { Button } from '@material-ui/core';
import HRMSRadioGroup from '../utilities/customFormControls/HRMSRadioGroup';
import HRMSAutoComplete from '../utilities/customFormControls/HRMSAutoComplete';
import CityService from '../services/cityService'
import FormLabel from '@material-ui/core/FormLabel';
import JobAdvertService from '../services/jobAdvertService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "100%",
        "borderRadius": "0px 0px 25px 25px",
        display: "flex",
        justifyContent: "center"
    },

    menuList: {
        "borderRadius": "0px 0px 25px 25px"
    },

    form: {
        marginTop: "1rem",
        marginLeft: "1rem"
    },

    submitCustomization: {
        marginLeft:"1.25rem",
        marginRight:"1.25rem",
        marginBottom:"1rem"
    },

    citiesAutoCompleteCustomization: {
        marginTop: "-.5rem",
        width: "90%"
    },
    label: {
        fontSize: "18px",
        fontWeight: "bold"
    },
}));

export default function JobAdvertFilter({jobAdverts}) {
    const classes = useStyles();

    const [cities, setCities] = useState([])
    const [workingPlaces, setWorkingPlaces] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])

    const citiesDefaultProps = {
        options: cities,
        getOptionLabel: (option) => option.cityName
    }

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))

        let workingPlaceService = new WorkingPlaceService()
        workingPlaceService.getWorkingPlaces().then(result => setWorkingPlaces(result.data.data))

        let workingTimeService = new WorkingTimeService()
        workingTimeService.getWorkingTimes().then(result => setWorkingTimes(result.data.data))
    }, [])

    const initialValues = {
        cityId: 0,
        workingTimeId: 0,
        workingPlaceId: 0,
    }

    const submit = (values) => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvertsWithPagination(values.cityId, values.workingTimeId, values.workingPlaceId).then(result => jobAdverts(result.data.data))
    }

    return (
        <div>
            <Paper variant="elevation" className={classes.paper} elevation={5}>
                <MenuList>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={submit}
                    >
                        {({ values, setFieldValue }) => (
                            <Form className={classes.form}>
                                <FormLabel className={classes.label}>Cities</FormLabel>
                                <HRMSAutoComplete
                                    {...citiesDefaultProps}
                                    className={classes.citiesAutoCompleteCustomization}
                                    id="cityId"
                                    name="cityId"
                                    onChange={(_, value) => value === null ? setFieldValue("cityId", 0) : setFieldValue("cityId", value.id)}
                                    placeholder="Istanbul"
                                    variant="outlined"
                                    size="small"
                                />
                                <br />
                                <br />
                                <HRMSRadioGroup datavalueforlabel="workingTime" data={workingTimes} formlabel="Working Times" aria-label="working-times" name={values.workingTimeId.toString()} value={values.workingTimeId} onChange={(e) => setFieldValue("workingTimeId", parseInt(e.currentTarget.value))} />
                                <br />
                                <br />
                                <HRMSRadioGroup datavalueforlabel="workingPlace" data={workingPlaces} formlabel="Working Places" aria-label="working-places" name={values.workingPlaceId.toString()} value={values.workingPlaceId} onChange={(e) => setFieldValue("workingPlaceId", parseInt(e.currentTarget.value))} />
                                <br />
                                <br />
                                <Button
                                    variant="contained"
                                    startIcon={<FontAwesomeIcon icon={faFilter} />}
                                    type="submit"
                                    className={classes.submitCustomization}
                                >
                                    FILTER
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </MenuList>
            </Paper>
        </div>
    )
}
