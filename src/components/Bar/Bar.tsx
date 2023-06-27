import React from "react";
import { BarDefaultComponentProps } from "./Bar.types";

export default function BarDefault({ background, barColor, levels, currentLevel }: BarDefaultComponentProps) {
    const progress = ((currentLevel / levels) * 100).toFixed(2);

    return (
        <div
            style={{
                width: '100%',
                height: '0.3em',
                backgroundColor: background,
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    width: `${progress}%`,
                    height: '100%',
                    backgroundColor: barColor,
                }}
            />
        </div>
    );
}