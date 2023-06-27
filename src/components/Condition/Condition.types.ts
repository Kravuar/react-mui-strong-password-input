export interface ConditionBaseProps {
    name: string,
    satisfied: boolean
}

export interface ConditionDefaultComponentProps extends ConditionBaseProps {
    label: string | React.ReactElement
}

export interface ConditionsProps<ConditionComponentProps extends ConditionBaseProps, ConditionContainerComponentProps> {
    conditions: ConditionComponentProps[],
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<React.PropsWithChildren<ConditionContainerComponentProps>>,
    conditionContainerComponentProps?: ConditionContainerComponentProps,
    conditionProps?: Partial<Omit<ConditionComponentProps, keyof ConditionBaseProps>>
}