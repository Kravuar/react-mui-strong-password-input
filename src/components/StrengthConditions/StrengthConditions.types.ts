export interface BaseConditionProp {
    satisfied: boolean
}

export interface SimpleConditionProp extends BaseConditionProp {
    label: string | React.ReactElement
}

interface StaticConditionProps {
    conditions: SimpleConditionProp[],
    ContainerComponent?: React.ComponentType<{children?: React.ReactNode}>
}

export interface DefaultConditionProps extends StaticConditionProps {
    ConditionComponent?: React.ComponentType<SimpleConditionProp>
}

export interface StrengthConditionProps<ConditionPropType extends BaseConditionProp> extends StaticConditionProps {
    ConditionComponent: React.ComponentType<ConditionPropType>
}