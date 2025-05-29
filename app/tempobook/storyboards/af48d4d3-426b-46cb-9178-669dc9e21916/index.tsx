import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, HelperText } from "react-native-paper";
import DSInput from "../../../../components/DSInput";
import DSButton from "../../../../components/DSButton";

export default function SignupStoryboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <Image
        source={require("../../../../assets/images/shot-tracker-main-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Create Account</Text>
      <Card style={styles.card} elevation={2}>
        <Card.Content>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <DSInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"
              keyboardType="email-address"
              style={{ marginBottom: 16 }}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <DSInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="••••••••"
              right={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.eyeIcon}>
                    {showPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              }
              style={{ marginBottom: 16 }}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <DSInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              placeholder="••••••••"
              right={
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Text style={styles.eyeIcon}>
                    {showConfirmPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              }
              style={{ marginBottom: 8 }}
            />
          </View>

          <HelperText type="error" visible={!!error} style={styles.errorText}>
            {String(error || "")}
          </HelperText>

          <DSButton
            variant="primary"
            loading={loading}
            disabled={loading}
            style={styles.button}
            fullWidth
          >
            Create Account
          </DSButton>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 24,
    marginTop: 32,
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#111827",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingVertical: 24,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  inputGroup: {
    marginBottom: 8,
  },
  label: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#111827",
    marginBottom: 4,
  },
  eyeIcon: {
    color: "#0FB8A9",
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    paddingHorizontal: 8,
  },
  errorText: {
    color: "#EF4444",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
  },
  button: {
    marginTop: 8,
    marginBottom: 16,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  loginText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#6B7280",
  },
  loginLink: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#0FB8A9",
    marginLeft: 4,
  },
});
