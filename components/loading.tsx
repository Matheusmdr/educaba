import { Loader2 } from "lucide-react-native";
import { ActivityIndicator, View } from "react-native";

function Loading() {
  return (
    <View className="flex items-center justify-center h-screen bg-blue-500">
      <ActivityIndicator color="#fff" size={34} />
    </View>
  );
}

export { Loading };
