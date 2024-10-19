import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { Header } from "@/components/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 pt-8 bg-white h-full">
      <Header title="Home" />
    </SafeAreaView>
  );
}
