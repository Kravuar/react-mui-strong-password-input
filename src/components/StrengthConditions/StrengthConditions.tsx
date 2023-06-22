import React from 'react';
import { Stack, Typography } from '@mui/material';
import { BaseConditionProp, DefaultConditionProps, SimpleConditionProp, StrengthConditionProps } from './StrengthConditions.types';
import { green, red } from '@mui/material/colors';
import { Circle, Done } from '@mui/icons-material';
import { ConditionDefaultComponent, ContainerDefaultComponent } from './defaults';

export function SimpleCondition({ label, satisfied }: SimpleConditionProp) {
  
  return (
    <Stack direction="row" spacing={1}>
      {satisfied
        ? <Done fontSize="small" sx={{ color: green[300] }}/>
        : <Circle fontSize="small" sx={{ color: red[300] }}/>
      }
      {typeof label === "string"
        ? <Typography>{label}</Typography>
        : label
      }
    </Stack>
  );
}

export function StrengthConditions({
  conditions,
  ConditionComponent = ConditionDefaultComponent,
  ContainerComponent = ContainerDefaultComponent,
}: DefaultConditionProps): React.ReactElement;

export function StrengthConditions<ConditionPropType extends BaseConditionProp>({
  conditions,
  ConditionComponent,
  ContainerComponent = ContainerDefaultComponent,
}: StrengthConditionProps<ConditionPropType>): React.ReactElement;

export function StrengthConditions<ConditionPropType extends BaseConditionProp>(
  props: DefaultConditionProps | StrengthConditionProps<ConditionPropType>
): React.ReactElement {

  // Coolest TS feature
  const {
    conditions,
    ConditionComponent = ConditionDefaultComponent,
    ContainerComponent = ContainerDefaultComponent,
  } = props;
  const FinalConditionComponent = ConditionComponent as React.ComponentType<ConditionPropType | SimpleConditionProp>;

  return (
    <ContainerComponent>
      {conditions.map((props) =>
        <FinalConditionComponent
          {...props}
        />
      )}
    </ContainerComponent>
  );
}