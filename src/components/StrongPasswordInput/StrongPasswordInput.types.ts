import { BarProps } from "../StrengthBar/StrengthBar.types";

export interface Condition {
    name: string,
    label: string,
    validate: (password: string) => boolean
}

export interface SecurityLevel<BarComponentProps> {
    name: string,
    label: string,
    strengthBarProps?: BarComponentProps,
    conditionsRequired: number
}

export interface StrongPasswordInputProps<BarComponentProps extends BarProps> {
    securityLevels: SecurityLevel<BarComponentProps>[],
    conditions: Condition[],
    showStrengthBar: boolean,
    StrengthBarComponent?: React.ComponentType<BarComponentProps>,
}