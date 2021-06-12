import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import SendIcon from '@material-ui/icons/Send';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CityService from '../services/cityService'
import WorkingPlaceService from '../services/workingPlaceService';
import WorkingTimeService from '../services/workingTimeService';
import JobPositionService from '../services/jobPositionService';
import JobAdvertService from '../services/jobAdvertService';
import 'date-fns';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
    sliderHeader: {
        width: "100%",
        color: "gray",
    },
    contentCenter: {
        display: "flex",
        justifyContent: "center"
    },
    advertDescriptionCustomization: {
        width: "100%"
    },
    openPositionCustomization: {
        width: "100%"
    },
    sliderCustomization: {
        width: "100%"
    },
    citiesAutoCompleteCustomization: {
        width: "100%"
    },
    jobPositionsAutoCompleteCustomization: {
        width: "100%"
    },
    workingPlacesAutoCompleteCustomization: {
        width: "100%"
    },
    workingTimesAutoCompleteCustomization: {
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
        marginBottom: "-0.1rem" 
    },
    imageAlign: {
        "position": "sticky",
        "top": 5,
    },
    inImageAlign: {
        width: "150%",
        height: "150%",
        marginRight: "auto",
        marginLeft: "5rem",
    },
    customGrid: {
        maxWidth: "30rem",
        justifyContent: "center"
    },
    topGrid: {
        // justifyContent: "center"
    }
});

function valuetext(value) {
    return `${value}`
}

export default function AddJobAdvert() {

    const [value, setValue] = React.useState([0, 0]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        
        if(newValue[0] === 0 || newValue[1] === 0){
            if (newValue[0] === 0) {
                newValue[0] = null
            }
    
            if (newValue[1] === 0) {
                newValue[1] = null
            }
        }
        console.log(newValue)

        formik.setFieldValue("minSalary", newValue[0])
        formik.setFieldValue("maxSalary", newValue[1])
    };

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
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
        },
        onSubmit: values => {
            let jobAdvertService = new JobAdvertService()
            jobAdvertService.addJobAdvert(values)
        },
    });

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

    return (
        <div className={classes.contentCenter}>
            <Grid container className={classes.topGrid}>
                <Grid item xs={7} className={classes.customGrid}>
                    <h1><AddCircleIcon className={classes.customizeIcon} />Job Advert</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField className={classes.advertDescriptionCustomization} required id="advertDescription" name="advertDescription" onChange={formik.handleChange} label="Advert Description" placeholder="Looking for..." />

                        <br />
                        <br />

                        <TextField className={classes.openPositionCustomization} required id="openPosition" name="openPosition" type="number" onChange={formik.handleChange} label="Open Position" placeholder="1000" />

                        <br />
                        <br />
                        <br />

                        <Typography id="salarySlider" className={classes.sliderHeader} gutterBottom>
                            Min - Max Salary (x1000)
                        </Typography>
                        <Slider
                            className={classes.sliderCustomization}
                            id="maxSalary"
                            name="maxSalary"
                            value={value}
                            min={0}
                            max={30}
                            step={2}
                            label="test"
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                        />


                        <Autocomplete
                            {...citiesDefaultProps}
                            className={classes.citiesAutoCompleteCustomization}
                            id="cityId"
                            name="cityId"
                            blurOnSelect
                            renderInput={(params) => (
                                <TextField required {...params} label="City Name" margin="normal" placeholder="Istanbul" />
                            )}
                            onChange={(_, value) => value === null ? null : formik.setFieldValue("cityId", value.id)}
                        />


                        <Autocomplete
                            {...jobPositionsDefaultProps}
                            className={classes.jobPositionsAutoCompleteCustomization}
                            id="jobPositionId"
                            name="jobPositionId"
                            blurOnSelect
                            renderInput={(params) => (
                                <TextField required {...params} label="Job Position" margin="normal" placeholder="Software Developer" />
                            )}
                            onChange={(_, value) => value === null ? null : formik.setFieldValue("jobPositionId", value.id)}
                        />


                        <Autocomplete
                            {...workingPlacesDefaultProps}
                            className={classes.workingPlacesAutoCompleteCustomization}
                            id="workingPlaceId"
                            name="workingPlaceId"
                            blurOnSelect
                            renderInput={(params) => (
                                <TextField required {...params} label="Working Place" margin="normal" placeholder="At workplace" />
                            )}
                            onChange={(_, value) => value === null ? null : formik.setFieldValue("workingPlaceId", value.id)}
                        />


                        <Autocomplete
                            {...workingTimesDefaultProps}
                            className={classes.workingTimesAutoCompleteCustomization}
                            id="workingTimeId"
                            name="workingTimeId"
                            blurOnSelect
                            renderInput={(params) => (
                                <TextField required {...params} label="Working Time" margin="normal" placeholder="Full time" />
                            )}
                            onChange={(_, value) => value === null ? null : formik.setFieldValue("workingTimeId", value.id)}
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
                                    value={formik.values.deadline}
                                    onChange={(date) => formik.setFieldValue("deadline", date.toISOString().split("T")[0])}
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
                    <div className={classes.imageAlign}>
                        <img className={classes.inImageAlign} src={process.env.PUBLIC_URL + '/assets/job-ad.svg'} alt="job-ad" />
                    </div>
                </Grid>
            </Grid>

        </div>
    );
}