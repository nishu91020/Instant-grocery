import React from 'react';
import { TextField } from '@mui/material';

const InputField = (props: { label: String; type: React.HTMLInputTypeAttribute }) => {
    return <TextField fullWidth margin="normal" size="small" label={props.label} variant="outlined" type={props.type} />;
};

export default InputField;
