import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

type Props = {
  visible: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function BottomSheet({ visible, title, children, onClose }: Props) {
  return (
    <Modal visible={visible} animationType='slide' transparent>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.title}>{title}</Text>
          {children}
          <Text style={styles.close} onPress={onClose}>Close</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.3)' },
  sheet: { backgroundColor: '#fff', padding: 20, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  close: { marginTop: 20, color: '#007AFF', textAlign: 'center' },
});
