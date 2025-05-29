import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Text } from "react-native-paper";
import { useAuth } from "../../contexts/auth-context";
import DSHeader from "../../components/DSHeader";
import DSCard, { DSCardContent } from "../../components/DSCard";
import DSButton from "../../components/DSButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ActiveSessionScreen() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const [sessionStats, setSessionStats] = useState({
    totalShots: 0,
    madeShots: 0,
    missedShots: 0,
    shootingPercentage: 0.0,
  });
  const [sessionStartTime] = useState(new Date());

  const handleMadeShot = () => {
    setSessionStats((prev) => {
      const newMade = prev.madeShots + 1;
      const newTotal = prev.totalShots + 1;
      const newPercentage = newTotal > 0 ? (newMade / newTotal) * 100 : 0;

      return {
        totalShots: newTotal,
        madeShots: newMade,
        missedShots: prev.missedShots,
        shootingPercentage: Math.round(newPercentage * 10) / 10,
      };
    });
  };

  const handleMissedShot = () => {
    setSessionStats((prev) => {
      const newMissed = prev.missedShots + 1;
      const newTotal = prev.totalShots + 1;
      const newPercentage =
        newTotal > 0 ? (prev.madeShots / newTotal) * 100 : 0;

      return {
        totalShots: newTotal,
        madeShots: prev.madeShots,
        missedShots: newMissed,
        shootingPercentage: Math.round(newPercentage * 10) / 10,
      };
    });
  };

  const handleEndSession = () => {
    Alert.alert("End Session", "Are you sure you want to end this session?", [
      { text: "Continue", style: "cancel" },
      {
        text: "End Session",
        style: "destructive",
        onPress: () => {
          // Save session data and navigate back
          router.push("/sessions");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <DSHeader
        title="Shot Tracker"
        userName={profile?.display_name || profile?.full_name || "User"}
        logoSrc={require("../../assets/images/shot-tracker-main-logo.png")}
        onAvatarPress={() => router.push("/profile")}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Active Session</Text>
          <TouchableOpacity
            onPress={() => router.push("/sessions")}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>Back to Sessions</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Display */}
        <DSCard style={styles.statsCard}>
          <DSCardContent>
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
          </DSCardContent>
        </DSCard>

        {/* Shot Buttons */}
        <View style={styles.shotButtons}>
          <TouchableOpacity
            style={styles.madeButton}
            onPress={handleMadeShot}
            activeOpacity={0.8}
          >
            <Text style={styles.shotButtonText}>Made</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.missedButton}
            onPress={handleMissedShot}
            activeOpacity={0.8}
          >
            <Text style={styles.shotButtonText}>Missed</Text>
          </TouchableOpacity>
        </View>

        {/* End Session Button */}
        <DSButton
          variant="secondary"
          onPress={handleEndSession}
          style={styles.endSessionButton}
          fullWidth
        >
          End Session
        </DSButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
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
    marginBottom: 48,
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
    marginTop: "auto",
    marginBottom: 32,
  },
});
