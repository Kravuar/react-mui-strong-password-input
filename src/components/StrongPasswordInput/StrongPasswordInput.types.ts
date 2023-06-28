import { ConditionBaseProps } from "../Condition/Condition.types";
import { BarBaseProps } from "../Bar/Bar.types";
import { InputBaseProps } from "../Input/Input.types";

export interface Condition<ConditionComponentProp extends ConditionBaseProps> {
    name: string,
    validator: (password: string) => boolean,
    conditionComponentProps: Omit<ConditionComponentProp, keyof ConditionBaseProps>
}

export interface SecurityLevel<BarComponentProps extends BarBaseProps> {
    name: string,
    conditionsRequired: number,
    barComponentProps: Omit<BarComponentProps, keyof BarBaseProps>
}

export interface StrongPasswordChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {
    securityLevel: string,
    satisfiedConditions: string[]
}

interface StaticStrongPasswordProps {
    value?: string,
    showStrengthBar?: boolean,
    showConditions?: boolean,
    onChange?: (event: StrongPasswordChangeEvent) => void
}

export interface StrongPasswordInputProps
<InputComponentProps extends InputBaseProps,
BarComponentProps extends BarBaseProps,
ConditionComponentProps extends ConditionBaseProps,
ConditionContainerComponentProps,
StrongPasswordContainerComponentProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    InputComponent: React.ComponentType<InputComponentProps>,
    BarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<React.PropsWithChildren<ConditionContainerComponentProps>>,
    StrongPasswordContainerComponent: React.ComponentType<React.PropsWithChildren<StrongPasswordContainerComponentProps>>,
    conditionContainerComponentProps?: ConditionContainerComponentProps,
    strongPasswordContainerComponentProps?: StrongPasswordContainerComponentProps,
    inputComponentProps?: Partial<Omit<InputComponentProps, keyof InputBaseProps>>,
    barComponentProps?: Partial<Omit<BarComponentProps, keyof BarBaseProps>>,
    conditionComponentProps?: Partial<Omit<ConditionComponentProps, keyof ConditionBaseProps>>
};