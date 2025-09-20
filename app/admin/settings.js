import { View, Text, StyleSheet } from 'react-native';

export default function AdminSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.meta}>Coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#111827', marginBottom: 12 },
  meta: { fontSize: 14, color: '#6B7280' },
}); 