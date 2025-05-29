import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth-context";

import CoachRouteGuard from "../../components/CoachRouteGuard";

export default function CoachDashboardScreen() {
  const { user } = useAuth();
  // TODO: Fetch coach dashboard data (player stats, activity, etc.)
  // TODO: Add offline support for dashboard data (cache and sync)

  return (
    <CoachRouteGuard>
      <View style={styles.container}>
        <Text style={styles.title}>Coach Dashboard</Text>
        {/* Placeholder for aggregated player stats, activity feed, etc. */}
        <Text>Overview of followed players, recent activity, and key metrics will appear here.</Text>
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
