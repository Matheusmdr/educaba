import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HeaderWithLead } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function ConfigScreen() {
  return (
    <SafeAreaView className="flex-1 p-6">
      <HeaderWithLead title="Config" />
      <Button variant="outline">
        <Text>teste</Text>
      </Button>
    </SafeAreaView>
  );
}
