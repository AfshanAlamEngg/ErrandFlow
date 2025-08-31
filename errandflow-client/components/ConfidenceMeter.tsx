import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  score: number;
};

export default function ConfidenceMeter({ score }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Confidence: {score}%</Text>
      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${score}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  label: { fontSize: 14, marginBottom: 4 },
  bar: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: 8,
    backgroundColor: '#4CAF50',
  },
});
