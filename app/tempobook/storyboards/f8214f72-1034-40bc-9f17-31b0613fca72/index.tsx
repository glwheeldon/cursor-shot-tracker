import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

export default function ActiveSessionStoryboard() {
  // Using static data instead of state to avoid unnecessary re-renders
  const sessionStats = {
    totalShots: 12,
    madeShots: 8,
    missedShots: 4,
    shootingPercentage: 66.7,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <View style={styles.logo} />
            <Text style={styles.headerTitle}>Shot Tracker</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.userName}>Demo User</Text>
            <View style={styles.avatar} />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Active Session</Text>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Back to Sessions</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Display */}
        <View style={styles.statsCard}>
          <View style={styles.cardContent}>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{sessionStats.totalShots}</Text>
                <Text style={styles.statLabel}>Total Shots</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {sessionStats.shootingPercentage}%
                </Text>
                <Text style={styles.statLabel}>Shooting %</Text>
              </View>
            </View>

            <View style={styles.statsGrid}>
              <View style={[styles.statItem, styles.madeStatItem]}>
                <Text style={[styles.statValue, styles.madeStatValue]}>
                  {sessionStats.madeShots}
                </Text>
                <Text style={styles.statLabel}>Made</Text>
              </View>
              <View style={[styles.statItem, styles.missedStatItem]}>
                <Text style={[styles.statValue, styles.missedStatValue]}>
                  {sessionStats.missedShots}
                </Text>
                <Text style={styles.statLabel}>Missed</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Shot Buttons */}
        <View style={styles.shotButtons}>
          <TouchableOpacity style={styles.madeButton} activeOpacity={0.8}>
            <Text style={styles.shotButtonText}>Made</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.missedButton} activeOpacity={0.8}>
            <Text style={styles.shotButtonText}>Missed</Text>
          </TouchableOpacity>
        </View>

        {/* End Session Button */}
        <TouchableOpacity style={styles.endSessionButton}>
          <Text style={styles.endSessionText}>End Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 12,
    backgroundColor: "#0FB8A9",
    borderRadius: 4,
  },
  headerTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#111827",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#111827",
    marginRight: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E6F7F5",
  },
  content: {
    flex: 1,
    padding: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#111827",
  },
  backButton: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  backButtonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#6B7280",
  },
  statsCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 48,
  },
  cardContent: {
    marginBottom: 8,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingVertical: 24,
    borderRadius: 12,
    marginHorizontal: 8,
  },
  madeStatItem: {
    backgroundColor: "#ECFDF5",
  },
  missedStatItem: {
    backgroundColor: "#FEF2F2",
  },
  statValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 48,
    color: "#111827",
    marginBottom: 8,
  },
  madeStatValue: {
    color: "#10B981",
  },
  missedStatValue: {
    color: "#EF4444",
  },
  statLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#6B7280",
  },
  shotButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 48,
  },
  madeButton: {
    flex: 1,
    backgroundColor: "#10B981",
    paddingVertical: 48,
    borderRadius: 12,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  missedButton: {
    flex: 1,
    backgroundColor: "#EF4444",
    paddingVertical: 48,
    borderRadius: 12,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  shotButtonText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#fff",
  },
  endSessionButton: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 32,
  },
  endSessionText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#6B7280",
  },
});
