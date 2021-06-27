import { useField } from 'formik'
import React from 'react'
import { TextField } from '@material-ui/core'


export default function HRMSTextField({...props}) {

    const [field, meta] = useField(props)

    return (
        <TextField {...field} {...props} error={meta.touched && !!meta.error} helperText={meta.touched ? meta.error : null} />
    )
}
