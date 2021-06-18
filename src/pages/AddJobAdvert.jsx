import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import { Button, TextField, makeStyles, Grid, Typography, Slider } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Send as SendIcon, AddCircle as AddCircleIcon } from '@material-ui/icons/Send';

import CityService from '../services/cityService'
import WorkingPlaceService from '../services/workingPlaceService';
import WorkingTimeService from '../services/workingTimeService';
import JobPositionService from '../services/jobPositionService';
import JobAdvertService from '../services/jobAdvertService';

import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

const useStyles = makeStyles({
    advertDescriptionCustomization: {
        width: "100%"
    },
    openPositionCustomization: {
        width: "100%"
    },
    submitCustomization: {
        width: 100,
        height: 40,
        marginTop: "1.5rem"
    },
    datePickerCustomization: {
        marginLeft: "3rem",
        width: "69%"
    },
    customizeIcon: {
        width: "6%",
        height: "6%",
        marginRight: "1rem",
        marginBottom: "-0.1rem",
    },
    inImageAlign: {
        width: "150%",
        height: "150%",
        marginRight: "auto",
        marginLeft: "2.15rem",
    },
    customGrid: {
        maxWidth: "30rem",
        justifyContent: "center",
        marginLeft: "2.15rem"
    },
});

function valueText(value) {
    return `${value}`
}

const validate = (values) => {
    let errors = {};

    if (!values.advertDescription) {
        errors.advertDescription = "Advert description is required";
    }

    if (!values.openPosition) {
        errors.openPosition = "Open position is required";
    }

    if (!values.cityId) {
        errors.cityId = "City name is required";
    }

    if (!values.jobPositionId) {
        errors.jobPositionId = "Job position is required";
    }

    if (!values.workingPlaceId) {
        errors.workingPlaceId = "Working place is required";
    }

    if (!values.workingTimeId) {
        errors.workingTimeId = "Working time is required";
    }

    return errors;
};

