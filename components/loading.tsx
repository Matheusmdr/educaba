import { ActivityIndicator, View } from "react-native";

function Loading() {
  return (
    <View className="flex h-screen items-center justify-center bg-blue-500">
      <ActivityIndicator color="#fff" size={34} />
    </View>
  );
}

export { Loading };
