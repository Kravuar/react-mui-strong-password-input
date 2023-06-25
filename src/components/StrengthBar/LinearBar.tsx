import React from "react";
import { LinearProgress, Stack, Typography } from "@mui/material";
import { LinearBarProps } from "./StrengthBar.types";

export default function LinearBar({ background, barColor, levels, currentLevel }: LinearBarProps) {
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