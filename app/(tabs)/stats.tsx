import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { useAuth } from "../../contexts/auth-context";
import DSHeader from "../../components/DSHeader";
import DSCard, { DSCardContent } from "../../components/DSCard";
import DSLoadingSpinner from "../../components/DSLoadingSpinner";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function StatsScreen() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalShots: 56,
    madeShots: 48,
    shootingPercentage: 85.7,
    totalSessions: 5,
    averageAccuracy: 84.7,
    bestSession: 95.0,
    improvementTrend: "+2.3%",
  });
  const [loading, setLoading] = useState(false);

  // Mock chart data points
  const chartData = [
    { date: "20/05/2025", daily: 100, average: 95 },
    { date: "21/05/2025", daily: 90, average: 92 },
    { date: "22/05/2025", daily: 85, average: 89 },
    { date: "23/05/2025", daily: 70, average: 85 },
    { date: "24/05/2025", daily: 0, average: 82 },
    { date: "25/05/2025", daily: 100, average: 85 },
  ];

  return (
    <View style={styles.container}>
      <DSHeader
        title="Statistics"
        userName={profile?.display_name || profile?.full_name || "User"}
        logoSrc={require("../../assets/images/shot-tracker-main-logo.png")}
        onAvatarPress={() => router.push("/profile")}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Total Shots Card */}
        <DSCard style={styles.statCard}>
          <DSCardContent>
            <Text style={styles.cardTitle}>Total Shots</Text>
            <Text style={styles.cardSubtitle}>All shots tracked</Text>
            <Text style={styles.cardValue}>{stats.totalShots}</Text>
          </DSCardContent>
        </DSCard>

        {/* Shooting Percentage Trend Card */}
        <DSCard style={styles.chartCard}>
          <DSCardContent>
            <Text style={styles.cardTitle}>Shooting Percentage Trend</Text>
            <Text style={styles.cardSubtitle}>
              Daily results with 7-day rolling average
            </Text>

            {/* Simple Chart Visualization */}
            <View style={styles.chartContainer}>
              <View style={styles.chartYAxis}>
                <Text style={styles.axisLabel}>100</Text>
                <Text style={styles.axisLabel}>75</Text>
                <Text style={styles.axisLabel}>50</Text>
                <Text style={styles.axisLabel}>25</Text>
                <Text style={styles.axisLabel}>0</Text>
              </View>

              <View style={styles.chartArea}>
                {/* Chart Grid Lines */}
                <View style={styles.gridLines}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <View key={i} style={styles.gridLine} />
                  ))}
                </View>

                {/* Chart Data Points */}
                <View style={styles.chartPoints}>
                  {chartData.map((point, index) => (
                    <View key={index} style={styles.dataPointColumn}>
                      {/* Daily percentage point */}
                      <View
                        style={[
                          styles.dataPoint,
                          styles.dailyPoint,
                          { bottom: `${point.daily}%` },
                        ]}
                      />
                      {/* 7-day average point */}
                      <View
                        style={[
                          styles.dataPoint,
                          styles.averagePoint,
                          { bottom: `${point.average}%` },
                        ]}
                      />
                    </View>
                  ))}
                </View>

                {/* X-axis labels */}
                <View style={styles.xAxisLabels}>
                  <Text style={styles.xAxisLabel}>20/05/2025</Text>
                  <Text style={styles.xAxisLabel}>20/05/2025</Text>
                </View>
              </View>
            </View>

            {/* Legend */}
            <View style={styles.legend}>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendDot, { backgroundColor: "#0FB8A9" }]}
                />
                <Text style={styles.legendText}>Daily %</Text>
              </View>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendDot, { backgroundColor: "#3B82F6" }]}
                />
                <Text style={styles.legendText}>7-Day Avg</Text>
              </View>
            </View>
          </DSCardContent>
        </DSCard>

        {/* Additional Stats Grid */}
        <View style={styles.statsGrid}>
          <DSCard style={styles.smallStatCard}>
            <DSCardContent>
              <View style={styles.statHeader}>
                <MaterialCommunityIcons
                  name="trending-up"
                  size={24}
                  color="#10B981"
                />
              </View>
              <Text style={styles.statValue}>{stats.shootingPercentage}%</Text>
              <Text style={styles.statLabel}>Overall Accuracy</Text>
            </DSCardContent>
          </DSCard>

          <DSCard style={styles.smallStatCard}>
            <DSCardContent>
              <View style={styles.statHeader}>
                <MaterialCommunityIcons
                  name="trophy"
                  size={24}
                  color="#F59E0B"
                />
              </View>
              <Text style={styles.statValue}>{stats.bestSession}%</Text>
              <Text style={styles.statLabel}>Best Session</Text>
            </DSCardContent>
          </DSCard>

          <DSCard style={styles.smallStatCard}>
            <DSCardContent>
              <View style={styles.statHeader}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="#3B82F6"
                />
              </View>
              <Text style={styles.statValue}>{stats.totalSessions}</Text>
              <Text style={styles.statLabel}>Total Sessions</Text>
            </DSCardContent>
          </DSCard>

          <DSCard style={styles.smallStatCard}>
            <DSCardContent>
              <View style={styles.statHeader}>
                <MaterialCommunityIcons
                  name="chart-line"
                  size={24}
                  color="#EF4444"
                />
              </View>
              <Text style={styles.statValue}>{stats.improvementTrend}</Text>
              <Text style={styles.statLabel}>This Week</Text>
            </DSCardContent>
          </DSCard>
        </View>

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
  statCard: {
    marginBottom: 24,
  },
  chartCard: {
    marginBottom: 24,
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#111827",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
  },
  cardValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 48,
    color: "#111827",
  },
  chartContainer: {
    height: 200,
    flexDirection: "row",
    marginVertical: 16,
  },
  chartYAxis: {
    width: 30,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 8,
  },
  axisLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#9CA3AF",
  },
  chartArea: {
    flex: 1,
    position: "relative",
  },
  gridLines: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
    justifyContent: "space-between",
  },
  gridLine: {
    height: 1,
    backgroundColor: "#E5E7EB",
    opacity: 0.5,
  },
  chartPoints: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dataPointColumn: {
    flex: 1,
    position: "relative",
  },
  dataPoint: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    left: "50%",
    marginLeft: -4,
  },
  dailyPoint: {
    backgroundColor: "#0FB8A9",
  },
  averagePoint: {
    backgroundColor: "#3B82F6",
  },
  xAxisLabels: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  xAxisLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#9CA3AF",
  },
  legend: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#6B7280",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  smallStatCard: {
    width: "48%",
    marginBottom: 16,
  },
  statHeader: {
    alignItems: "flex-end",
    marginBottom: 8,
  },
  statValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#111827",
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 32,
  },
});
