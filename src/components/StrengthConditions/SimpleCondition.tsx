import React from "react";
import { SimpleConditionProp } from "./StrengthConditions.types";
import { Stack, Typography } from "@mui/material";
import { Circle, Done } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

export default function SimpleCondition({ label, satisfied }: SimpleConditionProp) {

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