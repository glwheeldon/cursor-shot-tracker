import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth-context";

import CoachRouteGuard from "../../components/CoachRouteGuard";

export default function CoachPlayersScreen() {
  const { user } = useAuth();
  // TODO: Fetch and manage player list for coaches
  // TODO: Add offline support for player management (cache and sync)

  return (
    <CoachRouteGuard>
      <View style={styles.container}>
        <Text style={styles.title}>Player Management</Text>
        {/* Placeholder for player search, list, and management UI */}
        <Text>Search, view, and manage players here.</Text>
      </View>
    </CoachRouteGuard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
