export interface BaseConditionProp {
    satisfied: boolean
}

export interface SimpleConditionProp extends BaseConditionProp {
    label: string | React.ReactElement
}

interface StaticConditionProps {
    ContainerComponent?: React.ComponentType<{children?: React.ReactNode}>
}

export interface DefaultConditionProps extends StaticConditionProps {
    conditions: SimpleConditionProp[],
    ConditionComponent?: React.ComponentType<SimpleConditionProp>
}

export interface StrengthConditionProps<ConditionPropType extends BaseConditionProp> extends StaticConditionProps {
    conditions: ConditionPropType[],
    ConditionComponent: React.ComponentType<ConditionPropType>
}