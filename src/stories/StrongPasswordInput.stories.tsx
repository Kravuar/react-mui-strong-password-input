import React, { useState } from "react";
import { StrongPasswordInput } from '../components/StrongPasswordInput/StrongPasswordInput';
import InputDefault from '../components/Input/Input';
import BarDefault from '../components/Bar/Bar';
import ConditionDefault from '../components/Condition/Condition';
import ContainerDefault from '../components/Container/Container';
import { InputBaseProps } from "../components/Input/Input.types";
import { Theme } from '@emotion/react';
import { IconButton, LinearProgress, Stack, SxProps, TextField, TextFieldVariants, Typography } from '@mui/material';
import { Circle, Done, Visibility, VisibilityOff } from '@mui/icons-material';
import { BarBaseProps } from "../components/Bar/Bar.types";
import { green, grey, red } from "@mui/material/colors";
import { ConditionBaseProps } from "../components/Condition/Condition.types";

export default { title: "StrongPasswordInput", component: StrongPasswordInput};

export function DefaultStrongPassword() {

    return (
        <StrongPasswordInput 
            InputComponent={InputDefault}
            BarComponent={BarDefault}
            ConditionComponent={ConditionDefault}
            ConditionContainerComponent={ContainerDefault}
            StrongPasswordContainerComponent={ContainerDefault}
            strongPasswordContainerComponentProps={{
                spacing: 1
            }}
            barComponentProps={{
                background: "#f0f0f0"
            }}
            securityLevels={[
                {
                    name: "invalid",
                    conditionsRequired: 0,
                    barComponentProps: {
                        barColor: "grey"
                    }
                },
                {
                    name: "tooWeak",
                    conditionsRequired: 1,
                    barComponentProps: {
                        barColor: "red",
                    }
                },
                {
                    name: "weak",
                    conditionsRequired: 2,
                    barComponentProps: {
                        barColor: "orange",
                    }
                },
                {
                    name: "good",
                    conditionsRequired: 3,
                    barComponentProps: {
                        barColor: "blue",
                    }
                },
                {
                    name: "strong",
                    conditionsRequired: 4,
                    barComponentProps: {
                        barColor: "green",
                    }
                }
            ]}
            conditions={[
                {
                    name: "length5",
                    validator: (password: string) => password.length >= 5,
                    conditionComponentProps: {
                        label: "Minimum length of 5 characters."
                    }
                },
                {
                    name: "1number",
                    validator: (password: string) => /.*[0-9].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 number."
                    }
                },
                {
                    name: "1uppercase",
                    validator: (password: string) => /.*[A-Z].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 uppercase letter."
                    }
                },
                {
                    name: "1lowercase",
                    validator: (password: string) => /.*[a-z].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 lowercase letter."
                    }
                }
            ]}
        />
    );
};

export function MUIStrongPassword() {

    return (
        <StrongPasswordInput 
            InputComponent={SimplePasswordInput}
            BarComponent={LinearBar}
            ConditionComponent={SimpleCondition}
            ConditionContainerComponent={Stack}
            StrongPasswordContainerComponent={Stack}
            conditionContainerComponentProps={{
                spacing: 2,
                sx: {
                    padding: 2,
                    background: grey[200],
                    borderRadius: 4
                }
            }}
            strongPasswordContainerComponentProps={{
                spacing: 2
            }}
            securityLevels={[
                {
                    name: "invalid",
                    conditionsRequired: 0,
                    barComponentProps: {
                        barColor: "grey"
                    }
                },
                {
                    name: "tooWeak",
                    conditionsRequired: 1,
                    barComponentProps: {
                        barColor: "red"
                    }
                },
                {
                    name: "weak",
                    conditionsRequired: 2,
                    barComponentProps: {
                        barColor: "orange"
                    }
                },
                {
                    name: "good",
                    conditionsRequired: 3,
                    barComponentProps: {
                        barColor: "blue"
                    }
                },
                {
                    name: "strong",
                    conditionsRequired: 4,
                    barComponentProps: {
                        barColor: "green"
                    }
                }
            ]}
            conditions={[
                {
                    name: "length5",
                    validator: (password: string) => password.length >= 5,
                    conditionComponentProps: {
                        label: "Minimum length of 5 characters."
                    }
                },
                {
                    name: "1number",
                    validator: (password: string) => /.*[0-9].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 number."
                    }
                },
                {
                    name: "1uppercase",
                    validator: (password: string) => /.*[A-Z].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 uppercase letter."
                    }
                },
                {
                    name: "1lowercase",
                    validator: (password: string) => /.*[a-z].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 lowercase letter."
                    }
                }
            ]}
        />
    );
}

interface SimplePasswordInputProps extends InputBaseProps {
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

interface LinearBarProps extends BarBaseProps {
    barColor: string,
    background?: string
}

function LinearBar({ background, barColor, levels, currentLevel }: LinearBarProps) {
    const value = (currentLevel / levels) * 100;

    return (
        <Stack direction="row">
            <LinearProgress
                value={value}
                variant="determinate"
                sx={{
                    width: "100%",
                    background: background,
                    "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: barColor,
                    }
                }}
            />
        </Stack>
    );
}

interface SimpleConditionProp extends ConditionBaseProps {
    label: string | React.ReactElement
}

function SimpleCondition({ label, satisfied }: SimpleConditionProp) {
    return (
        <Stack direction="row" spacing={1}>
            {satisfied
                ? <Done fontSize="small" sx={{ color: green[300] }} />
                : <Circle fontSize="small" sx={{ color: red[300] }} />
            }
            {typeof label === "string"
                ? <Typography>{label}</Typography>
                : label
            }
        </Stack>
    );
}