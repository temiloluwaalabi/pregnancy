import './globals.css';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* This will automatically find your index.tsx or auth.tsx */}
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
    </Stack>
  );
}
