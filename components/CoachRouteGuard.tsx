import React from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../contexts/auth-context";
import { View, Text } from "react-native";

export default function CoachRouteGuard({ children }: { children: React.ReactNode }) {
  const { profile, isLoading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading && profile?.role !== "coach") {
      // Redirect non-coach users to dashboard
      router.replace("/dashboard");
    }
  }, [isLoading, profile, router]);

  if (isLoading) return null;
  if (profile?.role !== "coach") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>You do not have access to this page.</Text>
      </View>
    );
  }
  return <>{children}</>;
}
