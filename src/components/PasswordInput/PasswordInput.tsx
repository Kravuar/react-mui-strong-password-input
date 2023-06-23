import React from 'react';
import { BasePasswordInputProps, DefaultPasswordInputProps, PasswordInputProps, SimplePasswordInputProps } from './PasswordInput.types';
import SimplePasswordInput from './SimplePasswordInput';

export const PasswordInputDefaultComponent = SimplePasswordInput;
export type PasswordInputDefaultComponentProps = SimplePasswordInputProps;

export function PasswordInput({
  InputComponent = PasswordInputDefaultComponent,
  inputComponentProps
}: DefaultPasswordInputProps): React.ReactElement;

export function PasswordInput<PasswordInputComponentProps extends BasePasswordInputProps>({
  InputComponent,
  inputComponentProps
}: PasswordInputProps<PasswordInputComponentProps>): React.ReactElement;

export function PasswordInput<PasswordInputComponentProps extends BasePasswordInputProps>(
  props: DefaultPasswordInputProps | PasswordInputProps<PasswordInputComponentProps>
): React.ReactElement {

  // Coolest TS feature
  const { InputComponent = PasswordInputDefaultComponent, inputComponentProps } = props;
  const FinalComponent = InputComponent as React.ComponentType<PasswordInputComponentProps | PasswordInputDefaultComponentProps>;

  return <FinalComponent {...inputComponentProps} />;
}