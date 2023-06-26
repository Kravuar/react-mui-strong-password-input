import React from "react";
import { ContainerDefaultComponentProps } from "./Container.types";

export default function ContainerDefault({ children, spacing, direction }: ContainerDefaultComponentProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: direction === 'column' ? 'column' : 'row',
            gap: `${spacing}px`,
        }}>
            {children}
        </div>
    );
};