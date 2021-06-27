import React from 'react'
import { Box, Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    "marginForRightButtons": {
        "marginLeft": ".75rem",
    },

    "marginForIcons": {
        "marginRight": ".5rem",
    },
}));

export default function SignedOut({signIn}) {

    const classes = useStyles() 

    return (
        <div>
            <Button color="primary" onClick={signIn}><Box component="span" className={classes.marginForIcons}><FontAwesomeIcon icon={faSignInAlt} /></Box>Sign In</Button>
            <Box component="span" className={classes.marginForRightButtons}></Box>
            <Button color="primary"><Box component="span" className={classes.marginForIcons}><FontAwesomeIcon icon={faUserPlus} /></Box>Sign Up</Button>
        </div>
    )
}
