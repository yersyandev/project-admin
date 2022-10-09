import React, {FC} from 'react';
import TextField from "@mui/material/TextField";
import {useFormContext} from "react-hook-form";

interface FormFieldProps {
    name: string,
    label: string,
    type?: string,
    autoFocus?: boolean
}

const FormField: FC<FormFieldProps> = ({name, ...props}) => {

    const {register, formState: { errors, touchedFields }} = useFormContext()

    return (
        <TextField
            {...props}
            {...register(name)}
            margin="normal"
            autoComplete="given-name"
            required
            fullWidth
            id={name}
            error={touchedFields[name] && !!errors[name]}
            helperText={touchedFields[name] && errors[name]?.message}
        />
    );
};

export default FormField