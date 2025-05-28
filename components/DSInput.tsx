import * as React from "react";
import {
  Platform,
  View,
  StyleSheet,
  Text as RNText,
  TextInput as RNTextInput,
} from "react-native";

export type DSInputProps = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  style?: any;
  inputStyle?: any;
};

export function DSInput(props: DSInputProps) {
  if (Platform.OS === "web") {
    return <DSInputWeb {...props} />;
  }
  return <DSInputNative {...props} />;
}

function DSInputWeb({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  style,
  inputStyle,
}: DSInputProps) {
  const inputId = React.useId();
  return (
    <View style={[webStyles.wrapper, style]}>
      {label && (
        <label htmlFor={inputId} style={webStyles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
        style={{
          ...webStyles.input,
          ...(error ? webStyles.inputError : {}),
          ...inputStyle,
        }}
        autoComplete="off"
      />
      {error && <div style={webStyles.error}>{error}</div>}
    </View>
  );
}

function DSInputNative({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  style,
  inputStyle,
  ...rest
}: DSInputProps) {
  return (
    <View style={style}>
      {label && <RNText style={nativeStyles.label}>{label}</RNText>}
      <RNTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[
          nativeStyles.input,
          inputStyle,
          error && nativeStyles.inputError,
        ]}
        placeholderTextColor="#9CA3AF"
        {...rest}
      />
      {error && <RNText style={nativeStyles.error}>{error}</RNText>}
    </View>
  );
}

const webStyles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    marginBottom: 8,
    width: "100%",
  },
  label: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#111827",
    marginBottom: 4,
    display: "block",
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    background: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#111827",
    border: "1px solid #D1D5DB",
    padding: "0 12px",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: 0,
    transition: "border-color 0.2s",
  },
  inputError: {
    border: "1px solid #EF4444",
    color: "#EF4444",
  },
  error: {
    color: "#EF4444",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 0,
    textAlign: "left",
  },
};

const nativeStyles = StyleSheet.create({
  label: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#111827",
    marginBottom: 4,
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
    marginBottom: 0,
  },
  inputError: {
    borderColor: "#EF4444",
    color: "#EF4444",
  },
  error: {
    color: "#EF4444",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 0,
    textAlign: "left",
  },
});

export default DSInput;
