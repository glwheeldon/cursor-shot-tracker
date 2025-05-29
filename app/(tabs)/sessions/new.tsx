import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text } from "react-native-paper";
import { useAuth } from "../../../contexts/auth-context";
import DSHeader from "../../../components/DSHeader";
import DSCard, { DSCardContent } from "../../../components/DSCard";
import DSButton from "../../../components/DSButton";
import DSInput from "../../../components/DSInput";
import DSSelect from "../../../components/DSSelect";
import { useRouter } from "expo-router";

export default function NewSessionScreen() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    sport: "Sport",
    location: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const sportOptions = [
    { label: "Basketball", value: "Basketball" },
    { label: "Netball", value: "Netball" },
    { label: "Soccer", value: "Soccer" },
    { label: "Hockey", value: "Hockey" },
    { label: "Other", value: "Other" },
  ];

  const handleStartSession = async () => {
    if (!formData.sport || !formData.location) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      // In a real app, this would create a session in the database
      // For now, we'll just navigate to the active session screen
      router.push("/active-session");
    } catch (error) {
      Alert.alert("Error", "Failed to start session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <DSHeader
        title="New Session"
        userName={profile?.display_name || profile?.full_name || "User"}
        logoSrc={require("../../../assets/images/shot-tracker-main-logo.png")}
        onAvatarPress={() => router.push("/profile")}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Start New Session</Text>
        <Text style={styles.subtitle}>
          Set up your shooting session details
        </Text>

        <DSCard style={styles.formCard}>
          <DSCardContent>
            <DSSelect
              label="Sport *"
              value={formData.sport}
              onChange={(value) => setFormData({ ...formData, sport: value })}
              options={sportOptions}
              style={styles.input}
            />

            <DSInput
              label="Location *"
              value={formData.location}
              onChangeText={(text) =>
                setFormData({ ...formData, location: text })
              }
              placeholder="e.g., Local Court, Home Gym"
              style={styles.input}
            />

            <DSInput
              label="Notes (Optional)"
              value={formData.notes}
              onChangeText={(text) => setFormData({ ...formData, notes: text })}
              placeholder="Any additional notes about this session"
              style={styles.input}
            />

            <DSButton
              variant="primary"
              onPress={handleStartSession}
              loading={loading}
              disabled={loading}
              style={styles.startButton}
              fullWidth
            >
              Start Session
            </DSButton>

            <DSButton
              variant="secondary"
              onPress={() => router.back()}
              style={styles.cancelButton}
              fullWidth
            >
              Cancel
            </DSButton>
          </DSCardContent>
        </DSCard>
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
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 32,
  },
  formCard: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  startButton: {
    marginTop: 16,
    marginBottom: 12,
  },
  cancelButton: {
    marginBottom: 8,
  },
});
