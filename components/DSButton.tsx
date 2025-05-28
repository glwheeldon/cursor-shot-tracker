import * as React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export type DSButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "link" | "destructive";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  style?: any;
  labelStyle?: any;
} & React.ComponentProps<typeof Button>;

export function DSButton({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  style,
  labelStyle,
  ...props
}: DSButtonProps) {
  let buttonStyle = [styles.base, style];
  let textStyle = [styles.label, labelStyle];
  let mode: "contained" | "outlined" | "text" = "contained";
  let buttonColor = "#0FB8A9";
  let textColor = "#fff";

  if (variant === "secondary") {
    mode = "outlined";
    buttonColor = "#fff";
    textColor = "#0FB8A9";
    buttonStyle.push(styles.secondary);
    textStyle.push({ color: "#0FB8A9" });
  } else if (variant === "ghost") {
    mode = "outlined";
    buttonColor = "transparent";
    textColor = "#0FB8A9";
    buttonStyle.push(styles.ghost);
    textStyle.push({ color: "#0FB8A9" });
  } else if (variant === "link") {
    mode = "text";
    buttonColor = "transparent";
    textColor = "#0FB8A9";
    buttonStyle.push(styles.link);
    textStyle.push({ color: "#0FB8A9", textDecorationLine: "underline" });
  } else if (variant === "destructive") {
    mode = "contained";
    buttonColor = "#EF4444";
    textColor = "#fff";
    buttonStyle.push(styles.destructive);
    textStyle.push({ color: "#fff" });
  }

  if (size === "sm") {
    buttonStyle.push({ height: 36, borderRadius: 8, paddingHorizontal: 12 });
    textStyle.push({ fontSize: 14 });
  } else if (size === "lg") {
    buttonStyle.push({ height: 56, borderRadius: 8, paddingHorizontal: 24 });
    textStyle.push({ fontSize: 18 });
  } else {
    buttonStyle.push({ height: 48, borderRadius: 8, paddingHorizontal: 16 });
    textStyle.push({ fontSize: 16 });
  }

  if (fullWidth) {
    buttonStyle.push({ width: "100%" });
  }

  return (
    <Button
      mode={mode}
      style={buttonStyle}
      labelStyle={textStyle}
      buttonColor={variant === "primary" ? "#0FB8A9" : buttonColor}
      textColor={textColor}
      {...props}
    >
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: "center",
  },
  label: {
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 0.5,
  },
  secondary: {
    borderWidth: 1,
    borderColor: "#0FB8A9",
    backgroundColor: "#fff",
  },
  ghost: {
    borderWidth: 1,
    borderColor: "#0FB8A9",
    backgroundColor: "transparent",
  },
  link: {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingHorizontal: 0,
  },
  destructive: {
    backgroundColor: "#EF4444",
    borderColor: "#EF4444",
    borderWidth: 1,
  },
});

export default DSButton;
