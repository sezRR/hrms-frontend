import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { Button, makeStyles, Grid, Typography, Slider } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Send as SendIcon, AddCircle as AddCircleIcon } from '@material-ui/icons';
import * as Yup from 'yup';
import { toast } from 'react-toastify'

import CityService from '../services/cityService'
import WorkingPlaceService from '../services/workingPlaceService';
import WorkingTimeService from '../services/workingTimeService';
import JobPositionService from '../services/jobPositionService';
import JobAdvertService from '../services/jobAdvertService';

import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import JobAdvertStaffVerifyService from '../services/jobAdvertStaffVerifyService';
import HRMSTextField from '../utilities/customFormControls/HRMSTextField';
import HRMSAutoComplete from '../utilities/customFormControls/HRMSAutoComplete';

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
    }
});

function valueText(value) {
    return `${value}`
}

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

        document.getElementById("rootdiv").style.height = "925px";
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
        jobAdvertService.addJobAdvert(values).then(result => addJobAdvertStaffVerify(result.data.data.id))
    }

    const addJobAdvertStaffVerify = (jobAdvertId) => {
        let jobAdvertStaffVerifyService = new JobAdvertStaffVerifyService()
        jobAdvertStaffVerifyService.addJobAdvertStaffVerify(jobAdvertId)

        toast.success("Your job advert added by successfully")
    }

    const validate = Yup.object({
        advertDescription: Yup.string().required("Advert description is required"),
        openPosition: Yup.number().positive("Open position is required"),
        cityId: Yup.number().min(1, "City name is required"),
        jobPositionId: Yup.number().min(1, "Job position is required"),
        workingPlaceId: Yup.number().min(1, "Working place is required"),
        workingTimeId: Yup.number().min(1, "Working time is required")
    })

    return (<Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={submitForm}
    >

        {(formik) => {
            const {
                values,
                handleSubmit,
                setFieldValue,
            } = formik;

            const handleSliderChange = (event, newValue) => {
                setValue(newValue);

                setFieldValue("minSalary", newValue[0])
                setFieldValue("maxSalary", newValue[1])
            };

            return (
                <div className={classes.contentCenter}>
                    <Grid container className={classes.customFirstGrid}>
                        <Grid item xs={7} className={classes.customGrid}>
                            <Typography variant="h4" className={classes.customizeTitle}><AddCircleIcon className={classes.customizeIcon} />Job Advert</Typography>


                            <Form onSubmit={handleSubmit}>
                                <HRMSTextField multiline className={classes.advertDescriptionCustomization} id="advertDescription" name="advertDescription" label="Advert Description *" placeholder="Looking for..." />
                                <br />
                                <br />

                                <HRMSTextField className={classes.openPositionCustomization} id="openPosition" name="openPosition" type="number" label="Open Position *" placeholder="1000" />

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

                                <HRMSAutoComplete
                                    {...citiesDefaultProps}
                                    className={classes.citiesAutoCompleteCustomization}
                                    id="cityId"
                                    name="cityId"
                                    onChange={(_, value) => value === null ? setFieldValue("cityId", 0) : setFieldValue("cityId", value.id)}
                                    label="City Name *"
                                    placeholder="Istanbul"
                                />

                                <HRMSAutoComplete
                                    {...jobPositionsDefaultProps}
                                    className={classes.jobPositionsAutoCompleteCustomization}
                                    id="jobPositionId"
                                    name="jobPositionId"
                                    onChange={(_, value) => value === null ? setFieldValue("jobPositionId", 0) : setFieldValue("jobPositionId", value.id)}
                                    label="Job Position *"
                                    placeholder="Software Developer"
                                />

                                <HRMSAutoComplete
                                    {...workingPlacesDefaultProps}
                                    className={classes.workingPlacesAutoCompleteCustomization}
                                    id="workingPlaceId"
                                    name="workingPlaceId"
                                    onChange={(_, value) => value === null ? setFieldValue("workingPlaceId", 0) : setFieldValue("workingPlaceId", value.id)}
                                    label="Working Place *"
                                    placeholder="At workplace"
                                />

                                <HRMSAutoComplete
                                    {...workingTimesDefaultProps}
                                    className={classes.workingTimesAutoCompleteCustomization}
                                    id="workingTimeId"
                                    name="workingTimeId"
                                    onChange={(_, value) => value === null ? setFieldValue("workingTimeId", 0) : setFieldValue("workingTimeId", value.id)}
                                    label="Working Time *"
                                    placeholder="Full time"
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
                            </Form>
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