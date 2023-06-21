export interface BarProps {
    currentLevel: number,
    levels: number
}

export interface LinearBarProps extends BarProps {
    background?: string,
    barColor: string
}

export interface DefaultStrengthBarProps {
    BarComponent?: React.ComponentType<LinearBarProps>,
    barComponentProps: LinearBarProps
}

export interface StrengthBarProps<BarPropsType extends BarProps> {
    BarComponent: React.ComponentType<BarPropsType>,
    barComponentProps: BarPropsType
}