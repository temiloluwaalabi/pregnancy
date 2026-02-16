import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-3xl font-bold text-primary">BrainBox</Text>
      <Link href="/auth" className="text-accent mt-4 font-semibold">
        Go to Login
      </Link>
    </View>
  );
}
