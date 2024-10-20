import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { HeaderWithLead } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function ConfigScreen() {
  return (
    <View className="flex-1 pt-8 bg-white px-6">
      <HeaderWithLead title="Config" />
      <Button variant="outline">
        <Text>teste</Text>
      </Button>
    </View>
  );
}
