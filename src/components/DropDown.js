import { MenuItem, TextField } from "@material-ui/core";
import React from "react";

const DropDown = ({
    label,
    options,
    onChange,
    value,
    disabled = false,
    fullWidth = false,
}) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };
    return (
        <>
            <TextField
                value={value || "None"}
                label={label}
                onChange={handleChange}
                disabled={disabled}
                variant="outlined"
                fullWidth={fullWidth}
                select
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                        id={option.label}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );
};

export default DropDown;
