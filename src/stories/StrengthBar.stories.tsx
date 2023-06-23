import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { StrengthBar } from '../components/StrengthBar/StrengthBar';
import { BaseBarProps } from "../components/StrengthBar/StrengthBar.types";

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

export function CustomStrengthBar() {
    interface TestProps extends BaseBarProps {
        x: number
    }

    function TestBar({ x, currentLevel, levels }: TestProps) {
        return (
            <div>{x} {currentLevel} {levels}</div>
        );
    }
    return (
        <StrengthBar<TestProps> BarComponent={TestBar} barComponentProps={{
            levels: 999,
            currentLevel: 999,
            x: 5
        }} />
    );
}