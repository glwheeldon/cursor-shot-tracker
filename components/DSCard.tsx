import * as React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { Text } from "react-native-paper";

export function DSCard({ children, style, ...props }: ViewProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

export function DSCardHeader({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <View style={[styles.header, style]}>{children}</View>;
}

export function DSCardTitle({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export function DSCardDescription({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <Text style={[styles.description, style]}>{children}</Text>;
}

export function DSCardContent({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <View style={[styles.content, style]}>{children}</View>;
}

export function DSCardFooter({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#111827",
    marginBottom: 4,
  },
  description: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 8,
  },
  content: {
    marginBottom: 8,
  },
  footer: {
    marginTop: 8,
  },
});

export default DSCard;
