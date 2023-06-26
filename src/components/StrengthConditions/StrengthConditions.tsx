import React from 'react';
import StrengthConditionDefault from './StrengthConditionDefault';
import ContainerDefault from '../Container/ContainerDefault';
import { StrengthConditionBaseProps, DefaultStrengthConditionsProps, StrengthConditionsProps, StrengthConditionsPropsWithDefaultCondition, StrengthConditionsPropsWithDefaultContainer, StrengthConditionDefaultComponentProps } from './StrengthConditions.types';
import { ContainerBaseProps, ContainerDefaultComponentProps } from '../Container/Container.types';
import { Container } from '../Container/Container';

export function StrengthConditions
<
  ConditionPropType extends StrengthConditionBaseProps,
  ContainerPropType extends ContainerBaseProps
> (props: StrengthConditionsProps<ConditionPropType, ContainerPropType>): React.ReactElement;

export function StrengthConditions<ConditionPropType extends StrengthConditionBaseProps>({
  ContainerComponent = ContainerDefault,
  ...other
}: StrengthConditionsPropsWithDefaultContainer<ConditionPropType>): React.ReactElement;

export function StrengthConditions<ContainerPropType extends ContainerBaseProps>({
  ConditionComponent = StrengthConditionDefault,
  ...other
}: StrengthConditionsPropsWithDefaultCondition<ContainerPropType>): React.ReactElement;

export function StrengthConditions({
  ConditionComponent = StrengthConditionDefault,
  ContainerComponent = ContainerDefault,
  ...other
}: DefaultStrengthConditionsProps): React.ReactElement;

export function StrengthConditions
  <
    ConditionPropType extends StrengthConditionBaseProps,
    ContainerPropType extends ContainerBaseProps
  >(
    props: StrengthConditionsProps<ConditionPropType, ContainerBaseProps>
      | StrengthConditionsPropsWithDefaultContainer<ConditionPropType>
      | StrengthConditionsPropsWithDefaultCondition<ContainerBaseProps>
      | DefaultStrengthConditionsProps
  ): React.ReactElement {

  // Coolest TS feature
  const {
    conditions,
    ConditionComponent = StrengthConditionDefault,
    ContainerComponent = ContainerDefault,
    containerComponentProps
  } = props;

  const FinalConditionComponent = ConditionComponent as React.ComponentType<ConditionPropType | StrengthConditionDefaultComponentProps>;
  const FinalContainerComponent = ContainerComponent as React.ComponentType<ContainerPropType | ContainerDefaultComponentProps>;
  const finalContainerProps = {
    ...containerComponentProps,
    children: conditions.map(props =>
      <FinalConditionComponent key={props.name}
        {...props}
      />
    )
  } as ContainerPropType | ContainerDefaultComponentProps;
  
  return (
    <Container
      ContainerComponent={FinalContainerComponent}
      containerComponentProps={finalContainerProps}
    />
  );
}