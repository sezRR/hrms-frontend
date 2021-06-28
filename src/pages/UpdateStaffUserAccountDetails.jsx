import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import { Button, makeStyles, Grid, Typography } from '@material-ui/core'
import { Send as SendIcon } from '@material-ui/icons';
import * as Yup from 'yup';

import HRMSTextField from '../utilities/customFormControls/HRMSTextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import StaffUserService from '../services/staffUserService';

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
        width: "3%",
        height: "3%",
        marginRight: "1rem",
        marginBottom: "0.2rem",
    },
    inImageAlign: {
        width: "150%",
        height: "150%",
        marginRight: "auto",
        marginLeft: "5.15rem",
        marginTop: "-4rem"
    },
    customGrid: {
        maxWidth: "30rem",
        justifyContent: "center",
        marginLeft: "2.15rem"
    }
});

export default function UpdateStaffUserAccountDetails() {

    const classes = useStyles();

    const initialValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    let staffUserService = new StaffUserService()

    useEffect(() => {
        staffUserService.getById(28).then(result => setValues(result.data.data))

        document.getElementById("rootdiv").style.height = "725px";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setValues = (values) => {
        initialValues.email = values.lastName
        initialValues.firstName = values.firstName
        initialValues.lastName = values.lastName
        initialValues.password = values.lastName
    }

    const submitForm = (staffUser) => {
        staffUser.id = 28
        staffUserService.update(staffUser)
    }

    const validate = Yup.object({
        email: Yup.string().required("Email is required"),
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        password: Yup.string().required("Password is required"),
    })

    return (<Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validate}
        onSubmit={submitForm}
    >

        {(formik) => {
            const {
                handleSubmit,
            } = formik;

            return (
                <div className={classes.contentCenter}>
                    <Grid container className={classes.customFirstGrid}>
                        <Grid item xs={7} className={classes.customGrid}>
                            <br />

                            <Typography variant="h4" className={classes.customizeTitle}><FontAwesomeIcon className={classes.customizeIcon} icon={faUserEdit} />Update Account Details</Typography>

                            <br />
                            <br />

                            <Form onSubmit={handleSubmit}>

                                <HRMSTextField className={classes.advertDescriptionCustomization} id="email" name="email" label="Email *" placeholder="Looking for..." />
                                <br />
                                <br />

                                <HRMSTextField className={classes.advertDescriptionCustomization} id="firstName" name="firstName" label="First Name *" placeholder="First name" />
                                <br />
                                <br />

                                <HRMSTextField className={classes.advertDescriptionCustomization} id="lastName" name="lastName" label="Last Name *" placeholder="Last name" />

                                <br />
                                <br />

                                <HRMSTextField className={classes.advertDescriptionCustomization} id="password" name="password" label="Password *" placeholder="Password" />


                                <br />
                                <br />
                                <br />

                                <Button
                                    variant="contained"
                                    startIcon={<SendIcon />}
                                    type="submit"
                                    className={classes.submitCustomization}
                                >
                                    SUBMIT
                                </Button>
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
                                <img className={classes.inImageAlign} src={process.env.PUBLIC_URL + '/assets/update-account.svg'} alt="job-ad" />
                            </div>
                        </Grid>
                    </Grid>
                </div >
            );
        }}
    </Formik>
    );

}