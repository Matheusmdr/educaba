import { Image, StyleSheet, Platform, View } from "react-native";
import { Header } from "@/components/header";

export default function ConfigScreen() {
  return (
    <View className="flex-1 pt-8 bg-white">
      <Header title="Config" />
    </View>
  );
}
