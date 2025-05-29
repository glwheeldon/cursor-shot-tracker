import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import DSButton from "../../../../components/DSButton";
import DSInput from "../../../../components/DSInput";
import DSCard, {
  DSCardHeader,
  DSCardTitle,
  DSCardDescription,
  DSCardContent,
  DSCardFooter,
} from "../../../../components/DSCard";
import DSAvatar from "../../../../components/DSAvatar";
import DSBADGE from "../../../../components/DSBadge";
import DSProgress from "../../../../components/DSProgress";
import DSHeader from "../../../../components/DSHeader";
import DSHelperText from "../../../../components/DSHelperText";
import DSSelect from "../../../../components/DSSelect";
import DSTabs from "../../../../components/DSTabs";
import DSToast from "../../../../components/DSToast";

export default function DesignSystemStoryboard() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectValue, setSelectValue] = useState("option1");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastVariant, setToastVariant] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  const showToast = (variant: "success" | "error" | "warning" | "info") => {
    setToastVariant(variant);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <>
      <Text style={styles.heading}>Design System</Text>

      {/* Header Component */}
      <Text style={styles.section}>Header</Text>
      <DSHeader
        title="Shot Tracker"
        userName="John Doe"
        onAvatarPress={() => {}}
      />

      {/* Colors */}
      <Text style={styles.section}>Colors</Text>
      <View style={styles.colorGrid}>
        <View style={[styles.colorBox, { backgroundColor: "#0FB8A9" }]}>
          <Text style={styles.colorText}>Primary</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: "#10B981" }]}>
          <Text style={styles.colorText}>Success</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: "#F59E0B" }]}>
          <Text style={styles.colorText}>Warning</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: "#EF4444" }]}>
          <Text style={styles.colorText}>Error</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: "#3B82F6" }]}>
          <Text style={styles.colorText}>Info</Text>
        </View>
      </View>

      {/* Typography */}
      <Text style={styles.section}>Typography</Text>
      <Text style={styles.displayText}>Display (48px)</Text>
      <Text style={styles.h1}>Heading 1 (36px)</Text>
      <Text style={styles.h2}>Heading 2 (30px)</Text>
      <Text style={styles.h3}>Heading 3 (24px)</Text>
      <Text style={styles.h4}>Heading 4 (20px)</Text>
      <Text style={styles.bodyLarge}>Body Large (18px)</Text>
      <Text style={styles.body}>Body (16px)</Text>
      <Text style={styles.bodySmall}>Body Small (14px)</Text>
      <Text style={styles.caption}>Caption (12px)</Text>

      {/* Buttons */}
      <Text style={styles.section}>Buttons</Text>
      <View style={styles.buttonGroup}>
        <DSButton variant="primary" style={styles.componentSpacing}>
          Primary Button
        </DSButton>
        <DSButton variant="secondary" style={styles.componentSpacing}>
          Secondary Button
        </DSButton>
        <DSButton variant="ghost" style={styles.componentSpacing}>
          Ghost Button
        </DSButton>
        <DSButton variant="link" style={styles.componentSpacing}>
          Link Button
        </DSButton>
        <DSButton variant="destructive" style={styles.componentSpacing}>
          Destructive Button
        </DSButton>
      </View>

      <View style={styles.buttonGroup}>
        <DSButton variant="primary" size="sm" style={styles.componentSpacing}>
          Small Button
        </DSButton>
        <DSButton variant="primary" size="md" style={styles.componentSpacing}>
          Medium Button
        </DSButton>
        <DSButton variant="primary" size="lg" style={styles.componentSpacing}>
          Large Button
        </DSButton>
      </View>

      <DSButton variant="primary" fullWidth style={styles.componentSpacing}>
        Full Width Button
      </DSButton>

      {/* Inputs */}
      <Text style={styles.section}>Inputs</Text>
      <DSInput
        label="Text Input"
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter text here"
        style={styles.componentSpacing}
      />

      <DSInput
        label="Password Input"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        placeholder="••••••••"
        style={styles.componentSpacing}
      />

      <DSInput
        label="Error Input"
        value={inputValue}
        onChangeText={setInputValue}
        error="This field has an error"
        style={styles.componentSpacing}
      />

      <DSSelect
        label="Select Input"
        value={selectValue}
        onChange={setSelectValue}
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        style={styles.componentSpacing}
      />

      {/* Helper Text */}
      <Text style={styles.section}>Helper Text</Text>
      <DSHelperText type="info" style={styles.componentSpacing}>
        This is an information message
      </DSHelperText>
      <DSHelperText type="error" style={styles.componentSpacing}>
        This is an error message
      </DSHelperText>

      {/* Cards */}
      <Text style={styles.section}>Cards</Text>
      <DSCard style={styles.componentSpacing}>
        <DSCardHeader>
          <DSCardTitle>Card Title</DSCardTitle>
          <DSCardDescription>This is a card description</DSCardDescription>
        </DSCardHeader>
        <DSCardContent>
          <Text style={styles.body}>
            This is the card content area where the main information goes.
          </Text>
        </DSCardContent>
        <DSCardFooter>
          <DSButton variant="primary" size="sm">
            Action
          </DSButton>
        </DSCardFooter>
      </DSCard>

      {/* Avatars */}
      <Text style={styles.section}>Avatars</Text>
      <View style={styles.row}>
        <DSAvatar size={48} label="JD" style={styles.componentSpacing} />
        <DSAvatar size={48} icon="account" style={styles.componentSpacing} />
        <DSAvatar
          size={48}
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.componentSpacing}
        />
      </View>

      {/* Badges */}
      <Text style={styles.section}>Badges</Text>
      <View style={styles.row}>
        <DSBADGE variant="primary" style={styles.componentSpacing}>
          Primary
        </DSBADGE>
        <DSBADGE variant="success" style={styles.componentSpacing}>
          Success
        </DSBADGE>
        <DSBADGE variant="warning" style={styles.componentSpacing}>
          Warning
        </DSBADGE>
        <DSBADGE variant="error" style={styles.componentSpacing}>
          Error
        </DSBADGE>
        <DSBADGE variant="info" style={styles.componentSpacing}>
          Info
        </DSBADGE>
      </View>

      {/* Progress */}
      <Text style={styles.section}>Progress</Text>
      <DSProgress
        progress={0.25}
        label="25% Complete"
        style={styles.componentSpacing}
      />
      <DSProgress
        progress={0.5}
        label="50% Complete"
        style={styles.componentSpacing}
      />
      <DSProgress
        progress={0.75}
        label="75% Complete"
        style={styles.componentSpacing}
      />

      {/* Tabs */}
      <Text style={styles.section}>Tabs</Text>
      <DSTabs
        tabs={["Tab 1", "Tab 2", "Tab 3"]}
        activeIndex={activeTabIndex}
        onTabChange={setActiveTabIndex}
        style={styles.componentSpacing}
      />
      <View style={styles.tabContent}>
        {activeTabIndex === 0 && <Text>Content for Tab 1</Text>}
        {activeTabIndex === 1 && <Text>Content for Tab 2</Text>}
        {activeTabIndex === 2 && <Text>Content for Tab 3</Text>}
      </View>

      {/* Toast Buttons */}
      <Text style={styles.section}>Toast Messages</Text>
      <View style={styles.row}>
        <DSButton
          variant="primary"
          size="sm"
          style={styles.componentSpacing}
          onPress={() => showToast("success")}
        >
          Success Toast
        </DSButton>
        <DSButton
          variant="primary"
          size="sm"
          style={styles.componentSpacing}
          onPress={() => showToast("error")}
        >
          Error Toast
        </DSButton>
        <DSButton
          variant="primary"
          size="sm"
          style={styles.componentSpacing}
          onPress={() => showToast("warning")}
        >
          Warning Toast
        </DSButton>
        <DSButton
          variant="primary"
          size="sm"
          style={styles.componentSpacing}
          onPress={() => showToast("info")}
        >
          Info Toast
        </DSButton>
      </View>

      {/* Toast Component */}
      <DSToast
        message={`This is a ${toastVariant} toast message`}
        variant={toastVariant}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  content: {
    padding: 24,
    paddingBottom: 48,
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
    marginBottom: 16,
  },
  colorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  colorBox: {
    width: "48%",
    height: 80,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  colorText: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  displayText: {
    fontFamily: "Poppins-Bold",
    fontSize: 48,
    color: "#111827",
    marginBottom: 8,
  },
  h1: {
    fontFamily: "Poppins-Bold",
    fontSize: 36,
    color: "#111827",
    marginBottom: 8,
  },
  h2: {
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    color: "#111827",
    marginBottom: 8,
  },
  h3: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#111827",
    marginBottom: 8,
  },
  h4: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#111827",
    marginBottom: 8,
  },
  bodyLarge: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#111827",
    marginBottom: 8,
  },
  body: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#111827",
    marginBottom: 8,
  },
  bodySmall: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#111827",
    marginBottom: 8,
  },
  caption: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 8,
  },
  buttonGroup: {
    marginBottom: 16,
  },
  componentSpacing: {
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  tabContent: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
});
