import React from 'react';
import { LinearProgress } from '@mui/material';
import { BarProps, DefaultStrengthBarProps, LinearBarProps, StrengthBarProps } from './StrengthBar.types';

export function LinearBar({background, barColor, levels, currentLevel}: LinearBarProps) {
  const value = (currentLevel / levels) * 100;

  return (
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
  );
}

export function StrengthBar({
  BarComponent = LinearBar,
  barComponentProps
}: DefaultStrengthBarProps): React.ReactElement;

export function StrengthBar<BarPropsType extends BarProps>({
  BarComponent,
  barComponentProps
}: StrengthBarProps<BarPropsType>): React.ReactElement;

export function StrengthBar<BarPropsType extends BarProps>(
  props: DefaultStrengthBarProps | StrengthBarProps<BarPropsType>
): React.ReactElement {

  // Coolest TS feature
  const { BarComponent = LinearBar, barComponentProps } = props;
  const FinalComponent = BarComponent as React.ComponentType<BarPropsType | LinearBarProps>;

  return <FinalComponent {...barComponentProps} />;
}