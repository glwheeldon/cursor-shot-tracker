import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import {
  Text,
  Button,
  Card,
  TextInput,
  Avatar,
  Badge,
  ProgressBar,
  HelperText,
} from "react-native-paper";
import { DSInput } from "../../components/DSInput";

export default function DesignSystemShowcase() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Design System Showcase</Text>

      {/* Buttons */}
      <Text style={styles.section}>Buttons</Text>
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonLabel}
        buttonColor="#0FB8A9"
      >
        Primary
      </Button>
      <Button
        mode="outlined"
        style={styles.button}
        labelStyle={styles.buttonLabel}
        textColor="#0FB8A9"
      >
        Secondary
      </Button>
      <Button
        mode="text"
        style={styles.button}
        labelStyle={[styles.buttonLabel, { color: "#0FB8A9" }]}
      >
        Text
      </Button>

      {/* Inputs */}
      <Text style={styles.section}>Inputs</Text>
      <DSInput
        label="Email"
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="name@example.com"
        style={{ marginBottom: 8 }}
      />
      <DSInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        placeholder="••••••••"
        right={null}
        style={{ marginBottom: 8 }}
      />
      <DSInput
        label="Error Example"
        value={password}
        onChangeText={setPassword}
        error="Error state example"
        style={{ marginBottom: 8 }}
      />

      {/* Card */}
      <Text style={styles.section}>Card</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Card Title</Text>
          <Text style={styles.cardDesc}>
            This is a card description. Cards use a white background, 12px
            radius, and md shadow.
          </Text>
        </Card.Content>
      </Card>

      {/* Badge */}
      <Text style={styles.section}>Badge</Text>
      <View style={styles.row}>
        <Badge style={[styles.badge, { backgroundColor: "#0FB8A9" }]}>
          Primary
        </Badge>
        <Badge style={[styles.badge, { backgroundColor: "#10B981" }]}>
          Success
        </Badge>
        <Badge style={[styles.badge, { backgroundColor: "#F59E0B" }]}>
          Warning
        </Badge>
        <Badge style={[styles.badge, { backgroundColor: "#EF4444" }]}>
          Error
        </Badge>
        <Badge style={[styles.badge, { backgroundColor: "#3B82F6" }]}>
          Info
        </Badge>
      </View>

      {/* Avatar */}
      <Text style={styles.section}>Avatar</Text>
      <View style={styles.row}>
        <Avatar.Text
          size={48}
          label="AB"
          style={styles.avatar}
          labelStyle={styles.avatarLabel}
        />
        <Avatar.Icon size={48} icon="account" style={styles.avatar} />
        <Avatar.Image
          size={48}
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.avatar}
        />
      </View>

      {/* ProgressBar */}
      <Text style={styles.section}>ProgressBar</Text>
      <ProgressBar progress={0.6} color="#0FB8A9" style={styles.progress} />

      {/* More components can be added here following the design system */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  content: {
    padding: 24,
    alignItems: "stretch",
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#111827",
    marginBottom: 24,
    textAlign: "center",
  },
  section: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#0FB8A9",
    marginTop: 32,
    marginBottom: 12,
  },
  button: {
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonLabel: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#fff",
  },
  input: {
    height: 48,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#111827",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  errorText: {
    color: "#EF4444",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
  },
  card: {
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#111827",
    marginBottom: 4,
  },
  cardDesc: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
  },
  badge: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#fff",
    marginRight: 8,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    marginRight: 12,
    backgroundColor: "#E6F7F5",
  },
  avatarLabel: {
    fontFamily: "Poppins-Bold",
    color: "#0FB8A9",
    fontSize: 18,
  },
  progress: {
    height: 8,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
    marginBottom: 24,
  },
});
