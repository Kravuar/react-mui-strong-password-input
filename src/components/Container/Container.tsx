import React from "react";
import { ContainerDefaultComponentProps } from "./Container.types";

export default function ContainerDefault({ children, spacing = 1, direction = "column" }: React.PropsWithChildren<ContainerDefaultComponentProps>) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: direction === 'column' ? 'column' : 'row',
            gap: `${spacing}em`,
        }}>
            {children}
        </div>
    );
};