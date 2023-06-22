export interface BaseBarProps {
    currentLevel: number,
    levels: number
}

export interface LinearBarProps extends BaseBarProps {
    barColor: string,
    background?: string,
    label?: string | React.ReactElement,
}

export interface DefaultStrengthBarProps {
    BarComponent?: React.ComponentType<LinearBarProps>,
    barComponentProps: LinearBarProps
}

export interface StrengthBarProps<BarPropsType extends BaseBarProps> {
    BarComponent: React.ComponentType<BarPropsType>,
    barComponentProps: BarPropsType
}