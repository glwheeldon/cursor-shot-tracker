import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export type DSTabsProps = {
  tabs: string[];
  activeIndex: number;
  onTabChange: (index: number) => void;
  style?: any;
};

export function DSTabs({ tabs, activeIndex, onTabChange, style }: DSTabsProps) {
  return (
    <View style={[styles.tabs, style]}>
      {tabs.map((tab, idx) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeIndex === idx && styles.activeTab]}
          onPress={() => onTabChange(idx)}
        >
          <Text
            style={[
              styles.tabLabel,
              activeIndex === idx && styles.activeTabLabel,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#0FB8A9",
  },
  tabLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#6B7280",
  },
  activeTabLabel: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
  },
});

export default DSTabs;
