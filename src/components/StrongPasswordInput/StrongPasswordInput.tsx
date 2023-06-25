import React, { useState } from 'react'
import { PasswordInput, PasswordInputDefaultComponent } from '../PasswordInput';
import { BarDefaultComponent, StrengthBar } from '../StrengthBar';
import { ConditionDefaultComponent, StrengthConditions } from '../StrengthConditions';
import { DefaultStrongPasswordInputProps, SecurityLevel, StrongPasswordChangeEvent, StrongPasswordInputPropsWithDefaultBarAndConditionComponents, StrongPasswordInputPropsWithDefaultBarComponent, StrongPasswordInputPropsWithDefaultConditionComponent, StrongPasswordInputPropsWithDefaultInputAndBarComponents, StrongPasswordInputPropsWithDefaultInputAndConditionComponents, StrongPasswordInputPropsWithDefaultInputComponent } from './StrongPasswordInput.types';
import { BarDefaultComponentProps, BaseBarProps } from '../StrengthBar/StrengthBar.types';
import { BaseConditionProp, ConditionDefaultComponentProps } from '../StrengthConditions/StrengthConditions.types';
import { BasePasswordInputProps, PasswordInputDefaultComponentProps } from '../PasswordInput/PasswordInput.types';
import { Stack } from '@mui/material';

export const StrongPasswordContainerDefaultComponent = Stack;

export function StrongPasswordInput
  <BarComponentProps extends BaseBarProps,
    ConditionComponentProps extends BaseConditionProp
  >({
    PasswordInputComponent = PasswordInputDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultInputComponent<BarComponentProps, ConditionComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <InputComponentProps extends BasePasswordInputProps,
    ConditionComponentProps extends BaseConditionProp
  >({
    StrengthBarComponent = BarDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultBarComponent<InputComponentProps, ConditionComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <InputComponentProps extends BasePasswordInputProps,
    BarComponentProps extends BaseBarProps
  >({
    ConditionComponent = ConditionDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultConditionComponent<InputComponentProps, BarComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <ConditionComponentProps extends BaseConditionProp>({
    PasswordInputComponent = PasswordInputDefaultComponent,
    StrengthBarComponent = BarDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultInputAndBarComponents<ConditionComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <BarComponentProps extends BaseBarProps>({
    PasswordInputComponent = PasswordInputDefaultComponent,
    ConditionComponent = ConditionDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultInputAndConditionComponents<BarComponentProps>): React.ReactElement;

export function StrongPasswordInput
  <InputComponentProps extends BasePasswordInputProps>({
    StrengthBarComponent = BarDefaultComponent,
    ConditionComponent = ConditionDefaultComponent,
    ...other
  }: StrongPasswordInputPropsWithDefaultBarAndConditionComponents<InputComponentProps>): React.ReactElement;

export function StrongPasswordInput({
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
    showStrengthBar = true,
    showConditions = true,
    onChange,
    ConditionContainerComponent,
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
  const [checkedConditions, setCheckedConditions] = useState(getCheckedConditions(password));
  const [securityLevel, setSecurityLevel] = useState(getSecurityLevel(checkedConditions));

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const newPassword = event.target.value;
    const newCheckedConditions = getCheckedConditions(newPassword);
    const newSecurityLevel = getSecurityLevel(newCheckedConditions);
    
    setPassword(newPassword);
    setCheckedConditions(newCheckedConditions);
    setSecurityLevel(newSecurityLevel);

    if (onChange) {
      const userEvent: StrongPasswordChangeEvent = {
        ...event,
        securityLevel: newSecurityLevel.name,
        satisfiedConditions: newCheckedConditions
                                .filter(condition => condition.satisfied)
                                .map(condition => condition.name),
      };
      onChange(userEvent);
    }
  }

  function getCheckedConditions(password: string): (ConditionComponentProps | ConditionDefaultComponentProps)[] {
    return conditions.map(condition => 
      ({
        name: condition.name,
        satisfied: condition.validator(password),
        ...condition.conditionComponentProps
      })
    ) as (ConditionComponentProps | ConditionDefaultComponentProps)[];
  } 

  function getSecurityLevel(checkedConditions: (ConditionComponentProps | ConditionDefaultComponentProps)[]): SecurityLevel<BarComponentProps> | SecurityLevel<BarDefaultComponentProps> {
    const satisfiedConditions = checkedConditions.filter(condition => condition.satisfied).length;
    return (securityLevels as (SecurityLevel<BarComponentProps> | SecurityLevel<BarDefaultComponentProps>)[])
              .filter(securityLevel => securityLevel.conditionsRequired >= satisfiedConditions)
              .reduce((min, level) => (level.conditionsRequired < min.conditionsRequired ? level : min));
;
  }

  const FinalInputComponent = PasswordInputComponent as React.ComponentType<InputComponentProps | PasswordInputDefaultComponentProps>;
  const FinalStrengthBarComponent = StrengthBarComponent as React.ComponentType<BarComponentProps | BarDefaultComponentProps>;
  const FinalConditionComponent = ConditionComponent as React.ComponentType<ConditionComponentProps | ConditionDefaultComponentProps>;

  const finalInputComponentProps: InputComponentProps | PasswordInputDefaultComponentProps = {
    value: password,
    onChange: handleChange,
    ...passwordInputComponentProps
  } as InputComponentProps | PasswordInputDefaultComponentProps;
  
  const finalBarComponentProps: BarComponentProps | BarDefaultComponentProps = {
    levels: securityLevels.length - 1,
    currentLevel: securityLevels.findIndex(level => level.name === securityLevel.name),
    ...securityLevel.barComponentProps
  } as BarComponentProps | BarDefaultComponentProps;

  return (
    <StrongPasswordContainerComponent {...strongPasswordContainerComponentProps}>
      <PasswordInput
        InputComponent={FinalInputComponent}
        inputComponentProps={finalInputComponentProps} 
      />
      {showStrengthBar &&
        <StrengthBar
          BarComponent={FinalStrengthBarComponent}
          barComponentProps={finalBarComponentProps}
        />
      }
      {showConditions &&
        <StrengthConditions
          ConditionComponent={FinalConditionComponent}
          ContainerComponent={ConditionContainerComponent}
          conditions={checkedConditions}
        />
      }
    </StrongPasswordContainerComponent>
  );
}