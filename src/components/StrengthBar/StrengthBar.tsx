import React from 'react';
import { BarDefaultComponentProps, BaseBarProps, DefaultStrengthBarProps, StrengthBarProps } from './StrengthBar.types';
import LinearBar from './LinearBar';

export const BarDefaultComponent = LinearBar;

export function StrengthBar({
  BarComponent = BarDefaultComponent,
  barComponentProps
}: DefaultStrengthBarProps): React.ReactElement;

export function StrengthBar<BarPropsType extends BaseBarProps>(
  props: StrengthBarProps<BarPropsType>
): React.ReactElement;

export function StrengthBar<BarPropsType extends BaseBarProps>(
  props: DefaultStrengthBarProps | StrengthBarProps<BarPropsType>
): React.ReactElement {

  // Coolest TS feature
  const { BarComponent = BarDefaultComponent, barComponentProps } = props;
  const FinalComponent = BarComponent as React.ComponentType<BarPropsType | BarDefaultComponentProps>;

  return <FinalComponent {...barComponentProps} />;
}