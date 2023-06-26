import React from "react";
import { StrengthBarDefaultComponentProps } from "./StrengthBar.types";

export default function StrengthBarDefault({ background, barColor, levels, currentLevel }: StrengthBarDefaultComponentProps) {
    const progress = ((currentLevel / levels) * 100).toFixed(2);

    return (
        <div
            style={{
                width: '100%',
                height: '20px',
                backgroundColor: background,
                borderRadius: '4px',
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