import * as React from "react";
import { ActivityIndicator } from "react-native-paper";

export type DSLoadingSpinnerProps = {
  size?: number;
  color?: string;
  style?: any;
};

export function DSLoadingSpinner({
  size = 24,
  color = "#0FB8A9",
  style,
}: DSLoadingSpinnerProps) {
  return <ActivityIndicator size={size} color={color} style={style} />;
}

export default DSLoadingSpinner;
