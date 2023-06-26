import React from 'react';
import { PasswordInputBaseProps, DefaultPasswordInputProps, PasswordInputDefaultComponentProps, PasswordInputProps } from './PasswordInput.types';
import PasswordInputDefault from './PasswordInputDefault';

export function PasswordInput<PasswordInputComponentProps extends PasswordInputBaseProps>(
  props: PasswordInputProps<PasswordInputComponentProps>
): React.ReactElement;

export function PasswordInput({
  InputComponent = PasswordInputDefault,
  ...other
}: DefaultPasswordInputProps): React.ReactElement;

export function PasswordInput<PasswordInputComponentProps extends PasswordInputBaseProps>(
  props: DefaultPasswordInputProps | PasswordInputProps<PasswordInputComponentProps>
): React.ReactElement {

  // Coolest TS feature
  const { InputComponent = PasswordInputDefault, inputComponentProps } = props;
  const FinalComponent = InputComponent as React.ComponentType<PasswordInputComponentProps | PasswordInputDefaultComponentProps>;

  return <FinalComponent {...inputComponentProps} />;
}