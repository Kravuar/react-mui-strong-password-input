import React from 'react';
import { LinearProgress, Stack, Typography } from '@mui/material';
import { BaseBarProps, DefaultStrengthBarProps, LinearBarProps, StrengthBarProps } from './StrengthBar.types';
import { BarDefaultComponent } from './defaults';

export function LinearBar({ background, barColor, levels, currentLevel, label }: LinearBarProps) {
  const value = (currentLevel / levels) * 100;

  return (
    <Stack direction="row">
      <LinearProgress
        value={value}
        variant="determinate"
        sx={{
          background: background,
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: barColor,
          }
        }}
      />
      {typeof label === "string"
        ? <Typography>{label}</Typography>
        : label
      }
    </Stack>
  );
}

export function StrengthBar({
  BarComponent = BarDefaultComponent,
  barComponentProps
}: DefaultStrengthBarProps): React.ReactElement;

export function StrengthBar<BarPropsType extends BaseBarProps>({
  BarComponent,
  barComponentProps
}: StrengthBarProps<BarPropsType>): React.ReactElement;

export function StrengthBar<BarPropsType extends BaseBarProps>(
  props: DefaultStrengthBarProps | StrengthBarProps<BarPropsType>
): React.ReactElement {

  // Coolest TS feature
  const { BarComponent = BarDefaultComponent, barComponentProps } = props;
  const FinalComponent = BarComponent as React.ComponentType<BarPropsType | LinearBarProps>;

  return <FinalComponent {...barComponentProps} />;
}