import React from 'react';
import { Stack, Typography } from '@mui/material';
import { ConditionProp, DefaultStrengthConditionProps, SimpleConditionProp, StrengthConditionProps } from './StrengthConditions.types';
import { green, red } from '@mui/material/colors';
import { Circle, Done } from '@mui/icons-material';

export function SimpleCondition({ label, satisfied }: SimpleConditionProp) {
  
  return (
    <Stack direction="row" spacing={1}>
      {satisfied
        ? <Done fontSize="small" sx={{ color: green[300] }}/>
        : <Circle fontSize="small" sx={{ color: red[300] }}/>
      }
      <Typography>{label}</Typography>
    </Stack>
  );
}

export function StrengthConditions({
  conditions,
  ConditionComponent = SimpleCondition,
  conditionComponentProps = null,
  ContainerComponent = Stack,
  containerComponentProps = null
}: DefaultStrengthConditionProps): React.ReactElement;

export function StrengthConditions<ConditionPropType extends ConditionProp>({
  conditions,
  ConditionComponent,
  conditionComponentProps = null,
  ContainerComponent = Stack,
  containerComponentProps = null
}: StrengthConditionProps<ConditionPropType>): React.ReactElement;

export function StrengthConditions<ConditionPropType extends ConditionProp>(
  props: DefaultStrengthConditionProps | StrengthConditionProps<ConditionPropType>
): React.ReactElement {

  // Coolest TS feature
  const {
    conditions,
    ConditionComponent = SimpleCondition,
    conditionComponentProps = null,
    ContainerComponent = Stack,
    containerComponentProps = null
  } = props;
  const FinalConditionComponent = ConditionComponent as React.ComponentType<ConditionPropType | SimpleConditionProp>;

  return (
    <ContainerComponent {...containerComponentProps}>
      {conditions.map((props) =>
        <FinalConditionComponent
          {...props}
          {...conditionComponentProps}
        />
      )}
    </ContainerComponent>
  );
}