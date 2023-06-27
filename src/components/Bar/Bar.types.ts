export interface BarBaseProps {
    currentLevel: number,
    levels: number
}

export interface BarDefaultComponentProps extends BarBaseProps {
    barColor: string,
    background?: string
}