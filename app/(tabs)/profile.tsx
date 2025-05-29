import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Text } from "react-native-paper";
import { useAuth } from "../../contexts/auth-context";
import DSHeader from "../../components/DSHeader";
import DSCard, { DSCardContent } from "../../components/DSCard";
import DSButton from "../../components/DSButton";
import DSInput from "../../components/DSInput";
import DSAvatar from "../../components/DSAvatar";
import DSToast from "../../components/DSToast";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const { user, profile, signOut, updateProfile } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: profile?.full_name || "Gavin",
    displayName: profile?.display_name || "Gavin",
    email: user?.email || "gavin@purple.ai",
    country: profile?.country || "US",
    sport: profile?.preferred_sport || "Sport",
  });
  const [shooterId] = useState("N4RAJ6");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState<"success" | "error">(
    "success",
  );

  const handleSave = async () => {
    try {
      await updateProfile({
        full_name: formData.fullName,
        display_name: formData.displayName,
        country: formData.country,
        preferred_sport: formData.sport,
      });
      setEditing(false);
      showToast("Profile updated successfully!", "success");
    } catch (error) {
      showToast("Failed to update profile", "error");
    }
  };

  const handleSignOut = async () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut();
          } catch (error) {
            showToast("Failed to sign out", "error");
          }
        },
      },
    ]);
  };

  const copyShooterId = () => {
    // In a real app, this would copy to clipboard
    showToast("Shooter ID copied to clipboard!", "success");
  };

  const showToast = (message: string, variant: "success" | "error") => {
    setToastMessage(message);
    setToastVariant(variant);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <View style={styles.container}>
      <DSHeader
        title="Profile"
        userName={profile?.display_name || profile?.full_name || "User"}
        logoSrc={require("../../assets/images/shot-tracker-main-logo.png")}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <DSAvatar size={120} icon="account" style={styles.avatar} />
            <TouchableOpacity style={styles.uploadButton}>
              <MaterialCommunityIcons name="upload" size={20} color="#0FB8A9" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{formData.displayName}</Text>
          <Text style={styles.userEmail}>{formData.email}</Text>
        </View>

        {/* Shooter ID Card */}
        <DSCard style={styles.shooterIdCard}>
          <DSCardContent>
            <View style={styles.shooterIdHeader}>
              <Text style={styles.shooterIdTitle}>Shooter ID</Text>
              <TouchableOpacity
                onPress={copyShooterId}
                style={styles.copyButton}
              >
                <MaterialCommunityIcons
                  name="content-copy"
                  size={16}
                  color="#6B7280"
                />
                <Text style={styles.copyText}>Copy</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.shooterIdSubtitle}>
              Share your Shooter ID to connect with friends
            </Text>
            <Text style={styles.shooterIdValue}>{shooterId}</Text>

            {/* QR Code Placeholder */}
            <View style={styles.qrCodeContainer}>
              <View style={styles.qrCodePlaceholder}>
                <MaterialCommunityIcons
                  name="qrcode"
                  size={120}
                  color="#111827"
                />
              </View>
            </View>
          </DSCardContent>
        </DSCard>

        {/* Profile Information */}
        <DSCard style={styles.profileCard}>
          <DSCardContent>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Profile Information</Text>
              <TouchableOpacity
                onPress={() => setEditing(!editing)}
                style={styles.editButton}
              >
                <MaterialCommunityIcons
                  name={editing ? "close" : "pencil"}
                  size={20}
                  color="#0FB8A9"
                />
              </TouchableOpacity>
            </View>

            <DSInput
              label="Full Name"
              value={formData.fullName}
              onChangeText={(text) =>
                setFormData({ ...formData, fullName: text })
              }
              style={styles.input}
              inputStyle={!editing && styles.disabledInput}
            />

            <DSInput
              label="Display Name"
              value={formData.displayName}
              onChangeText={(text) =>
                setFormData({ ...formData, displayName: text })
              }
              style={styles.input}
              inputStyle={!editing && styles.disabledInput}
            />

            <DSInput
              label="Email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              keyboardType="email-address"
              style={styles.input}
              inputStyle={styles.disabledInput} // Email is always disabled
            />

            <DSInput
              label="Country"
              value={formData.country}
              onChangeText={(text) =>
                setFormData({ ...formData, country: text })
              }
              style={styles.input}
              inputStyle={!editing && styles.disabledInput}
            />

            <DSInput
              label="Preferred Sport"
              value={formData.sport}
              onChangeText={(text) => setFormData({ ...formData, sport: text })}
              style={styles.input}
              inputStyle={!editing && styles.disabledInput}
            />

            {editing && (
              <View style={styles.buttonContainer}>
                <DSButton
                  variant="secondary"
                  onPress={() => setEditing(false)}
                  style={styles.cancelButton}
                >
                  Cancel
                </DSButton>
                <DSButton
                  variant="primary"
                  onPress={handleSave}
                  style={styles.saveButton}
                >
                  Save Changes
                </DSButton>
              </View>
            )}
          </DSCardContent>
        </DSCard>

        {/* Settings */}
        <DSCard style={styles.settingsCard}>
          <DSCardContent>
            <Text style={styles.cardTitle}>Settings</Text>

            <TouchableOpacity style={styles.settingItem}>
              <MaterialCommunityIcons name="bell" size={24} color="#6B7280" />
              <Text style={styles.settingText}>Notifications</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#6B7280"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <MaterialCommunityIcons
                name="shield-account"
                size={24}
                color="#6B7280"
              />
              <Text style={styles.settingText}>Privacy</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#6B7280"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <MaterialCommunityIcons
                name="help-circle"
                size={24}
                color="#6B7280"
              />
              <Text style={styles.settingText}>Help & Support</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#6B7280"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingItem}
              onPress={handleSignOut}
            >
              <MaterialCommunityIcons name="logout" size={24} color="#EF4444" />
              <Text style={[styles.settingText, { color: "#EF4444" }]}>
                Sign Out
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#EF4444"
              />
            </TouchableOpacity>
          </DSCardContent>
        </DSCard>
      </ScrollView>

      <DSToast
        message={toastMessage}
        variant={toastVariant}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
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
  profileHeader: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    backgroundColor: "#E6F7F5",
  },
  uploadButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#0FB8A9",
  },
  userName: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#111827",
    marginBottom: 4,
  },
  userEmail: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
  },
  shooterIdCard: {
    marginBottom: 24,
  },
  shooterIdHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  shooterIdTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#111827",
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  copyText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#6B7280",
    marginLeft: 4,
  },
  shooterIdSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
  },
  shooterIdValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 32,
    color: "#111827",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 4,
  },
  qrCodeContainer: {
    alignItems: "center",
  },
  qrCodePlaceholder: {
    width: 160,
    height: 160,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  profileCard: {
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#111827",
  },
  editButton: {
    padding: 8,
  },
  input: {
    marginBottom: 16,
  },
  disabledInput: {
    backgroundColor: "#F9FAFB",
    color: "#9CA3AF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
  },
  saveButton: {
    flex: 1,
    marginLeft: 8,
  },
  settingsCard: {
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  settingText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#111827",
    flex: 1,
    marginLeft: 16,
  },
});
