import React from 'react';
import { StrengthBarBaseProps, DefaultStrengthBarProps, StrengthBarDefaultComponentProps, StrengthBarProps } from './StrengthBar.types';
import StrengthBarDefault from './StrengthBarDefault';

export function StrengthBar<BarPropsType extends StrengthBarBaseProps>(
  props: StrengthBarProps<BarPropsType>
): React.ReactElement;

export function StrengthBar({
  BarComponent = StrengthBarDefault,
  barComponentProps
}: DefaultStrengthBarProps): React.ReactElement;

export function StrengthBar<BarPropsType extends StrengthBarBaseProps>(
  props: DefaultStrengthBarProps | StrengthBarProps<BarPropsType>
): React.ReactElement {

  // Coolest TS feature
  const { BarComponent = StrengthBarDefault, barComponentProps } = props;
  const FinalComponent = BarComponent as React.ComponentType<BarPropsType | StrengthBarDefaultComponentProps>;

  return <FinalComponent {...barComponentProps} />;
}