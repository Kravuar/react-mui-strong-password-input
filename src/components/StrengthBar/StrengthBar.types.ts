export interface StrengthBarBaseProps {
    currentLevel: number,
    levels: number
}

export interface StrengthBarDefaultComponentProps extends StrengthBarBaseProps {
    barColor: string,
    background?: string
}

export interface DefaultStrengthBarProps {
    BarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    barComponentProps: StrengthBarDefaultComponentProps
}

export interface StrengthBarProps<BarPropsType extends StrengthBarBaseProps> {
    BarComponent: React.ComponentType<BarPropsType>,
    barComponentProps: BarPropsType
}