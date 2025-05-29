import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text } from "react-native-paper";
import DSHeader from "../../../../components/DSHeader";
import DSCard, { DSCardContent } from "../../../../components/DSCard";
import DSButton from "../../../../components/DSButton";
import DSInput from "../../../../components/DSInput";
import DSSelect from "../../../../components/DSSelect";

export default function NewSessionStoryboard() {
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

  return (
    <>
      <DSHeader
        title="New Session"
        userName="Demo User"
        logoSrc={require("../../../../assets/images/shot-tracker-main-logo.png")}
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
              loading={loading}
              disabled={loading}
              style={styles.startButton}
              fullWidth
            >
              Start Session
            </DSButton>

            <DSButton variant="secondary" style={styles.cancelButton} fullWidth>
              Cancel
            </DSButton>
          </DSCardContent>
        </DSCard>
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
