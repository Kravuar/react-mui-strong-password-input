import React from 'react';
import { BaseConditionProp, ConditionDefaultComponentProps, DefaultConditionProps, StrengthConditionProps } from './StrengthConditions.types';
import SimpleCondition from './SimpleCondition';
import { Stack } from '@mui/material';

export const ConditionDefaultComponent = SimpleCondition;
export const ContainerDefaultComponent = Stack;

export function StrengthConditions({
  conditions,
  ConditionComponent = ConditionDefaultComponent,
  ContainerComponent = ContainerDefaultComponent,
}: DefaultConditionProps): React.ReactElement;

export function StrengthConditions<ConditionComponentPropType extends BaseConditionProp>({
  conditions,
  ConditionComponent,
  ContainerComponent = ContainerDefaultComponent,
}: StrengthConditionProps<ConditionComponentPropType>): React.ReactElement;

export function StrengthConditions<ConditionComponentPropType extends BaseConditionProp>(
  props: DefaultConditionProps | StrengthConditionProps<ConditionComponentPropType>
): React.ReactElement {

  // Coolest TS feature
  const {
    conditions,
    ConditionComponent = ConditionDefaultComponent,
    ContainerComponent = ContainerDefaultComponent,
  } = props;
  const FinalConditionComponent = ConditionComponent as React.ComponentType<ConditionComponentPropType | ConditionDefaultComponentProps>;

  return (
    <ContainerComponent>
      {conditions.map((props, idx) =>
        <FinalConditionComponent key={idx}
          {...props}
        />
      )}
    </ContainerComponent>
  );
}