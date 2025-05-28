import * as React from "react";
import { Text, StyleSheet, View, ViewProps } from "react-native";

export type DSBADGEProps = {
  variant?: "primary" | "success" | "warning" | "error" | "info";
  children: React.ReactNode;
  style?: any;
} & ViewProps;

const COLORS = {
  primary: "#0FB8A9",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
};

export function DSBADGE({
  variant = "primary",
  children,
  style,
  ...props
}: DSBADGEProps) {
  return (
    <View
      style={[styles.badge, { backgroundColor: COLORS[variant] }, style]}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
    marginRight: 8,
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#fff",
  },
});

export default DSBADGE;
