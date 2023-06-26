import React from "react";
import { StrengthConditions } from '../components/StrengthConditions/StrengthConditions';
import { StrengthConditionBaseProps } from "../components/StrengthConditions/StrengthConditions.types";
import { Stack, Typography } from "@mui/material";
import { Circle, Done } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

export default { title: "StrengthConditions", component: StrengthConditions };

export function DefaultStrengthConditions() {

    return (
        <StrengthConditions 
            conditions={[
                {
                    name: "first",
                    label: "first",
                    satisfied: false,
                },
                {
                    name: "second",
                    label: "second",
                    satisfied: false,
                },
                {
                    name: "third",
                    label: "third",
                    satisfied: true,
                },
                {
                    name: "fourth",
                    label: "fourth",
                    satisfied: false,
                },
            ]}
        />
    );
};

export function MUIConditions() {
    interface SimpleConditionProp extends StrengthConditionBaseProps {
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
    return (
        <StrengthConditions
            ConditionComponent={SimpleCondition}
            ContainerComponent={Stack}
            containerComponentProps={{
                spacing: 3,
                direction: "column",
                sx: {
                    background: red[100]
                }
            }}
            conditions={[
                {
                    name: "first",
                    label: "first",
                    satisfied: false,
                },
                {
                    name: "second",
                    label: "second",
                    satisfied: false,
                },
                {
                    name: "third",
                    label: "third",
                    satisfied: true,
                },
                {
                    name: "fourth",
                    label: "fourth",
                    satisfied: false,
                }
            ]}
        />
    );
}