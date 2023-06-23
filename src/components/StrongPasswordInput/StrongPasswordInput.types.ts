import { ChangeEvent } from "react";
import { BaseBarProps } from "../StrengthBar/StrengthBar.types";
import { BaseConditionProp } from '../StrengthConditions/StrengthConditions.types';
import { BarDefaultProps } from "../StrengthBar/defaults";
import { ConditionDefaultComponentProps } from "../StrengthConditions/defaults";

export interface Condition<ConditionComponentProp extends BaseConditionProp> {
    name: string,
    label: string | React.ReactElement,
    validate: (password: string) => boolean,
    conditionComponentProps: Omit<ConditionComponentProp, keyof BaseConditionProp>
}

export interface SecurityLevel<BarComponentProps extends BaseBarProps> {
    name: string,
    label: string | React.ReactElement,
    conditionsRequired: number,
    conditionComponentProps: Omit<BarComponentProps, keyof BaseBarProps>
}

export interface StrongPasswordChangeEvent extends ChangeEvent<HTMLInputElement> {
    securityLevel: string,
    satisfiedConditions: string[]
}

interface StaticStrongPasswordProps {
    name: string,
    placeholder?: string,
    showStrengthBar?: boolean,
    showConditions?: boolean,
    onChange?: (event: StrongPasswordChangeEvent) => void,
    ConditionContainerComponent?: React.ComponentType<{children?: React.ReactNode}>,
}

export interface DefaultStrongPasswordInputPropsWithBar<ConditionComponentProp extends BaseConditionProp> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarDefaultProps>[],
    conditions: Condition<ConditionComponentProp>[],
    StrengthBarComponent?: React.ComponentType<BarDefaultProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProp>,
}

export interface DefaultStrongPasswordInputPropsWithConditions<BarComponentProps extends BaseBarProps> extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionDefaultComponentProps>[],
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent?: React.ComponentType<ConditionDefaultComponentProps>,
}

export interface DefaultStrongPasswordInputPropsWithBarAndConditions extends StaticStrongPasswordProps {
    securityLevels: SecurityLevel<BarDefaultProps>[],
    conditions: Condition<ConditionDefaultComponentProps>[],
    StrengthBarComponent?: React.ComponentType<BarDefaultProps>,
    ConditionComponent?: React.ComponentType<ConditionDefaultComponentProps>,
}

export interface StrongPasswordInputProps<BarComponentProps extends BaseBarProps, ConditionComponentProp extends BaseConditionProp> extends StaticStrongPasswordProps{
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition<ConditionComponentProp>[],
    onChange?: (event: StrongPasswordChangeEvent) => void
    StrengthBarComponent: React.ComponentType<BarComponentProps>,
    ConditionComponent: React.ComponentType<ConditionComponentProp>,
}