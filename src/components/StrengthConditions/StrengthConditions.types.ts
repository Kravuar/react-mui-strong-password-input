export interface ConditionProp {
    label: string,
    satisfied: boolean
}

export interface SimpleConditionProp extends ConditionProp {
}

export interface DefaultStrengthConditionProps {
    conditions: SimpleConditionProp[],
    ConditionComponent?: React.ComponentType<SimpleConditionProp>,
    conditionComponentProps?: any,
    ContainerComponent?: React.ComponentType<{children?: React.ReactNode}>,
    containerComponentProps?: any
}

export interface StrengthConditionProps<ConditionPropType extends ConditionProp> {
    conditions: ConditionPropType[],
    ConditionComponent: React.ComponentType<ConditionPropType>,
    conditionComponentProps?: any,
    ContainerComponent?: React.ComponentType<{children?: React.ReactNode}>,
    containerComponentProps?: any
}
