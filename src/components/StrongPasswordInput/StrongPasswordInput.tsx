import React, { useState } from 'react'
import { BarBaseProps } from '../Bar/Bar.types';
import { InputBaseProps } from '../Input/Input.types';
import { SecurityLevel, StrongPasswordChangeEvent, StrongPasswordInputProps } from './StrongPasswordInput.types';
import { Conditions } from '../Condition';
import { ConditionBaseProps } from '../Condition/Condition.types';

export default function StrongPasswordInput
  <InputComponentProps extends InputBaseProps,
    BarComponentProps extends BarBaseProps,
    ConditionComponentProps extends ConditionBaseProps,
    ConditionContainerComponentProps,
    StrongPasswordContainerComponentProps
  >({
    showStrengthBar = true,
    showConditions = true,
    onChange,
    securityLevels,
    conditions,
    InputComponent, // = InputDefault
    BarComponent, // = BarDefault
    ConditionComponent, // = ConditionDefault
    ConditionContainerComponent, // = ContainerDefault
    StrongPasswordContainerComponent, // = ContainerDefault
    conditionContainerComponentProps,
    strongPasswordContainerComponentProps,
    inputComponentProps,
    barComponentProps,
    conditionComponentProps
  }: StrongPasswordInputProps<InputComponentProps, BarComponentProps, ConditionComponentProps, ConditionContainerComponentProps, StrongPasswordContainerComponentProps>): React.ReactElement {
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

  function getCheckedConditions(password: string): ConditionComponentProps[] {
    return conditions.map(condition => ({
      name: condition.name,
      satisfied: condition.validator(password),
      ...condition.conditionComponentProps
    })
    ) as ConditionComponentProps[];
  }

  function getSecurityLevel(checkedConditions: ConditionComponentProps[]): SecurityLevel<BarComponentProps> {
    const satisfiedConditions = checkedConditions.filter(condition => condition.satisfied).length;
    return securityLevels
      .filter(securityLevel => securityLevel.conditionsRequired >= satisfiedConditions)
      .reduce((min, level) => (level.conditionsRequired < min.conditionsRequired ? level : min));
  }

  const finalInputComponentProps: InputComponentProps = {
    value: password,
    onChange: handleChange,
    ...inputComponentProps
  } as InputComponentProps;

  const finalBarComponentProps: BarComponentProps = React.useMemo(() => ({
    levels: securityLevels.length - 1,
    currentLevel: securityLevels.findIndex(level => level.name === securityLevel.name),
    ...barComponentProps,
    ...securityLevel.barComponentProps
  } as BarComponentProps), [barComponentProps, securityLevels, securityLevel]);

  const finalStrongPasswordContainerProps: React.PropsWithChildren<StrongPasswordContainerComponentProps> = {
    children: [
      <InputComponent {...finalInputComponentProps} />,
      showStrengthBar
        ? <BarComponent {...finalBarComponentProps} />
        : undefined,
      showConditions
        ? <Conditions
            conditions={checkedConditions}
            ConditionComponent={ConditionComponent}
            ConditionContainerComponent={ConditionContainerComponent}
            conditionContainerComponentProps={conditionContainerComponentProps}
          />
        : undefined
    ],
    ...strongPasswordContainerComponentProps
  } as React.PropsWithChildren<StrongPasswordContainerComponentProps>;

  return <StrongPasswordContainerComponent {...finalStrongPasswordContainerProps} />;
}