# react-strong-password-input

## Base Interfaces
This are base props interfaces, that every implementation (correspondingly) receives
### Bar
| Property | Type | Default | Description |
|:---|:---|:---|:---|
|currentLevel|number|undefined|current level for bar to be filled|
|levels|number|undefined|amount of levels|

### Condition
| Property | Type | Default | Description |
|:---|:---|:---|:---|
|name|string|undefined|name of the condition (not label, label isn't neccesary in base interface, but as example it's present in default implementation)|
|satisfied|boolean|undefined|simple flag|

### Container
Only children are required (optional, actually) a for the container

### Input
| Property | Type | Default | Description |
|:---|:---|:---|:---|
|value|string|undefined|value prop as in controlled input|
|onChange|React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>|undefined|onChange event handler|

## StrongPasswordInput Interfaces

### Condition
| Property | Type | Default | Description |
|:---|:---|:---|:---|
|name|string|undefined|name prop|
|validator|string => boolean|undefined|validator function, receives password, returns flag|
|conditionComponentProps|Omit<ConditionComponentProp, keyof ConditionBaseProps>|undefined|non-base props from the current ConditionComponentProp, that will be passed along with base props for this specific condition|

### SecurityLevel
| Property | Type | Default | Description |
|:---|:---|:---|:---|
|name|string|undefined|name prop|
|conditionsRequire|number|undefined|how many conditions are needed for this security level|
|barComponentProps|Omit<BarComponentProps, keyof BarBaseProps>|undefined|non-base props from the current BarComponentProps, that will be passed along with base props for this specific security level|

### StrongPasswordChangeEvent
| Property | Type | Default | Description |
|:---|:---|:---|:---|
|securityLevel|string|undefined|name of current security level|
|satisfiedConditions|string[]|undefined|array of names of satisfied conditions|

Main interface of the strong password input
### StrongPasswordInput
| Property | Type | Default | Description |
|:---|:---|:---|:---|
|showStrengthBar?|boolean,|true|flag to render strength bar|
|showConditions?|boolean,|true|flag to render conditions|
|onChange?|(event: StrongPasswordChangeEvent) => void|undefined|onChange handler with previously defined change even|
|securityLevels|SecurityLevel<BarComponentProps>[]|undefined|possible security levels (like invalid, weak, normal, strong...)|
|conditions|Condition<ConditionComponentProps>[]|undefined|conditions that to be checked upon password change|
|InputComponent|React.ComponentType<InputComponentProps>|undefined|input component to be rendered within compose input|
|BarComponent|React.ComponentType<BarComponentProps>|undefined|password strength bar component to be rendered within compose input|
|ConditionComponent|React.ComponentType<ConditionComponentProps>|undefined|condition component to be rendered within conditions container component|
|ConditionContainerComponent|React.ComponentType<React.PropsWithChildren<ConditionContainerComponentProps>>|undefined|container component that will be used for conditions|
|StrongPasswordContainerComponent|React.ComponentType<React.PropsWithChildren<StrongPasswordContainerComponentProps>>|undefined|main container of this compose input|
|conditionContainerComponentProps?|ConditionContainerComponentProps|undefined|additional props for conditions container|
|strongPasswordContainerComponentProps?|StrongPasswordContainerComponentProps|undefined|additional props for main container|
|inputComponentProps?|Partial<Omit<InputComponentProps, keyof InputBaseProps>>|undefined|additional props for input component|
|barComponentProps?|Partial<Omit<BarComponentProps, keyof BarBaseProps>>|undefined|additional props for strength bar component|
|conditionComponentProps?|Partial<Omit<ConditionComponentProps, keyof ConditionBaseProps>|undefined|additional props for conditions component|


## Usage
### Example with default components:
```ts
import React from "react";
import { StrongPasswordInput } from "../components";
import BarDefault from "../components/Bar/Bar";
import ConditionDefault from "../components/Condition/Condition";
import ContainerDefault from "../components/Container/Container";
import InputDefault from "../components/Input/Input";

function Default() {

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
}
```
Result:
![default](https://github.com/Kravuar/react-strong-password-input/assets/20594053/dacde7b7-81da-45cc-ac48-08e99afe8f5d)
### Example with MUI
```ts
import React, { useState } from "react";
import { StrongPasswordInput } from "../components";
import { InputBaseProps } from "../components/Input/Input.types";
import { Theme } from '@emotion/react';
import { IconButton, LinearProgress, Stack, SxProps, TextField, TextFieldVariants, Typography } from '@mui/material';
import { Circle, Done, Visibility, VisibilityOff } from '@mui/icons-material';
import { BarBaseProps } from "../components/Bar/Bar.types";
import { ConditionBaseProps } from "../components/Condition/Condition.types";
import { green, grey, red } from "@mui/material/colors";

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

function MUI() {

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
```
Result:
![MUI](https://github.com/Kravuar/react-strong-password-input/assets/20594053/53fad0fa-62ef-4894-b40b-35373ead0acd)
