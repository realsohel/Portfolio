import React from 'react'
import 'animate.css';
import { Alert  } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

const Alertcon = (props) => {
    
    return (
        <>
            {props.alert.type==="success" ? <Alert className='mt-1 animate__animated  animate__backInRight' icon={<CheckIcon fontSize="inherit" />} severity="success">
                <strong>Success:</strong> {`${props.alert.msg}`}
            </Alert> : <Alert className='mt-1 animate__animated  animate__backInRight' icon={<ErrorIcon fontSize="inherit" />} severity="error">
            <strong>Error:</strong> {`${props.alert.msg}`}
            </Alert>
            }
        </>
    ) 
}

export default Alertcon
