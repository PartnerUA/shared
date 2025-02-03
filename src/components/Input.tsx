import React from "react";
import { TextField } from "@mui/material";

interface InputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
    return <TextField label={label} value={value} onChange={onChange} fullWidth />;
};

export default Input;
