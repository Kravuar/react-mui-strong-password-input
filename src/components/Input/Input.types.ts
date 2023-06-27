export interface InputBaseProps {
    value: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
}

export interface InputDefaultComponentProps extends InputBaseProps {
    placeholder?: string
}