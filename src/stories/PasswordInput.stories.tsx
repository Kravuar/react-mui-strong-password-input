import React, { useState } from "react";
import { PasswordInput } from '../components/PasswordInput/PasswordInput';
import { IconButton, SxProps, TextField, TextFieldVariants } from "@mui/material";
import { Theme } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { PasswordInputBaseProps } from "../components/PasswordInput/PasswordInput.types";

export default { title: "PasswordInput", component: PasswordInput };

export function DefaultPasswordInput() {
    const [password, setPassword] = useState("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    }
    return (
        <PasswordInput inputComponentProps={{
            value: password,
            onChange: changeHandler
        }}
        />
    );
};


export function MUIPasswordInput() {
    interface SimplePasswordInputProps extends PasswordInputBaseProps {
        sx?: SxProps<Theme>,
        variant?: TextFieldVariants,
    }

    function SimplePasswordInput({ value, onChange, sx, variant }: SimplePasswordInputProps) {
        const [hidden, setHidden] = useState(true);

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

    const [password, setPassword] = useState("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    }
    return (
        <PasswordInput
            InputComponent={SimplePasswordInput}
            inputComponentProps={{
                value: password,
                onChange: changeHandler,
                sx: {
                    background: "red"
                },
                variant: "outlined"
            }}
        />
    );
}