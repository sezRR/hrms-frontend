import { makeStyles, Paper, Avatar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ResumeService from '../services/resumeService'

const useStyles = makeStyles({
    resumeDiv: {
        marginTop: "2rem",
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
    },

    resumeHeader: {
        backgroundColor: "#15278B",
        height: 172,
        paddingTop: "1px",
        marginTop: "-1px",
    },

    resumeSubHeader: {
        height: 192,
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        paddingTop: "1px",
        marginTop: "-1px",
        backgroundColor: "#000E5C"
    },

    resumeContent: {
        height: "100%",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap"
    },

    "avatar": {
        width: "134px",
        height: "134px",
        marginTop: "6.5rem",
        marginLeft: "3.25rem"
        // borderRadius: "90px",
        // border: "1px solid",
    },

    resumeSubHeaderContent: {
        marginTop: "6.25rem",
        marginLeft: "3.5rem",
        fontWeight: "bold",
        fontSize: "22px",
        textTransform: "uppercase"
    },

    resumeContentHeader: {
        fontSize: "28px",
        marginLeft: "3.5rem",
        paddingTop: "1px",
        marginTop: "3rem",
        color: "white",
        textTransform: "uppercase"
    },

    noContentText: {
        fontWeight: "bold",
        marginLeft: "3.5rem",
        marginTop: ".5rem",
    },

    contentSpaces: {
        marginBottom: "3rem"
    }
})

export default function CandidateUserResume() {

    const classes = useStyles()

    const [resume, setResume] = useState()

    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getByCandidateId(1).then(result => setResume(result.data.data)) // TO DO: Local Storage
        document.getElementById("rootdiv").style.height = "100%"
    }, [])

    { console.log(resume) }
    return (
        <div className={classes.resumeDiv}>
            <div className={classes.resumeHeader}>
                <Avatar className={classes.avatar} alt="pp" src={resume?.photo} />
            </div>
            <Paper elevation={5} className={classes.resumeSubHeader}>
                <div className={classes.resumeSubHeaderContent}>
                    <p>{resume?.candidate.firstName} {resume?.candidate.lastName}</p>
                </div>
            </Paper>
            <Paper className={classes.resumeContent}>
                <div className={classes.contentSpaces}>
                    <Typography variant="h5" className={classes.resumeContentHeader}>
                        Experiences
                    </Typography>
                    {
                        resume?.jobExperiences.map((jobExperience) => (
                            <React.Fragment key={jobExperience.id}>
                                <div key={jobExperience.id}>
                                    <Typography className={classes.noContentText} color="textSecondary">
                                        Company Name: {jobExperience.companyName}
                                    </Typography>

                                    <Typography className={classes.noContentText} color="textSecondary">
                                        Started Date: {jobExperience.startedDate}
                                    </Typography>

                                    <Typography className={classes.noContentText} color="textSecondary">
                                        Ended Date: {jobExperience.endedDate}
                                    </Typography>
                                </div>
                                <br />
                            </React.Fragment>
                        ))
                    }
                </div>

                <div className={classes.contentSpaces}>
                    <Typography variant="h5" className={classes.resumeContentHeader}>
                        Education
                    </Typography>
                    {
                        resume?.education.map((education) => (
                            <React.Fragment key={education.id}>
                                <div key={education.id}>
                                    <Typography className={classes.noContentText} color="textSecondary">
                                        School Name: {education.schoolName}
                                    </Typography>

                                    <Typography className={classes.noContentText} color="textSecondary">
                                        School Department: {education.schoolDepartment}
                                    </Typography>

                                    <Typography className={classes.noContentText} color="textSecondary">
                                        Graduate: {education.graduate.description}
                                    </Typography>

                                    <Typography className={classes.noContentText} color="textSecondary">
                                        Started Date: {education.startedDate}
                                    </Typography>

                                    <Typography className={classes.noContentText} color="textSecondary">
                                        Ended Date: {education.endedDate}
                                    </Typography>
                                </div>
                                <br />
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className={classes.contentSpaces}>
                    <Typography variant="h5" className={classes.resumeContentHeader}>
                        Skills
                    </Typography>
                    {
                        resume?.technologies.map((technology) => (
                            <React.Fragment key={technology.id}>
                                <div key={technology.id}>
                                    <Typography className={classes.noContentText} color="textSecondary">
                                        Technology Name: {technology.description}
                                    </Typography>
                                </div>
                                <br />
                            </React.Fragment>
                        ))
                    }
                </div>
            </Paper>
        </div>
    )
}
