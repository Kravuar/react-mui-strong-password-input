import React, { useState } from 'react'
import { PasswordInput, PasswordInputDefaultComponent } from '../PasswordInput';
import { BarDefaultComponent, StrengthBar } from '../StrengthBar';
import { ConditionDefaultComponent, StrengthConditions } from '../StrengthConditions';
import { Condition, DefaultStrongPasswordInputProps, SecurityLevel, StrongPasswordChangeEvent, StrongPasswordInputPropsWithDefaultBarAndConditionComponents, StrongPasswordInputPropsWithDefaultBarComponent, StrongPasswordInputPropsWithDefaultConditionComponent, StrongPasswordInputPropsWithDefaultInputAndBarComponents, StrongPasswordInputPropsWithDefaultInputAndConditionComponents, StrongPasswordInputPropsWithDefaultInputComponent } from './StrongPasswordInput.types';
import { BarDefaultComponentProps, BaseBarProps } from '../StrengthBar/StrengthBar.types';
import { BaseConditionProp, ConditionDefaultComponentProps } from '../StrengthConditions/StrengthConditions.types';
import { BasePasswordInputProps, PasswordInputDefaultComponentProps } from '../PasswordInput/PasswordInput.types';
import { Stack } from '@mui/material';

export const StrongPasswordContainerDefaultComponent = Stack;

export function StrongPasswordInput
  <BarComponentProps extends BaseBarProps,
    ConditionComponentProps extends BaseConditionProp
  >({
    StrongPasswordContainerComponent = StrongPasswordContainerDefaultComponent,
    PasswordInputComponent = PasswordInputDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultInputComponent<BarComponentProps, ConditionComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <InputComponentProps extends BasePasswordInputProps,
    ConditionComponentProps extends BaseConditionProp
  >({
    StrongPasswordContainerComponent = StrongPasswordContainerDefaultComponent,
    StrengthBarComponent = BarDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultBarComponent<InputComponentProps, ConditionComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <InputComponentProps extends BasePasswordInputProps,
    BarComponentProps extends BaseBarProps
  >({
    StrongPasswordContainerComponent = StrongPasswordContainerDefaultComponent,
    ConditionComponent = ConditionDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultConditionComponent<InputComponentProps, BarComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <ConditionComponentProps extends BaseConditionProp>({
    StrongPasswordContainerComponent = StrongPasswordContainerDefaultComponent,
    PasswordInputComponent = PasswordInputDefaultComponent,
    StrengthBarComponent = BarDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultInputAndBarComponents<ConditionComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <BarComponentProps extends BaseBarProps>({
    StrongPasswordContainerComponent = StrongPasswordContainerDefaultComponent,
    PasswordInputComponent = PasswordInputDefaultComponent,
    ConditionComponent = ConditionDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultInputAndConditionComponents<BarComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <InputComponentProps extends BasePasswordInputProps>({
    StrongPasswordContainerComponent = StrongPasswordContainerDefaultComponent,
    StrengthBarComponent = BarDefaultComponent,
    ConditionComponent = ConditionDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultBarAndConditionComponents<InputComponentProps>): React.ReactElement;

export function StrongPasswordInput({
  StrongPasswordContainerComponent = StrongPasswordContainerDefaultComponent,
  PasswordInputComponent = PasswordInputDefaultComponent,
  StrengthBarComponent = BarDefaultComponent,
  ConditionComponent = ConditionDefaultComponent,
  ...other
}: DefaultStrongPasswordInputProps): React.ReactElement;

export function StrongPasswordInput
<InputComponentProps extends BasePasswordInputProps,
BarComponentProps extends BaseBarProps,
ConditionComponentProps extends BaseConditionProp
>(props: StrongPasswordInputPropsWithDefaultInputComponent<BarComponentProps, ConditionComponentProps>
    | StrongPasswordInputPropsWithDefaultBarComponent<InputComponentProps, ConditionComponentProps>
    | StrongPasswordInputPropsWithDefaultConditionComponent<InputComponentProps, BarComponentProps>
    | StrongPasswordInputPropsWithDefaultInputAndBarComponents<ConditionComponentProps>
    | StrongPasswordInputPropsWithDefaultInputAndConditionComponents<BarComponentProps>
    | StrongPasswordInputPropsWithDefaultBarAndConditionComponents<InputComponentProps>
    | DefaultStrongPasswordInputProps): React.ReactElement {
  const {
    showStrengthBar,
    showConditions,
    onChange,
    ConditionContainerComponent,
    conditionContainerComponentProps,
    StrongPasswordContainerComponent = StrongPasswordContainerDefaultComponent,
    strongPasswordContainerComponentProps,
    conditions,
    securityLevels,
    PasswordInputComponent = PasswordInputDefaultComponent,
    StrengthBarComponent = BarDefaultComponent,
    ConditionComponent = ConditionDefaultComponent,
    passwordInputComponentProps
  } = props;

  const [password, setPassword] = useState("");
  const [securityLevel, setSecurityLevel] = useState(getSecurityLevel());

  function getSatisfiedConditions(): Condition<ConditionComponentProps>[] {
    return [];
  }

  function handleChange(event: StrongPasswordChangeEvent) {

  }

  function getSecurityLevel(): SecurityLevel<BarComponentProps> | SecurityLevel<BarDefaultComponentProps> {
    return securityLevels[0];
  }

  const FinalInputComponent = PasswordInputComponent as React.ComponentType<InputComponentProps | PasswordInputDefaultComponentProps>;
  const FinalStrengthBarComponent = StrengthBarComponent as React.ComponentType<BarComponentProps | BarDefaultComponentProps>;
  const FinalConditionComponent = ConditionComponent as React.ComponentType<ConditionComponentProps | ConditionDefaultComponentProps>;

  const finalInputComponentProps: InputComponentProps | PasswordInputDefaultComponentProps = {
    value: password,
    onChange: handleChange,
    ...passwordInputComponentProps
  }
  
  const finalBarComponentProps: BarComponentProps | BarDefaultComponentProps = {
    levels: securityLevels.length,
    currentLevel: securityLevels.findIndex(level => level.name === securityLevel.name),
    ...securityLevel.barComponentProps
  }

  const finalConditions: ConditionComponentProps[] | ConditionDefaultComponentProps[] = conditions

  return (
    <StrongPasswordContainerComponent {...strongPasswordContainerComponentProps}>
      <PasswordInput<InputComponentProps> 
        InputComponent={FinalInputComponent}
        inputComponentProps={finalInputComponentProps} 
      />
      <StrengthBar 
        BarComponent={FinalStrengthBarComponent}
        barComponentProps={finalBarComponentProps}
      />
      <StrengthConditions 
        ConditionComponent={FinalConditionComponent}
        ContainerComponent={ConditionContainerComponent}
        conditions={}
      />
    </StrongPasswordContainerComponent>
  );
}