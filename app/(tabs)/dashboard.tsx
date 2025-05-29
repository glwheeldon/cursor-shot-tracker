import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useAuth } from "../../contexts/auth-context";
import DSHeader from "../../components/DSHeader";
import DSCard, {
  DSCardHeader,
  DSCardTitle,
  DSCardContent,
} from "../../components/DSCard";
import DSButton from "../../components/DSButton";
import DSLoadingSpinner from "../../components/DSLoadingSpinner";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DashboardScreen() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalShots: 72,
    madeShots: 61,
    shootingPercentage: 84.7,
    totalSessions: 7,
  });
  const [recentSessions, setRecentSessions] = useState([
    {
      id: "1",
      date: "23/05/2025",
      sport: "Sport",
      totalShots: 0,
      madeShots: 0,
      accuracy: 0.0,
    },
  ]);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <DSHeader
        title="Shot Tracker"
        userName={profile?.display_name || profile?.full_name || "User"}
        logoSrc={require("../../assets/images/shot-tracker-main-logo.png")}
        onAvatarPress={() => router.push("/profile")}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <DSCard style={styles.statCard}>
            <DSCardContent>
              <View style={styles.statHeader}>
                <Text style={styles.statLabel}>Total</Text>
                <MaterialCommunityIcons
                  name="target"
                  size={24}
                  color="#6B7280"
                />
              </View>
              <Text style={styles.statLabel}>Shots</Text>
              <Text style={styles.statValue}>{stats.totalShots}</Text>
              <Text style={styles.statSubtext}>All time</Text>
            </DSCardContent>
          </DSCard>

          <DSCard style={styles.statCard}>
            <DSCardContent>
              <View style={styles.statHeader}>
                <Text style={styles.statLabel}>Made</Text>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={24}
                  color="#6B7280"
                />
              </View>
              <Text style={styles.statLabel}>Shots</Text>
              <Text style={styles.statValue}>{stats.madeShots}</Text>
              <Text style={styles.statSubtext}>All time</Text>
            </DSCardContent>
          </DSCard>

          <DSCard style={styles.statCard}>
            <DSCardContent>
              <View style={styles.statHeader}>
                <Text style={styles.statLabel}>Shooting</Text>
                <MaterialCommunityIcons
                  name="trending-up"
                  size={24}
                  color="#6B7280"
                />
              </View>
              <Text style={styles.statLabel}>%</Text>
              <Text style={styles.statValue}>{stats.shootingPercentage}%</Text>
              <Text style={styles.statSubtext}>All time</Text>
            </DSCardContent>
          </DSCard>

          <DSCard style={styles.statCard}>
            <DSCardContent>
              <View style={styles.statHeader}>
                <Text style={styles.statLabel}>Sessions</Text>
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="#6B7280"
                />
              </View>
              <Text style={styles.statValue}>{stats.totalSessions}</Text>
              <Text style={styles.statSubtext}>Recent</Text>
            </DSCardContent>
          </DSCard>
        </View>

        {/* Recent Sessions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Sessions</Text>
          <TouchableOpacity onPress={() => router.push("/sessions")}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        {recentSessions.map((session) => (
          <DSCard key={session.id} style={styles.sessionCard}>
            <DSCardContent>
              <Text style={styles.sessionTitle}>Session {session.date}</Text>
              <View style={styles.sessionStats}>
                <View style={styles.sessionStat}>
                  <MaterialCommunityIcons
                    name="target"
                    size={20}
                    color="#0FB8A9"
                  />
                  <Text style={styles.sessionStatValue}>
                    {session.totalShots}
                  </Text>
                  <Text style={styles.sessionStatLabel}>Total</Text>
                </View>
                <View style={styles.sessionStat}>
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={20}
                    color="#10B981"
                  />
                  <Text style={styles.sessionStatValue}>
                    {session.madeShots}
                  </Text>
                  <Text style={styles.sessionStatLabel}>Made</Text>
                </View>
                <View style={styles.sessionStat}>
                  <MaterialCommunityIcons
                    name="trending-up"
                    size={20}
                    color="#3B82F6"
                  />
                  <Text style={styles.sessionStatValue}>
                    {session.accuracy}%
                  </Text>
                  <Text style={styles.sessionStatLabel}>Accuracy</Text>
                </View>
              </View>
              <View style={styles.sessionFooter}>
                <View style={styles.sportBadge}>
                  <Text style={styles.sportBadgeText}>{session.sport}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => router.push(`/sessions/${session.id}`)}
                >
                  <Text style={styles.viewDetailsText}>View details →</Text>
                </TouchableOpacity>
              </View>
            </DSCardContent>
          </DSCard>
        ))}

        {loading && (
          <View style={styles.loadingContainer}>
            <DSLoadingSpinner size={32} />
          </View>
        )}
      </ScrollView>
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
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 100,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  statCard: {
    width: "48%",
    marginBottom: 16,
  },
  statHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#6B7280",
  },
  statValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 32,
    color: "#111827",
    marginVertical: 4,
  },
  statSubtext: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#9CA3AF",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#111827",
  },
  viewAllText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#0FB8A9",
  },
  sessionCard: {
    marginBottom: 16,
  },
  sessionTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#111827",
    marginBottom: 16,
  },
  sessionStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  sessionStat: {
    alignItems: "center",
  },
  sessionStatValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#111827",
    marginTop: 4,
  },
  sessionStatLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
  sessionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sportBadge: {
    backgroundColor: "#0FB8A9",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  sportBadgeText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#fff",
  },
  viewDetailsText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#0FB8A9",
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 32,
  },
});
