import * as React from "react";
import { StyleSheet } from "react-native";
import { HelperText } from "react-native-paper";

export type DSHelperTextProps = {
  type?: "error" | "info";
  visible?: boolean;
  children: React.ReactNode;
  style?: any;
};

export function DSHelperText({
  type = "info",
  visible = true,
  children,
  style,
}: DSHelperTextProps) {
  return (
    <HelperText
      type={type}
      visible={visible}
      style={[
        styles.base,
        type === "error" ? styles.error : styles.info,
        style,
      ]}
    >
      {children}
    </HelperText>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "left",
  },
  error: {
    color: "#EF4444",
  },
  info: {
    color: "#3B82F6",
  },
});

export default DSHelperText;
