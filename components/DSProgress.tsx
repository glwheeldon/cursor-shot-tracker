import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export type DSProgressProps = {
  progress: number;
  color?: string;
  label?: string;
  style?: any;
};

export function DSProgress({ progress, color = '#0FB8A9', label, style }: DSProgressProps) {
  return (
    <View style={style}>
      {label && <Text style={styles.label}>{label}</Text>}
      <ProgressBar progress={progress} color={color} style={styles.progress} />
    </View>
  );
}

const styles = StyleSheet.create({
  progress: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    marginBottom: 8,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#111827',
    marginBottom: 4,
  },
});

export default DSProgress; 