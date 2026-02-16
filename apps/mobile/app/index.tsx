import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-primary text-3xl font-bold">BrainBox</Text>
      <Link href="/auth" className="mt-4 text-accent font-semibold">
        Go to Login
      </Link>
    </View>
  );
}