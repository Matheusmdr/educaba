import { Header } from "@/components/header";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateRecordScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView className="flex-1 gap-4 p-6">
        <Header title="Lavar as mãos" showBackButton></Header>
      </SafeAreaView>
    </>
  );
}
