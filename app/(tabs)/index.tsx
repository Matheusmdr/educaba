import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { Header } from "@/components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 pt-8 bg-white h-full">
      <Header title="Home" />
      <Button>
        <Text>Default</Text>
      </Button>
    </SafeAreaView>
  );
}
