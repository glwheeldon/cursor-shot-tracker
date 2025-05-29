import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useAuth } from "../../../contexts/auth-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import DSHeader from "../../../components/DSHeader";
import DSCard, { DSCardContent } from "../../../components/DSCard";
import DSButton from "../../../components/DSButton";
import DSLoadingSpinner from "../../../components/DSLoadingSpinner";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SessionDetailScreen() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [session, setSession] = useState({
    id: "1",
    date: "23/05/2025",
    sport: "Sport",
    location: "Local Court",
    totalShots: 25,
    madeShots: 18,
    accuracy: 72.0,
    duration: "45 min",
    status: "completed",
    notes: "Good session, focused on free throws and mid-range shots.",
    startTime: "2:30 PM",
    endTime: "3:15 PM",
  });
  const [shots, setShots] = useState([
    { id: "1", time: "2:31 PM", made: true, type: "Free Throw" },
    { id: "2", time: "2:32 PM", made: false, type: "Mid Range" },
    { id: "3", time: "2:33 PM", made: true, type: "Free Throw" },
    { id: "4", time: "2:34 PM", made: true, type: "Three Point" },
    { id: "5", time: "2:35 PM", made: false, type: "Mid Range" },
  ]);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <DSHeader
        title="Session Details"
        userName={profile?.display_name || profile?.full_name || "User"}
        logoSrc={require("../../../assets/images/shot-tracker-main-logo.png")}
        onAvatarPress={() => router.push("/profile")}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Session Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="#0FB8A9"
            />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>

        {/* Session Info Card */}
        <DSCard style={styles.sessionCard}>
          <DSCardContent>
            <View style={styles.sessionHeader}>
              <View>
                <Text style={styles.sessionTitle}>Session {session.date}</Text>
                <Text style={styles.sessionLocation}>{session.location}</Text>
                <Text style={styles.sessionTime}>
                  {session.startTime} - {session.endTime}
                </Text>
              </View>
              <View style={styles.sportBadge}>
                <Text style={styles.sportBadgeText}>{session.sport}</Text>
              </View>
            </View>

            {session.notes && (
              <View style={styles.notesSection}>
                <Text style={styles.notesLabel}>Notes:</Text>
                <Text style={styles.notesText}>{session.notes}</Text>
              </View>
            )}
          </DSCardContent>
        </DSCard>

        {/* Statistics Card */}
        <DSCard style={styles.statsCard}>
          <DSCardContent>
            <Text style={styles.cardTitle}>Session Statistics</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <MaterialCommunityIcons
                  name="target"
                  size={32}
                  color="#0FB8A9"
                />
                <Text style={styles.statValue}>{session.totalShots}</Text>
                <Text style={styles.statLabel}>Total Shots</Text>
              </View>
              <View style={styles.statItem}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={32}
                  color="#10B981"
                />
                <Text style={styles.statValue}>{session.madeShots}</Text>
                <Text style={styles.statLabel}>Made</Text>
              </View>
              <View style={styles.statItem}>
                <MaterialCommunityIcons
                  name="trending-up"
                  size={32}
                  color="#3B82F6"
                />
                <Text style={styles.statValue}>{session.accuracy}%</Text>
                <Text style={styles.statLabel}>Accuracy</Text>
              </View>
              <View style={styles.statItem}>
                <MaterialCommunityIcons
                  name="clock"
                  size={32}
                  color="#F59E0B"
                />
                <Text style={styles.statValue}>{session.duration}</Text>
                <Text style={styles.statLabel}>Duration</Text>
              </View>
            </View>
          </DSCardContent>
        </DSCard>

        {/* Shot History Card */}
        <DSCard style={styles.shotsCard}>
          <DSCardContent>
            <Text style={styles.cardTitle}>Shot History</Text>
            {shots.map((shot) => (
              <View key={shot.id} style={styles.shotItem}>
                <View style={styles.shotInfo}>
                  <MaterialCommunityIcons
                    name={shot.made ? "check-circle" : "close-circle"}
                    size={24}
                    color={shot.made ? "#10B981" : "#EF4444"}
                  />
                  <View style={styles.shotDetails}>
                    <Text style={styles.shotType}>{shot.type}</Text>
                    <Text style={styles.shotTime}>{shot.time}</Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.shotResult,
                    { color: shot.made ? "#10B981" : "#EF4444" },
                  ]}
                >
                  {shot.made ? "Made" : "Missed"}
                </Text>
              </View>
            ))}
          </DSCardContent>
        </DSCard>

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
  header: {
    marginBottom: 24,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#0FB8A9",
    marginLeft: 8,
  },
  sessionCard: {
    marginBottom: 24,
  },
  sessionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  sessionTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#111827",
    marginBottom: 4,
  },
  sessionLocation: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 2,
  },
  sessionTime: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#9CA3AF",
  },
  sportBadge: {
    backgroundColor: "#0FB8A9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  sportBadgeText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#fff",
  },
  notesSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  notesLabel: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#111827",
    marginBottom: 4,
  },
  notesText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
    lineHeight: 24,
  },
  statsCard: {
    marginBottom: 24,
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#111827",
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statItem: {
    width: "48%",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    paddingVertical: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  statValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#111827",
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  shotsCard: {
    marginBottom: 24,
  },
  shotItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  shotInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  shotDetails: {
    marginLeft: 12,
  },
  shotType: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#111827",
  },
  shotTime: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
  shotResult: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 32,
  },
});
