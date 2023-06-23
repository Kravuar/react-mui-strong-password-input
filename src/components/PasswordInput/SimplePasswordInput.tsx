import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import { SimplePasswordInputProps } from "./PasswordInput.types";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SimplePasswordInput({ value, onChange, sx, variant }: SimplePasswordInputProps) {
    const [hidden, setHidden] = useState(false);

    const hiddenHandler = () => setHidden(!hidden);
    
    return (
        <TextField
            value={value}
            onChange={onChange}
            sx={sx}
            variant={variant}
            type={hidden ? "password" : "text"}
            InputProps={{
                endAdornment: <IconButton onClick={hiddenHandler}>
                    {hidden
                        ? <Visibility />
                        : <VisibilityOff />
                    }
                </IconButton>
            }}
        />
    );
}