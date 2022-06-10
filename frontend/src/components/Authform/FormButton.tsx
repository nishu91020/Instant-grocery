import React from 'react';
import { Button } from '@mui/material';
const FormButton = (props: { ButtonName: String }) => {
    return (
        <Button fullWidth variant="contained" size="small">
            {props.ButtonName}
        </Button>
    );
};

export default FormButton;
