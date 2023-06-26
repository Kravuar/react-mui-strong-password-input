export interface ContainerBaseProps {
    children?: React.ReactNode
}

export interface ContainerDefaultComponentProps extends ContainerBaseProps {
    spacing: number,
    direction: 'row' | 'column',
}

export interface DefaultContainerProps {
    ContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    containerComponentProps: ContainerDefaultComponentProps
}

export interface ContainerProps<ContainerPropsType extends ContainerBaseProps> {
    ContainerComponent: React.ComponentType<ContainerPropsType>,
    containerComponentProps: ContainerPropsType
}