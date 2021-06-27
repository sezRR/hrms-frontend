import { useField } from 'formik'
import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import HRMSTextField from './HRMSTextField';

export default function HRMSAutoComplete({ ...props }) {
    const [field] = useField(props)
    
    return (

        <Autocomplete
            {...props}
            renderInput={(params) => (
                <HRMSTextField {...field} {...params} label={props.label} margin="normal" placeholder={props.placeholder} />
            )}
        />
    )
}
