import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useAuth } from "../../contexts/auth-context";
import DSHeader from "../../components/DSHeader";
import DSCard, { DSCardContent } from "../../components/DSCard";
import DSButton from "../../components/DSButton";
import DSLoadingSpinner from "../../components/DSLoadingSpinner";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { OfflineService } from "../../services/offline-service";

export default function SessionsScreen() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState<any[]>([]);

  // Load sessions from offline storage on mount
  useEffect(() => {
    OfflineService.loadSessions().then((data) => {
      setSessions(data || []);
      setLoading(false);
    });
  }, []);

  // Save sessions to offline storage whenever they change
  useEffect(() => {
    if (!loading) {
      OfflineService.saveSessions(sessions);
    }
  }, [sessions, loading]);
      totalShots: 25,
      madeShots: 18,
      accuracy: 72.0,
      duration: "45 min",
      status: "completed",
    },
    {
      id: "2",
      date: "22/05/2025",
      sport: "Sport",
      location: "Home Court",
      totalShots: 30,
      madeShots: 24,
      accuracy: 80.0,
      duration: "60 min",
      status: "completed",
    },
    {
      id: "3",
      date: "20/05/2025",
      sport: "Sport",
      location: "School Gym",
      totalShots: 17,
      madeShots: 19,
      accuracy: 89.5,
      duration: "35 min",
      status: "completed",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleNewSession = () => {
    // For now, navigate to a placeholder or show a modal
    router.push("/sessions/new");
  };

  return (
    <View style={styles.container}>
      <DSHeader
        title="Sessions"
        userName={profile?.display_name || profile?.full_name || "User"}
        logoSrc={require("../../assets/images/shot-tracker-main-logo.png")}
        onAvatarPress={() => router.push("/profile")}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Your Sessions</Text>
          <DSButton
            variant="primary"
            size="sm"
            onPress={handleNewSession}
            style={styles.newButton}
          >
            + New Session
          </DSButton>
        </View>

        {sessions.map((session) => (
          <DSCard key={session.id} style={styles.sessionCard}>
            <DSCardContent>
              <View style={styles.sessionHeader}>
                <View>
                  <Text style={styles.sessionDate}>Session {session.date}</Text>
                  <Text style={styles.sessionLocation}>{session.location}</Text>
                </View>
                <View style={styles.sportBadge}>
                  <Text style={styles.sportBadgeText}>{session.sport}</Text>
                </View>
              </View>

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
                <View style={styles.sessionStat}>
                  <MaterialCommunityIcons
                    name="clock"
                    size={20}
                    color="#F59E0B"
                  />
                  <Text style={styles.sessionStatValue}>
                    {session.duration}
                  </Text>
                  <Text style={styles.sessionStatLabel}>Duration</Text>
                </View>
              </View>

              <View style={styles.sessionFooter}>
                <TouchableOpacity
                  onPress={() => router.push(`/sessions/${session.id}`)}
                  style={styles.viewDetailsButton}
                >
                  <Text style={styles.viewDetailsText}>View Details</Text>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={16}
                    color="#0FB8A9"
                  />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#111827",
  },
  newButton: {
    paddingHorizontal: 16,
  },
  sessionCard: {
    marginBottom: 16,
  },
  sessionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  sessionDate: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#111827",
  },
  sessionLocation: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
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
    fontSize: 18,
    color: "#111827",
    marginTop: 4,
  },
  sessionStatLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  sessionFooter: {
    alignItems: "flex-end",
  },
  viewDetailsButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewDetailsText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#0FB8A9",
    marginRight: 4,
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 32,
  },
});
