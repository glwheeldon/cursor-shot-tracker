import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useAuth } from "../../contexts/auth-context";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function MaterialTabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { user, profile } = useAuth();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0FB8A9",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          paddingBottom: 8,
          paddingTop: 8,
          height: 80,
        },
        tabBarLabelStyle: {
          fontFamily: "Poppins-Medium",
          fontSize: 12,
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {/* Coach-specific tabs, only visible to users with role 'coach' */}
      {profile?.role === "coach" && (
        <>
          <Tabs.Screen
            name="coach-dashboard"
            options={{
              title: "Coach",
              tabBarIcon: ({ color }) => (
                <MaterialTabBarIcon name="account-tie" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="coach-players"
            options={{
              title: "Players",
              tabBarIcon: ({ color }) => (
                <MaterialTabBarIcon name="account-group" color={color} />
              ),
            }}
          />
        </>
      )}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialTabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="active-session"
        options={{
          title: "New",
          tabBarIcon: ({ color }) => (
            <MaterialTabBarIcon name="plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color }) => (
            <MaterialTabBarIcon name="chart-bar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialTabBarIcon name="trending-up" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color }) => (
            <MaterialTabBarIcon name="account-multiple" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialTabBarIcon name="account" color={color} />
          ),
        }}
      />
      {/* Keep existing screens but hide them from tab bar */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Showcase",
          href: user ? null : "/index", // Only show when not logged in
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="sessions"
        options={{
          href: null, // Hide from tab bar, accessible via navigation
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          href: null, // Hide from tab bar
        }}
      />
    </Tabs>
  );
}
