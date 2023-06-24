import { ChangeEvent } from "react";
import { BarDefaultComponentProps, BaseBarProps } from "../StrengthBar/StrengthBar.types";
import { BaseConditionProp, ConditionDefaultComponentProps } from '../StrengthConditions/StrengthConditions.types';
import { BasePasswordInputProps, PasswordInputDefaultComponentProps } from "../PasswordInput/PasswordInput.types";

export interface Condition<ConditionComponentProp extends BaseConditionProp> {
    name: string,
    validate: (password: string) => boolean,
    conditionComponentProps: Omit<ConditionComponentProp, keyof BaseConditionProp>
}

export interface SecurityLevel<BarComponentProps extends BaseBarProps> {
    name: string,
    conditionsRequired: number,
    barComponentProps: Omit<BarComponentProps, keyof BaseBarProps>
}

export interface StrongPasswordChangeEvent extends ChangeEvent<HTMLInputElement> {
    securityLevel: string,
    satisfiedConditions: string[]
}

interface StaticStrongPasswordProps {
    showStrengthBar?: boolean,
    showConditions?: boolean,
    onChange?: (event: StrongPasswordChangeEvent) => void,
    ConditionContainerComponent?: React.ComponentType<{ children?: React.ReactNode }>,
    conditionContainerComponentProps?: any,
    StrongPasswordContainerComponent?: React.ComponentType<{ children?: React.ReactNode }>,
    strongPasswordContainerComponentProps?: any
}

export interface StrongPasswordInputProps
<InputComponentProps extends BasePasswordInputProps,
BarComponentProps extends BaseBarProps,
ConditionComponentProps extends BaseConditionProp
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    passwordInputComponentProps?: Omit<InputComponentProps, keyof BasePasswordInputProps>,
}

export interface StrongPasswordInputPropsWithDefaultInputComponent
<BarComponentProps extends BaseBarProps,
ConditionComponentProps extends BaseConditionProp
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof BasePasswordInputProps>
}

export interface StrongPasswordInputPropsWithDefaultBarComponent
<InputComponentProps extends BasePasswordInputProps,
ConditionComponentProps extends BaseConditionProp
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent?: React.ComponentType<BarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    passwordInputComponentProps?: Omit<InputComponentProps, keyof BasePasswordInputProps>
}

export interface StrongPasswordInputPropsWithDefaultConditionComponent
<InputComponentProps extends BasePasswordInputProps,
BarComponentProps extends BaseBarProps
> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionDefaultComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<ConditionDefaultComponentProps>,
    passwordInputComponentProps?: Omit<InputComponentProps, keyof BasePasswordInputProps>
}

export interface StrongPasswordInputPropsWithDefaultInputAndBarComponents
<ConditionComponentProps extends BaseConditionProp> extends StaticStrongPasswordProps {
securityLevels: SecurityLevel<BarDefaultComponentProps>[],
    conditions: Condition<ConditionComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent?: React.ComponentType<BarDefaultComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProps>,
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof BasePasswordInputProps>
}

export interface StrongPasswordInputPropsWithDefaultInputAndConditionComponents
<BarComponentProps extends BaseBarProps> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionDefaultComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<ConditionDefaultComponentProps>,
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof BasePasswordInputProps>
}

export interface StrongPasswordInputPropsWithDefaultBarAndConditionComponents
<InputComponentProps extends BasePasswordInputProps> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarDefaultComponentProps>[],
    conditions: Condition<ConditionDefaultComponentProps>[],
    PasswordInputComponent: React.ComponentType<InputComponentProps>,
    StrengthBarComponent?: React.ComponentType<BarDefaultComponentProps>,
    ConditionComponent?: React.ComponentType<ConditionDefaultComponentProps>,
    passwordInputComponentProps?: Omit<InputComponentProps, keyof BasePasswordInputProps>
}

export interface DefaultStrongPasswordInputProps extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarDefaultComponentProps>[],
    conditions: Condition<ConditionDefaultComponentProps>[],
    PasswordInputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    StrengthBarComponent?: React.ComponentType<BarDefaultComponentProps>,
    ConditionComponent?: React.ComponentType<ConditionDefaultComponentProps>,
    passwordInputComponentProps?: Omit<PasswordInputDefaultComponentProps, keyof BasePasswordInputProps>
}