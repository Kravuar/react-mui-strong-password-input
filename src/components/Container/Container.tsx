import React from "react";
import { ContainerBaseProps, ContainerDefaultComponentProps, ContainerProps, DefaultContainerProps } from "./Container.types";
import ContainerDefault from "./ContainerDefault";

export function Container<ContainerPropsType extends ContainerBaseProps>(
    props: ContainerProps<ContainerPropsType>
): React.ReactElement;

export function Container({
    ContainerComponent = ContainerDefault,
    ...other
}: DefaultContainerProps): React.ReactElement;

export function Container<ContainerPropsType extends ContainerBaseProps>(
    props: DefaultContainerProps | ContainerProps<ContainerPropsType>
): React.ReactElement {

    // Coolest TS feature
    const { ContainerComponent = ContainerDefault, containerComponentProps } = props;
    const FinalComponent = ContainerComponent as React.ComponentType<ContainerPropsType | ContainerDefaultComponentProps>;

    return (
        <FinalComponent {...containerComponentProps}/>
    );
}