export default function AddJobAdvert() {

    const [value, setValue] = React.useState([0, 0]);

    const classes = useStyles();

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [workingPlaces, setWorkingPlaces] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))

        let workingPlaceService = new WorkingPlaceService()
        workingPlaceService.getWorkingPlaces().then(result => setWorkingPlaces(result.data.data))

        let workingTimeService = new WorkingTimeService()
        workingTimeService.getWorkingTimes().then(result => setWorkingTimes(result.data.data))
    }, [])

    const citiesDefaultProps = {
        options: cities,
        getOptionLabel: (option) => option.cityName
    }

    const jobPositionsDefaultProps = {
        options: jobPositions,
        getOptionLabel: (option) => option.position
    }

    const workingPlacesDefaultProps = {
        options: workingPlaces,
        getOptionLabel: (option) => option.workingPlace
    }

    const workingTimesDefaultProps = {
        options: workingTimes,
        getOptionLabel: (option) => option.workingTime
    }

    const initialValues = {
        advertDescription: '',
        cityId: 0,
        createdDate: new Date(),
        deadline: null,
        employerId: 4,              // TO DO: local storage
        jobPositionId: 0,
        maxSalary: null,
        minSalary: null,
        openPosition: 0,
        workingPlaceId: 0,
        workingTimeId: 0,
    }

    const submitForm = (values) => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.addJobAdvert(values)
    }

    return (<Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
    >

        {(formik) => {
            const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                setFieldValue,
            } = formik;

            const handleSliderChange = (event, newValue) => {
                setValue(newValue);

                // if(newValue[0] === 0 || newValue[1] === 0){
                //     if (newValue[0] === 0) {
                //         newValue[0] = null
                //     }

                //     if (newValue[1] === 0) {
                //         newValue[1] = null
                //     }
                // } // TO DO: set null işlemini submit bölümünde yap

                setFieldValue("minSalary", newValue[0])
                setFieldValue("maxSalary", newValue[1])
            };

            return (
                <div className={classes.contentCenter}>
                    <Grid container className={classes.customFirstGrid}>
                        <Grid item xs={7} className={classes.customGrid}>
                            <Typography variant="h4" className={classes.customizeTitle}><AddCircleIcon className={classes.customizeIcon} />Job Advert</Typography>


                            <form onSubmit={handleSubmit}>
                                <TextField multiline className={classes.advertDescriptionCustomization} id="advertDescription" name="advertDescription" onChange={handleChange} label="Advert Description *" placeholder="Looking for..." error={values.advertDescription === "" && touched.advertDescription} helperText={touched.advertDescription ? errors.advertDescription : null} />
                                <br />
                                <br />

                                <TextField className={classes.openPositionCustomization} id="openPosition" name="openPosition" type="number" onChange={handleChange} label="Open Position *" placeholder="1000" error={(values.openPosition === "" || values.openPosition === 0) && touched.openPosition} helperText={touched.openPosition ? errors.openPosition : null} />

                                <br />
                                <br />
                                <br />

                                <Typography id="salarySlider" color="textSecondary" gutterBottom>
                                    Min - Max Salary (x1000)
                                </Typography>
                                <Slider
                                    className={classes.sliderCustomization}
                                    id="salaries"
                                    name="salaries"
                                    value={value}
                                    color="primary"
                                    min={0}
                                    max={30}
                                    step={2}
                                    onChange={handleSliderChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valueText}
                                />


                                <Autocomplete
                                    {...citiesDefaultProps}
                                    className={classes.citiesAutoCompleteCustomization}
                                    id="cityId"
                                    name="cityId"
                                    blurOnSelect
                                    renderInput={(params) => (
                                        <TextField {...params} label="City Name *" margin="normal" placeholder="Istanbul" error={(values.cityId === "" || values.cityId === 0) && touched.cityId} helperText={touched.cityId ? errors.cityId : null} />
                                    )}
                                    onChange={(_, value) => value === null ? setFieldValue("cityId", 0) : setFieldValue("cityId", value.id)}
                                />


                                <Autocomplete
                                    {...jobPositionsDefaultProps}
                                    className={classes.jobPositionsAutoCompleteCustomization}
                                    id="jobPositionId"
                                    name="jobPositionId"
                                    blurOnSelect
                                    renderInput={(params) => (
                                        <TextField {...params} label="Job Position *" margin="normal" placeholder="Software Developer" error={(values.jobPositionId === "" || values.jobPositionId === 0) && touched.jobPositionId} helperText={touched.jobPositionId ? errors.jobPositionId : null} />
                                    )}
                                    onChange={(_, value) => value === null ? setFieldValue("jobPositionId", 0) : setFieldValue("jobPositionId", value.id)}
                                />


                                <Autocomplete
                                    {...workingPlacesDefaultProps}
                                    className={classes.workingPlacesAutoCompleteCustomization}
                                    id="workingPlaceId"
                                    name="workingPlaceId"
                                    blurOnSelect
                                    renderInput={(params) => (
                                        <TextField {...params} label="Working Place *" margin="normal" placeholder="At workplace" error={(values.workingPlaceId === "" || values.workingPlaceId === 0) && touched.workingPlaceId} helperText={touched.workingPlaceId ? errors.workingPlaceId : null} />
                                    )}
                                    onChange={(_, value) => value === null ? setFieldValue("workingPlaceId", 0) : setFieldValue("workingPlaceId", value.id)}
                                />


                                <Autocomplete
                                    {...workingTimesDefaultProps}
                                    className={classes.workingTimesAutoCompleteCustomization}
                                    id="workingTimeId"
                                    name="workingTimeId"
                                    blurOnSelect
                                    renderInput={(params) => (
                                        <TextField {...params} label="Working Time *" margin="normal" placeholder="Full time" error={(values.workingTimeId === "" || values.workingTimeId === 0) && touched.workingTimeId} helperText={touched.workingTimeId ? errors.workingTimeId : null} />
                                    )}
                                    onChange={(_, value) => value === null ? setFieldValue("workingTimeId", 0) : setFieldValue("workingTimeId", value.id)}
                                />

                                <Grid container>
                                    <Button
                                        variant="contained"
                                        startIcon={<SendIcon />}
                                        type="submit"
                                        className={classes.submitCustomization}
                                    >
                                        SUBMIT
                                    </Button>

                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            className={classes.datePickerCustomization}
                                            disableToolbar
                                            variant="inline"
                                            format="yyyy/MM/dd"
                                            margin="normal"
                                            id="deadline"
                                            name="deadline"
                                            label="Job Advert Deadline"
                                            value={values.deadline}
                                            onChange={(date) => setFieldValue("deadline", date.toISOString().split("T")[0])}
                                            minDate={new Date()}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </form>
                        </Grid>
                        <Grid item xs={5}>
                            <div>
                                <img className={classes.inImageAlign} src={process.env.PUBLIC_URL + '/assets/job-ad.svg'} alt="job-ad" />
                            </div>
                        </Grid>
                    </Grid>
                </div >
            );
        }}
    </Formik>
    );

}