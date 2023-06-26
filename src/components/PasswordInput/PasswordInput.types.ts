export interface PasswordInputBaseProps {
    value: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
}

export interface PasswordInputDefaultComponentProps extends PasswordInputBaseProps {
    placeholder?: string
}

export interface DefaultPasswordInputProps {
    InputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    inputComponentProps: PasswordInputDefaultComponentProps
}

export interface PasswordInputProps<InputPropsType extends PasswordInputBaseProps> {
    InputComponent: React.ComponentType<InputPropsType>,
    inputComponentProps: InputPropsType
}