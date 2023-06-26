import React, { useState } from "react";
import { IconButton, LinearProgress, Stack } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { StrengthBar } from '../components/StrengthBar/StrengthBar';
import { StrengthBarBaseProps } from "../components/StrengthBar/StrengthBar.types";

export default { title: "StrengthBar", component: StrengthBar };

export function DefaultLinearBar() {
    const colors: Array<string> = ["grey", "red", "orange", "blue", "green"];
    const [level, setLevel] = useState(0);

    const handleClick = (diff: number) => {
        let newLevel = level + diff;
        if (newLevel >= colors.length)
            newLevel = colors.length - 1;
        else if (newLevel < 0)
            newLevel = 0;

        setLevel(newLevel);
    }
    return (
        <Stack>
            <Stack direction="row" justifyContent="center">
                <IconButton onClick={() => handleClick(-1)}>
                    <ArrowBack />
                </IconButton>
                <IconButton onClick={() => handleClick(1)}>
                    <ArrowForward />
                </IconButton>
            </Stack>
            <StrengthBar barComponentProps={{
                barColor: colors[level],
                levels: colors.length - 1,
                currentLevel: level
            }}
            />
        </Stack>
    );
};

export function MUIStrengthBar() {
    interface LinearBarProps extends StrengthBarBaseProps {
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

    return (
        <StrengthBar
            BarComponent={LinearBar}
            barComponentProps={{
                levels: 4,
                currentLevel: 2,
                barColor: "green"
            }} />
    );
}
