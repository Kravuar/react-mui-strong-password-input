export interface BaseConditionProp {
    satisfied: boolean
}

export interface SimpleConditionProp extends BaseConditionProp {
    label: string | React.ReactElement
}

export type ConditionDefaultComponentProps = SimpleConditionProp;

interface StaticConditionProps {
    ContainerComponent?: React.ComponentType<{children?: React.ReactNode}>
}

export interface DefaultConditionProps extends StaticConditionProps {
    conditions: ConditionDefaultComponentProps[],
    ConditionComponent?: React.ComponentType<ConditionDefaultComponentProps>
}

export interface StrengthConditionProps<ConditionPropType extends BaseConditionProp> extends StaticConditionProps {
    conditions: ConditionPropType[],
    ConditionComponent: React.ComponentType<ConditionPropType>
}