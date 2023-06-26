import { StrengthBarDefaultComponentProps, StrengthBarBaseProps } from "../StrengthBar/StrengthBar.types";
import { StrengthConditionBaseProps, StrengthConditionDefaultComponentProps } from '../StrengthConditions/StrengthConditions.types';
import { PasswordInputBaseProps, PasswordInputDefaultComponentProps } from "../PasswordInput/PasswordInput.types";
import { ContainerBaseProps, ContainerDefaultComponentProps } from "../Container/Container.types";

export interface Condition<ConditionComponentProp extends StrengthConditionBaseProps> {
    name: string,
    validator: (password: string) => boolean,
    conditionComponentProps: Omit<ConditionComponentProp, keyof StrengthConditionBaseProps>
}

export interface SecurityLevel<BarComponentProps extends StrengthBarBaseProps> {
    name: string,
    conditionsRequired: number,
    barComponentProps: Omit<BarComponentProps, keyof StrengthBarBaseProps>
}

export interface StrongPasswordChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {
    securityLevel: string,
    satisfiedConditions: string[]
}

interface StaticStrongPasswordProps {
    showStrengthBar?: boolean,
    showConditions?: boolean,
    onChange?: (event: StrongPasswordChangeEvent) => void
}

export interface StrongPasswordInputProps
<InputComponentProps extends PasswordInputBaseProps,
BarComponentProps extends StrengthBarBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInput
<BarComponentProps extends StrengthBarBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultBar
<InputComponentProps extends PasswordInputBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultCondition
<InputComponentProps extends PasswordInputBaseProps,
BarComponentProps extends StrengthBarBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<StrengthConditionDefaultComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultConditionsContainer
<InputComponentProps extends PasswordInputBaseProps,
BarComponentProps extends StrengthBarBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultContainer
<InputComponentProps extends PasswordInputBaseProps,
BarComponentProps extends StrengthBarBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndBar
<ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndCondition
<BarComponentProps extends StrengthBarBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<StrengthConditionDefaultComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndConditionContainer
<BarComponentProps extends StrengthBarBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndContainer
<BarComponentProps extends StrengthBarBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultBarAndCondition
<InputComponentProps extends PasswordInputBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<StrengthConditionDefaultComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultBarAndConditionContainer
<InputComponentProps extends PasswordInputBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultBarAndContainer
<InputComponentProps extends PasswordInputBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultConditionAndConditionContainer
<InputComponentProps extends PasswordInputBaseProps,
BarComponentProps extends StrengthBarBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<StrengthConditionDefaultComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ConditionContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultConditionAndContainer
<InputComponentProps extends PasswordInputBaseProps,
BarComponentProps extends StrengthBarBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<StrengthConditionDefaultComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultConditionContainerAndContainer
<InputComponentProps extends PasswordInputBaseProps,
BarComponentProps extends StrengthBarBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    StrongPasswordContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    conditionContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<InputComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndBarAnd
<ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndBarAndCondition
<ConditionContainerComponentProps extends ContainerBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<StrengthConditionDefaultComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndBarAndConditionContainer
<ConditionComponentProps extends StrengthConditionBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndBarAndContainer
<ConditionComponentProps extends StrengthConditionBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<StrengthBarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent?: React.ComponentType<StrengthBarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndConditionAndConditionContainer
<BarComponentProps extends StrengthBarBaseProps,
StrongPasswordContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<StrengthConditionDefaultComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ConditionContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    StrongPasswordContainerComponent: React.ComponentType<StrongPasswordContainerComponentProps>,
    conditionContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<StrongPasswordContainerComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndConditionAndContainer
<BarComponentProps extends StrengthBarBaseProps,
ConditionContainerComponentProps extends ContainerBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<StrengthConditionDefaultComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<StrengthConditionDefaultComponentProps>,
    ConditionContainerComponent: React.ComponentType<ConditionContainerComponentProps>,
    StrongPasswordContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    conditionContainerComponentProps?: Omit<ConditionContainerComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};

export interface StrongPasswordInputPropsWithDefaultInputAndConditionContainerAndContainer
<BarComponentProps extends StrengthBarBaseProps,
ConditionComponentProps extends StrengthConditionBaseProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    ConditionContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    StrongPasswordContainerComponent?: React.ComponentType<ContainerDefaultComponentProps>,
    conditionContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    strongPasswordContainerComponentProps?: Omit<ContainerDefaultComponentProps, keyof ContainerBaseProps>
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof PasswordInputBaseProps>,
};