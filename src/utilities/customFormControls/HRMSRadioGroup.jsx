import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    radioGroup: {
        marginTop: ".75rem",
    },

    label: {
        fontSize: "18px",
        fontWeight: "bold"
    }
}));

export default function HRMSRadioGroup({...props}) {
    const classes = useStyles();

    return (
        <div>
            <FormLabel className={classes.label}>{props.formlabel}</FormLabel>
            <RadioGroup {...props}>
                {
                    props.data.map((data) => (
                        <FormControlLabel name={props.name} key={data.id} value={data.id} control={<Radio />} label={data[props.datavalueforlabel]} />
                    ))
                }
            </RadioGroup>
        </div>
    )
}
