import React from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import DSHeader from "../../../../components/DSHeader";
import DSCard, { DSCardContent } from "../../../../components/DSCard";
import DSButton from "../../../../components/DSButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SessionsStoryboard() {
  const sessions = [
    {
      id: "1",
      date: "23/05/2025",
      sport: "Sport",
      totalShots: 25,
      madeShots: 18,
      accuracy: 72.0,
    },
    {
      id: "2",
      date: "22/05/2025",
      sport: "Sport",
      totalShots: 30,
      madeShots: 24,
      accuracy: 80.0,
    },
    {
      id: "3",
      date: "21/05/2025",
      sport: "Sport",
      totalShots: 20,
      madeShots: 15,
      accuracy: 75.0,
    },
  ];

  return (
    <>
      <DSHeader
        title="Sessions"
        userName="Demo User"
        logoSrc={require("../../../../assets/images/shot-tracker-main-logo.png")}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Your Sessions</Text>
          <DSButton variant="primary" size="sm">
            New Session
          </DSButton>
        </View>

        {sessions.map((session) => (
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
                <TouchableOpacity>
                  <Text style={styles.viewDetailsText}>View details →</Text>
                </TouchableOpacity>
              </View>
            </DSCardContent>
          </DSCard>
        ))}
      </ScrollView>
    </>
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
});
