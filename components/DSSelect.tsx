import * as React from 'react';
import { Platform, View, StyleSheet, Text as RNText } from 'react-native';

export type DSSelectOption = { label: string; value: string };
export type DSSelectProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: DSSelectOption[];
  error?: string;
  style?: any;
  inputStyle?: any;
};

export function DSSelect(props: DSSelectProps) {
  if (Platform.OS === 'web') {
    return <DSSelectWeb {...props} />;
  }
  return <DSSelectNative {...props} />;
}

function DSSelectWeb({ label, value, onChange, options, error, style, inputStyle }: DSSelectProps) {
  const selectId = React.useId();
  return (
    <View style={[webStyles.wrapper, style]}>
      {label && <label htmlFor={selectId} style={webStyles.label}>{label}</label>}
      <select
        id={selectId}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ ...webStyles.select, ...(error ? webStyles.selectError : {}), ...inputStyle }}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value} style={webStyles.option}>{opt.label}</option>
        ))}
      </select>
      {error && <div style={webStyles.error}>{error}</div>}
    </View>
  );
}

function DSSelectNative({ label, value, onChange, options, error, style, inputStyle }: DSSelectProps) {
  // For simplicity, use a basic Picker. For production, use @react-native-picker/picker or similar.
  return (
    <View style={style}>
      {label && <RNText style={nativeStyles.label}>{label}</RNText>}
      {/* Replace with Picker for production */}
      <RNText style={[nativeStyles.input, inputStyle, error && nativeStyles.inputError]}>[Select not implemented]</RNText>
      {error && <RNText style={nativeStyles.error}>{error}</RNText>}
    </View>
  );
}

const webStyles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    marginBottom: 8,
    width: '100%',
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
    display: 'block',
  },
  select: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    background: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#111827',
    border: '1px solid #D1D5DB',
    padding: '0 12px',
    outline: 'none',
    boxSizing: 'border-box',
    marginBottom: 0,
    transition: 'border-color 0.2s',
  },
  selectError: {
    border: '1px solid #EF4444',
    color: '#EF4444',
  },
  option: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#111827',
  },
  error: {
    color: '#EF4444',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 0,
    textAlign: 'left',
  },
};

const nativeStyles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
  },
  input: {
    height: 48,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#111827',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 12,
    marginBottom: 0,
  },
  inputError: {
    borderColor: '#EF4444',
    color: '#EF4444',
  },
  error: {
    color: '#EF4444',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 0,
    textAlign: 'left',
  },
});

export default DSSelect; 