import * as React from "react";
import { Platform, View, StyleSheet, Text as RNText } from "react-native";

export type DSToastProps = {
  message: string;
  variant?: "success" | "error" | "warning" | "info";
  visible: boolean;
  onClose?: () => void;
  style?: any;
};

const COLORS = {
  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",
};

export function DSToast({
  message,
  variant = "info",
  visible,
  onClose,
  style,
}: DSToastProps) {
  if (!visible) return null;
  if (Platform.OS === "web") {
    return (
      <div
        style={{ ...webStyles.toast, background: COLORS[variant], ...style }}
      >
        <span style={webStyles.text}>{message}</span>
        {onClose && (
          <button style={webStyles.close} onClick={onClose}>
            ×
          </button>
        )}
      </div>
    );
  }
  return (
    <View
      style={[nativeStyles.toast, { backgroundColor: COLORS[variant] }, style]}
    >
      <RNText style={nativeStyles.text}>{message}</RNText>
      {onClose && (
        <RNText style={nativeStyles.close} onPress={onClose}>
          ×
        </RNText>
      )}
    </View>
  );
}

const webStyles: { [key: string]: React.CSSProperties } = {
  toast: {
    position: "fixed",
    bottom: 32,
    left: "50%",
    transform: "translateX(-50%)",
    minWidth: 240,
    maxWidth: 400,
    borderRadius: 12,
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    padding: "16px 24px",
    color: "#fff",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#fff",
    flex: 1,
  },
  close: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 20,
    marginLeft: 16,
    cursor: "pointer",
    fontFamily: "Poppins-Bold",
  },
};

const nativeStyles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 32,
    left: 24,
    right: 24,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#fff",
    flex: 1,
  },
  close: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#fff",
    marginLeft: 16,
  },
});

export default DSToast;
