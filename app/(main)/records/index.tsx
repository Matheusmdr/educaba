import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/components/header";
import { RecordCard } from "@/components/record-card";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Plus } from "@/lib/icons/Plus";

export default function RecordsScreen() {
  const router = useRouter();

  const navigate = () => {
    router.push("/records/create-record");
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView className="flex-1 gap-4 p-6">
        <Header title="Lavar as mãos" showBackButton>
          <Button className="self-end rounded-xl bg-blue-500" size={"icon"} onPress={navigate}>
            <Plus className="text-white" size={16} />
          </Button>
        </Header>
        <Search />
        <View className="gap-4">
          <RecordCard />
          <RecordCard />
          <RecordCard />
        </View>
      </SafeAreaView>
    </>
  );
}
