import { ContainerBaseProps, ContainerDefaultComponentProps } from "../Container/Container.types"

export interface StrengthConditionBaseProps {
    name: string,
    satisfied: boolean
}

export interface StrengthConditionDefaultComponentProps extends StrengthConditionBaseProps {
    label: string | React.ReactElement
}

export interface StrengthConditionsProps
<
ConditionPropType extends StrengthConditionBaseProps,
ContainerPropType extends ContainerBaseProps
> {
    conditions: ConditionPropType[],
    ConditionComponent: React.ComponentType<ConditionPropType>,
    ContainerComponent: React.ComponentType<ContainerPropType>,
    containerComponentProps?: Omit<ContainerPropType, keyof ContainerBaseProps>
}

export interface StrengthConditionsPropsWithDefaultContainer<ConditionPropType extends StrengthConditionBaseProps> {
    conditions: ConditionPropType[],
    ConditionComponent: React.ComponentType<ConditionPropType>,
    ContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    containerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
}

export interface StrengthConditionsPropsWithDefaultCondition<ContainerPropType extends ContainerBaseProps> {
    conditions: StrengthConditionDefaultComponentProps[],
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ContainerComponent: React.ComponentType<ContainerPropType>,
    containerComponentProps?: Omit<ContainerPropType, keyof ContainerBaseProps>
}

export interface DefaultStrengthConditionsProps {
    conditions: StrengthConditionDefaultComponentProps[],
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    containerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
}