import React, { useState } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import DSHeader from "../../../../components/DSHeader";
import DSCard, { DSCardContent } from "../../../../components/DSCard";
import DSTabs from "../../../../components/DSTabs";
import DSAvatar from "../../../../components/DSAvatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FeedStoryboard() {
  const [activeTab, setActiveTab] = useState(0);
  const activities = [
    {
      id: "1",
      type: "session_completed",
      user: {
        name: "Your Session",
        avatar: null,
        isCurrentUser: true,
      },
      timestamp: "3 minutes ago",
      session: {
        sport: "Sport",
        totalShots: 12,
        madeShots: 10,
        accuracy: 83.3,
      },
      description: "You completed a shooting session with 10/12 shots made.",
    },
    {
      id: "2",
      type: "session_completed",
      user: {
        name: "Your Session",
        avatar: null,
        isCurrentUser: true,
      },
      timestamp: "3 days ago",
      session: {
        sport: "Sport",
        totalShots: 10,
        madeShots: 8,
        accuracy: 80.0,
      },
      description: "You completed a shooting session with 8/10 shots made.",
    },
  ];

  const tabs = ["All", "My Activity", "Following"];

  const filteredActivities = activities.filter((activity) => {
    if (activeTab === 1) return activity.user.isCurrentUser; // My Activity
    if (activeTab === 2) return !activity.user.isCurrentUser; // Following
    return true; // All
  });

  const renderActivityCard = (activity: any) => {
    return (
      <DSCard key={activity.id} style={styles.activityCard}>
        <DSCardContent>
          <View style={styles.activityHeader}>
            <View style={styles.userInfo}>
              <DSAvatar size={48} icon="account" style={styles.userAvatar} />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{activity.user.name}</Text>
                <Text style={styles.timestamp}>{activity.timestamp}</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="check-circle"
              size={24}
              color="#10B981"
            />
          </View>

          <Text style={styles.activityDescription}>{activity.description}</Text>

          <View style={styles.sessionStats}>
            <View style={styles.sessionStat}>
              <Text style={styles.sessionStatValue}>
                {activity.session.totalShots}
              </Text>
              <Text style={styles.sessionStatLabel}>Total Shots</Text>
            </View>
            <View style={styles.sessionStat}>
              <Text style={[styles.sessionStatValue, { color: "#10B981" }]}>
                {activity.session.madeShots}
              </Text>
              <Text style={styles.sessionStatLabel}>Made</Text>
            </View>
            <View style={styles.sessionStat}>
              <Text style={[styles.sessionStatValue, { color: "#3B82F6" }]}>
                {activity.session.accuracy}%
              </Text>
              <Text style={styles.sessionStatLabel}>Accuracy</Text>
            </View>
          </View>

          <View style={styles.activityFooter}>
            <TouchableOpacity style={styles.viewDetailsButton}>
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeButton}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={20}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
        </DSCardContent>
      </DSCard>
    );
  };

  return (
    <>
      <DSHeader
        title="Activity Feed"
        userName="Demo User"
        logoSrc={require("../../../../assets/images/shot-tracker-main-logo.png")}
      />

      <View style={[styles.container, styles.content]}>
        <View style={styles.feedHeader}>
          <Text style={styles.title}>Activity Feed</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.followButton}>
              <MaterialCommunityIcons
                name="account-plus"
                size={20}
                color="#0FB8A9"
              />
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationButton}>
              <MaterialCommunityIcons name="bell" size={24} color="#6B7280" />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
          </View>
        </View>

        <DSTabs
          tabs={tabs}
          activeIndex={activeTab}
          onTabChange={setActiveTab}
          style={styles.tabs}
        />

        <ScrollView
          style={styles.scrollContent}
          contentContainerStyle={styles.scrollContentContainer}
        >
          {filteredActivities.length > 0 ? (
            filteredActivities.map(renderActivityCard)
          ) : (
            <View style={styles.emptyState}>
              <MaterialCommunityIcons name="target" size={64} color="#D1D5DB" />
              <Text style={styles.emptyStateTitle}>No Activity Yet</Text>
              <Text style={styles.emptyStateText}>
                {activeTab === 1
                  ? "Complete your first session to see your activity here."
                  : activeTab === 2
                    ? "Follow friends to see their activity here."
                    : "No recent activity to show."}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
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
    paddingHorizontal: 24,
  },
  feedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#111827",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  followButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  followButtonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#0FB8A9",
    marginLeft: 4,
  },
  notificationButton: {
    position: "relative",
    padding: 8,
  },
  notificationBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    backgroundColor: "#EF4444",
    borderRadius: 4,
  },
  tabs: {
    marginBottom: 16,
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 100,
  },
  activityCard: {
    marginBottom: 16,
  },
  activityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    backgroundColor: "#E6F7F5",
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#111827",
  },
  timestamp: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
  activityDescription: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#111827",
    marginBottom: 16,
    lineHeight: 24,
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
  },
  sessionStatLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
  activityFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewDetailsButton: {
    flex: 1,
  },
  viewDetailsText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#0FB8A9",
  },
  likeButton: {
    padding: 8,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 64,
  },
  emptyStateTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#111827",
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 32,
  },
});
