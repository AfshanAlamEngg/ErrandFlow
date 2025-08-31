import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
  rating: number;
  distance: string;
  openNow: boolean;
};

export default function PlaceCard({ name, rating, distance, openNow }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>⭐ {rating} • {distance}</Text>
      <Text style={{ color: openNow ? 'green' : 'red' }}>
        {openNow ? 'Open Now' : 'Closed'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, margin: 8, borderRadius: 8, backgroundColor: '#fff', elevation: 2 },
  name: { fontSize: 18, fontWeight: 'bold' },
});
