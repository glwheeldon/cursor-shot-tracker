import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { IconProps } from "@expo/vector-icons/build/createIconSet";

export type DSAvatarProps = {
  size?: 24 | 32 | 48;
  label?: string;
  icon?: IconProps<"">["name"];
  source?: any;
  style?: any;
};

export function DSAvatar({
  size = 48,
  label,
  icon,
  source,
  style,
}: DSAvatarProps) {
  if (source) {
    return (
      <Image
        source={source}
        style={[
          styles.avatar,
          { width: size, height: size, borderRadius: size / 2 },
          style,
        ]}
      />
    );
  }
  if (icon) {
    return (
      <View
        style={[
          styles.avatar,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#E6F7F5",
          },
          style,
        ]}
      >
        <MaterialCommunityIcons name={icon} size={size * 0.6} color="#0FB8A9" />
      </View>
    );
  }
  if (label) {
    return (
      <View
        style={[
          styles.avatar,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#E6F7F5",
          },
          style,
        ]}
      >
        <Text style={[styles.label, { fontSize: size * 0.45 }]}>{label}</Text>
      </View>
    );
  }
  // fallback
  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: "#D1D5DB",
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  label: {
    fontFamily: "Poppins-Bold",
    color: "#0FB8A9",
    textAlign: "center",
  },
});

export default DSAvatar;
